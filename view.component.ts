import { Component } from '@angular/core';
import { UserRegistationService } from '../user-registation.service';
import { User } from '../user';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent {
  users:any;
  email:string | undefined;
  
  constructor(private service:UserRegistationService) { }


  public findUserByEmailId(){
    let resp= this.service.getUserByEmail(this.email);
    resp.subscribe((data)=>this.users=data);
   }

   ngOnInit() {
    let resp=this.service.getUsers();
    resp.subscribe((data)=>this.users=data);
  }
}
