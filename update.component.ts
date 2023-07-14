import { Component , OnInit} from '@angular/core';
import { updateUser } from '../updateUser';
import { UserRegistationService } from '../user-registation.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {
  updateUser: updateUser=new updateUser("","","","",0,"","","","",0);
  message:any;
  result: any;
  editForm =  new FormGroup({
    firstName: new FormControl("",[Validators.required,Validators.pattern("[a-zA-Z].*")]),
    lastName: new FormControl("",[Validators.required,Validators.pattern("[a-zA-Z].*")]),
    email: new FormControl("",[Validators.required,Validators.email]),
    mobileNumber: new FormControl("",[Validators.required,Validators.pattern("[0-9]*"),Validators.minLength(10),Validators.maxLength(10)]),
    gender: new FormControl(""),
    department: new FormControl(""),
    designation: new FormControl(""),
    employeeId: new FormControl("",[Validators.required,Validators.pattern("[0-9]*")]),
    baseLocation: new FormControl(""),
    id: new FormControl("")
  });


  constructor(private service:UserRegistationService,private router:ActivatedRoute) { }


  ngOnInit():void {
    this.service.getUser(this.router.snapshot.params.id).subscribe((result)=>{
      this.result=result;
   this.editForm = new FormGroup({
    firstName: new FormControl(this.result['firstName'],[Validators.required,Validators.pattern("[a-zA-Z].*")]),
    lastName: new FormControl(this.result['lastName'],[Validators.required,Validators.pattern("[a-zA-Z].*")]),
    email: new FormControl(this.result['email'],[Validators.required,Validators.email]),
    mobileNumber: new FormControl(this.result['mobileNumber'],[Validators.required,Validators.pattern("[0-9]*"),Validators.minLength(10),Validators.maxLength(10)]),
    gender: new FormControl(this.result['gender']),
    department: new FormControl(this.result['department']),
    designation: new FormControl(this.result['designation']),
    employeeId: new FormControl(this.result['employeeId'],[Validators.required,Validators.pattern("[0-9]*")]),
    baseLocation: new FormControl(this.result['baseLocation']),
    id: new FormControl(this.result['id'])
  });
    })
  }

  get firstName():FormControl{
    return this.editForm.get("firstName") as FormControl;
  }
  get lastName():FormControl{
    return this.editForm.get("lastName") as FormControl;
  }
  get email():FormControl{
    return this.editForm.get("email") as FormControl;
  }
  get mobileNumber():FormControl{
    return this.editForm.get("mobileNumber") as FormControl;
  }
  get gender():FormControl{
    return this.editForm.get("gender") as FormControl;
  }
  get employeeId():FormControl{
    return this.editForm.get("employeeId") as FormControl;
  }
  get baseLocation():FormControl{
    return this.editForm.get("baseLocation") as FormControl;
  }
  get department():FormControl{
    return this.editForm.get("department") as FormControl;
  }
  get designation():FormControl{
    return this.editForm.get("designation") as FormControl;
  }
  get id():FormControl{
    return this.editForm.get("id") as FormControl;
  }
  
  
  
public updateUserMethod(){
  this.updateUser.firstName=this.editForm.value.firstName
  this.updateUser.lastName=this.editForm.value.lastName
  this.updateUser.email=this.editForm.value.email
  this.updateUser.mobileNumber=this.editForm.value.mobileNumber
  this.updateUser.baseLocation=this.editForm.value.baseLocation
  this.updateUser.department=this.editForm.value.department
  this.updateUser.designation=this.editForm.value.designation
  this.updateUser.employeeId=this.editForm.value.employeeId
  this.updateUser.gender=this.editForm.value.gender
  this.updateUser.id=this.editForm.value.id

  let resp=this.service.updateUser(this.updateUser);
  resp.subscribe((data)=>this.message=data);
   this.updateUser.baseLocation = "",
   this.updateUser.firstName = "" ,
   this.updateUser.lastName = "",
   this.updateUser.email = "",
   this.updateUser.gender = "",
   this.updateUser.mobileNumber = "",
   this.updateUser.department = "",
   this.updateUser.designation = "",
  this.updateUser.employeeId="",
  this.updateUser.id=""
  }
}
