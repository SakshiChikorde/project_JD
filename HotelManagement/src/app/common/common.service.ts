import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root',
})
export class CommonService {
  journey!: string;
  username!: string;
  forgotPassword!: boolean;

  constructor(private toastrService: ToastrService) {}

  warningToaster(title: any, msg: any, configuration: any) {
    this.toastrService.warning(title, msg, configuration);
  }
}
