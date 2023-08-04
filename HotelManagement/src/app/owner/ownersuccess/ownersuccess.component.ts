import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-ownersuccess',
  templateUrl: './ownersuccess.component.html',
  styleUrls: ['./ownersuccess.component.css']
})
export class OwnersuccessComponent {

  constructor(private router: Router){}
  
  hotelregistration(){
    this.router.navigateByUrl('owner/newhotelregistration');
  }
}
