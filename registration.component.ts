import { Component, OnInit } from '@angular/core';
import { User } from '../user';
import { UserRegistationService } from '../user-registation.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {


  user: User=new User("","","","",0,"","","","");
  message:any;

  constructor(private service:UserRegistationService) { }

  ngOnInit() {
  }
  registerForm= new FormGroup({
    firstName: new FormControl("",[Validators.required,Validators.pattern("[a-zA-Z].*")]),
    lastName: new FormControl("",[Validators.required,Validators.pattern("[a-zA-Z].*")]),
    email: new FormControl("",[Validators.required,Validators.email]),
    mobileNumber: new FormControl("",[Validators.required,Validators.pattern("[0-9]*"),Validators.minLength(10),Validators.maxLength(10)]),
    gender: new FormControl(""),
    department: new FormControl(""),
    designation: new FormControl(""),
    employeeId: new FormControl("",[Validators.required,Validators.pattern("[0-9]*")]),
    baseLocation: new FormControl(""),
  });
  
  get firstName():FormControl{
    return this.registerForm.get("firstName") as FormControl;
  }
  get lastName():FormControl{
    return this.registerForm.get("lastName") as FormControl;
  }
  get email():FormControl{
    return this.registerForm.get("email") as FormControl;
  }
  get mobileNumber():FormControl{
    return this.registerForm.get("mobileNumber") as FormControl;
  }
  get gender():FormControl{
    return this.registerForm.get("gender") as FormControl;
  }
  get employeeId():FormControl{
    return this.registerForm.get("employeeId") as FormControl;
  }
  get baseLocation():FormControl{
    return this.registerForm.get("baseLocation") as FormControl;
  }
  get department():FormControl{
    return this.registerForm.get("department") as FormControl;
  }
  get designation():FormControl{
    return this.registerForm.get("designation") as FormControl;
  }
  

  public registerNow(){
let resp=this.service.doRegistration(this.user);
resp.subscribe((data)=>this.message=data);
 this.user.baseLocation = "",
 this.user.firstName = "" ,
 this.user.lastName = "",
 this.user.email = "",
 this.user.gender = "",
 this.user.mobileNumber = "",
 this.user.department = "",
 this.user.designation = "",
this.user.employeeId=""
}

}