import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CommonService } from '../common/common.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  constructor(private router: Router,
              private commonService: CommonService
    ){}

  journey(journey: string){
    if(journey === 'admin'){
      this.commonService.journey='admin';
      this.router.navigateByUrl('admin');
    }
    else if(journey === 'user'){
      this.commonService.journey='user';
      this.router.navigateByUrl('user/userhome');
      //or else this.router.navigateByUrl('user');
    }
    else{
      this.commonService.journey='owner';
      this.commonService.forgotPassword = true;
      this.router.navigateByUrl('owner');
    }
  }
}
