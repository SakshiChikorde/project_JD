import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CommonService } from 'src/app/common/common.service';


@Component({
  selector: 'app-owner-signup',
  templateUrl: './owner-signup.component.html',
  styleUrls: ['./owner-signup.component.css']
})
export class OwnerSignupComponent {
  signupForm!: FormGroup;
  
  constructor(private formBuilder: FormBuilder,
              private router: Router
    ) {}
  
  ngOnInit() {
  this.signupForm= this.formBuilder.group({
  firstname: ['', Validators.required],
  lastname:['', Validators.required],
  email: ['', [Validators.required, Validators.email]],
  password: ['', [Validators.required, Validators.minLength(6)]],
  panNumber: ['', [Validators.required, Validators.pattern(/^([a-zA-Z]){5}([0-9]){4}([a-zA-Z]){1}?$/)]],
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
  



  // submit(){
  //   let request = {
  //     UserName : this.signupForm.value.name,
  //     Email:   this.signupForm.value.email,
  //     Mobile :  this.signupForm.value.mobile,
  //     Password :  this.signupForm.value.password,
  //     Gender :  this.signupForm.value.gender
  //   }

  //   this.apiCallService.postApiCall(this.journey,request).subscribe(resp=>{
  //     console.log(resp);
  //     this.postResponse = resp;
  //   })
  //   // if(this.postResponse?.id){
  //    this.router.navigateByUrl('owner/ownerSuccess');
  //    //}
  // }
  }