import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CommonService } from 'src/app/common/common.service';

@Component({
  selector: 'app-ownerhome',
  templateUrl: './ownerhome.component.html',
  styleUrls: ['./ownerhome.component.css']
})
export class OwnerhomeComponent {
  loginForm!: FormGroup;
  ownerData: any;
  validUser: boolean = false;
  forgotPasswordForm!: FormGroup;
  forgotPassword: boolean= false;
  showForgetPasswordForm: boolean = false;
  constructor(private formBuilder: FormBuilder,
              private commonService: CommonService,
              private router: Router
    ){}

  // login(){
  //   this.router.navigateByUrl('owner/ownerlogin');
  // }
  
  ngOnInit() {
    this.forgotPassword = this.commonService.forgotPassword;
    this.loginForm = this.formBuilder.group({
    username: ['', [Validators.required]],
    password: ['', [Validators.required, Validators.minLength(6)]]

    
    });

    this.forgotPasswordForm = this.formBuilder.group({
      newpass: ['', [Validators.required]],
      confirmpass:  ['', [Validators.required]]
    });
    }
    
    get newpass() {
      return this.forgotPasswordForm.get('newpass');
    }


    onSubmit() {
    if (this.loginForm.invalid) {
      const newpass = this.forgotPasswordForm.value.newpass;
    console.log('Reset new password: ' + newpass);
      
    }
    else{
    this.router.navigateByUrl('owner/ownersuccess');
    }
    
  }

    // login() {
    //   console.log(this.loginForm.value);
    //   if (this.loginForm.value.username) {
    //     this.commonService.username = this.loginForm.value.username;
    //   }
  
    //   if (this.ownerData) {
    //     this.ownerData.find((ownerData: any) => {
    //       if (ownerData.username === this.loginForm.value.username && ownerData.Password === this.loginForm.value.password) {
    //         this.validUser = true;
    //       }
    //     });
  
    //     if (this.validUser) {
    //       this.router.navigateByUrl('owner/ownersuccess');
    //     }
    //     else {
    //      alert('username or password is incorrect');
    //      this.commonService.warningToaster('Password is incorrect','Warning',{
    //       timeOut: 10000,
    //       positionClass: 'toast-top-center'})
    //       this.commonService.forgotPassword = true;
    //       this.router.navigateByUrl('owner/ownerhome');
    //     }
    //   }
    // }

    forgetPassword() {
      this.showForgetPasswordForm = !this.showForgetPasswordForm;
    }

    reset(){
      this.showForgetPasswordForm = !this.showForgetPasswordForm;
      this.forgotPassword = false;
    }
}
