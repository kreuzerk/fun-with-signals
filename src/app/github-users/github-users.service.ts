import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class GithubUsersService {

  constructor(private http: HttpClient){
  }

  getUsers(searchTerm: any){
    return this.http.get(`https://api.github.com/search/users?q=${searchTerm}`);
  }
}
