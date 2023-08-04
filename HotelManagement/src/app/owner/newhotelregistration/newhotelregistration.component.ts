import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable, map, startWith } from 'rxjs';

@Component({
  selector: 'app-newhotelregistration',
  templateUrl: './newhotelregistration.component.html',
  styleUrls: ['./newhotelregistration.component.css']
})
export class NewhotelregistrationComponent {
  hotelRegistrationForm!:FormGroup;
  myControl = new FormControl('');
  options: string[] = ['One', 'Two', 'Three'];
  filteredOptions!: Observable<string[]>;
  constructor(private formBulider:FormBuilder,private router:Router){}

  ngOnInit(){
    this.myOwnerRagistration();
    this.filteredOptions = this.myControl.valueChanges.pipe(
      startWith(''),
      map(value => this._filter(value || '')),
    );
  }
  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();

    return this.options.filter(option => option.toLowerCase().includes(filterValue));
  }
  
  myOwnerRagistration(){
    this.hotelRegistrationForm=this.formBulider.group({
      ownerName:['',[Validators.required,Validators.minLength(5),Validators.pattern('[A-za-z ]*$')]],
      ownerContact:['',[Validators.required,Validators.pattern('[0-9]*$')]],
      hotelName:['',[Validators.required,Validators.minLength(5),Validators.pattern('[a-zA-z0-9/$@ ]*$')]],
      hotelAddress:['',[Validators.required,Validators.minLength(5),Validators.pattern('[a-zA-z0-9 ]*$')]],
      hotelContact:['',[Validators.required,Validators.pattern('[0-9]*$')]],
      hotelMenu:['',[Validators.required,Validators.minLength(2)]],
      roomsAvailable:['',[Validators.required,Validators.pattern('[0-9]*$')]],
      ownerCheck:['',[Validators.required,]],
      userPass:['',[Validators.required,]],
    })
  }

  back(){
    this.router.navigateByUrl('/owner/ownerhome')
  }
  submitDetails(){
  this.router.navigateByUrl('owner/ownersuccess')
  }
}
  // submitDetails(){
  //   let endpoint='hotelDetails';
  //   let request={
  //     ownerName:this.hotelRagistrationForm.value.ownerName,
  //     ownerContact:this.hotelRagistrationForm.value.ownerContact,
  //     hotelName:this.hotelRagistrationForm.value.hotelName,
  //     hotelAddress:this.hotelRagistrationForm.value.hotelAddress,
  //     hotelContact:this.hotelRagistrationForm.value.hotelContact,
  //     hotelMenu:this.hotelRagistrationForm.value.hotelMenu,
  //     roomsAvailable:this.hotelRagistrationForm.value.roomsAvailable,
  //     ownerCheck:this.hotelRagistrationForm.value.ownerCheck,
  //     userPass:this.hotelRagistrationForm.value.userPass,
  //   }
    // this.commonApiCallService.postApiCall(endpoint,request).subscribe(resp=>{
    //   console.log(resp);
      
    // })
//     this.router.navigateByUrl('owner/ownerSucess')

    
//   }
// }
//   constructor(private formBuilder: FormBuilder,
//     private router: Router
// ) {}

// ngOnInit() {
//   this.newhotelregistrationform= this.formBuilder.group({
//   ownername: ['', Validators.required],
  
//   });
//   }

// onSubmit() {
//   if (this.newhotelregistrationform.invalid) {
//     return;
//   }
// }

// }

