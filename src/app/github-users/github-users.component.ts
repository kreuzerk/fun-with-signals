import {Component, OnInit, SettableSignal, ViewChild} from "@angular/core";
import {SignalInputDirective} from "../input-example/signal-input.directive";
import {toObservable} from "../rxjs-interop/to-observable/to-observable";
import {AsyncPipe, JsonPipe, NgForOf, NgIf} from "@angular/common";
import {debounceTime, distinctUntilChanged, filter, map, Observable, switchMap, tap} from "rxjs";
import {GithubUsersService} from "./github-users.service";
import {SpinnerComponent} from "./spinner.component";
import {fromObservable} from "../rxjs-interop/from-observable/fromObservable";

@Component({
  selector: 'github-users',
  template: `
    <h1>Github Users</h1>
    <input signalInput type="text"/>
    <spinner *ngIf="loading"></spinner>

    <div *ngFor="let user of users()">
      <img [src]="user.avatar_url" width="50" height="50"/>
      {{ user.login }}
    </div>
  `,
  imports: [
    SignalInputDirective,
    AsyncPipe,
    SpinnerComponent,
    NgIf,
    JsonPipe,
    NgForOf
  ],
  standalone: true
})
export class GithubUsersComponent implements OnInit {

  @ViewChild(SignalInputDirective, {static: true}) input!: SignalInputDirective;

  users!: SettableSignal<any>;
  loading = false;

  constructor(private ghUserService: GithubUsersService) {
  }

  ngOnInit(): void {
    this.users = fromObservable(
      toObservable(this.input.value).pipe(
        debounceTime(500),
        distinctUntilChanged(),
        filter((value: any) => value.length > 2),
        tap(_ => this.loading = true),
        switchMap(value => this.ghUserService.getUsers(value)),
        tap(_ => this.loading = false),
        map((res: any) => res.items.slice(0, 10))
      ), []);
  }
}
