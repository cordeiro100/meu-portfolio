import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
private url =  "http://localhost:3000/users"

constructor(private httpClient: HttpClient){

}

todosUsuarios():Observable<User[]>{
  return this.httpClient.get<User[]>(this.url)
}

registrar(registro: User):Observable<User>{
  return this.httpClient.post<User>(this.url, registro)
}




}