import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CommonApiCallServicesService } from 'src/app/common/common-api-call-services.service';
import { CommonService } from 'src/app/common/common.service';


@Component({
  selector: 'app-owner-signup',
  templateUrl: './owner-signup.component.html',
  styleUrls: ['./owner-signup.component.css']
})
export class OwnerSignupComponent {
  signupForm!: FormGroup;
  journey!: string;
  
  postResponse: any;
  
  constructor(private formBuilder: FormBuilder,
              private router: Router,
              private commonApiCallServices : CommonApiCallServicesService,
              private commonService: CommonService
    ) {}
  
  ngOnInit() {
  this.journey=  this.commonService.journey;
    console.log("this.journey", this.journey);


  this.signupForm= this.formBuilder.group({
  firstname: ['', Validators.required],
  lastname:['', Validators.required],
  email: ['', [Validators.required, Validators.email]],
  password: ['', [Validators.required, Validators.minLength(6)]],
  panNumber: ['', [Validators.required, Validators.pattern(/^([a-zA-Z]){5}([0-9]){4}([a-zA-Z]){1}?$/)]],
  gender: [''],
  });
  }
  onSubmit() {
    if (this.signupForm.invalid) {
      return;
    }
  }
  signup(){
    this.router.navigateByUrl('home');
  }
  
  submit(){
    let endpoint='owner';
    let request = {
      UserName : this.signupForm.value.firstname,
      LastName:   this.signupForm.value.lastname,
      Email :  this.signupForm.value.email,
      Password :  this.signupForm.value.password,
      PanNumber : this.signupForm.value.panNumber,
      Gender :  this.signupForm.value.gender
    }

    this.commonApiCallServices.postApiCall(endpoint,request).subscribe((resp: any)=>{
      console.log(resp);
      this.postResponse = resp;
    })
    if(this.postResponse?.id){
     this.router.navigateByUrl('owner/ownerhome');
     }
  }
  }
