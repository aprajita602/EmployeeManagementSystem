import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from './user';
import { updateUser } from './updateUser';

@Injectable({
  providedIn: 'root'
})
export class UserRegistationService {

  constructor(private http:HttpClient) { }


  public doRegistration(user: User){
    return this.http.post("http://localhost:8087/api/addEmployee",user,{responseType:'text' as 'json'});
  }

  public getUsers(){
    return this.http.get("http://localhost:8087/api/employees");
  }

  public getUser(employeeId:number){
    return this.http.get("http://localhost:8087/api/employees/"+employeeId);
  }

  public getUserByEmail(email: string | undefined){
    return this.http.get("http://localhost:8087/api/findEmployee/"+email);
  }

  public deleteUser(id: string | number){
    return this.http.delete("http://localhost:8087/api/cancel/"+id);
  }

  public updateUser(user: updateUser){
    return this.http.put("http://localhost:8087/api/updateEmployee",user,{responseType:'text' as 'json'});
  }
}