import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class UsetoastrService {

  constructor(private toastr: ToastrService) {

   }

  success(title: string, message?: string) {
    
    setTimeout(() => this.toastr.success(title, message,{}));
  }
  warning(title: string, message?: string) {
    setTimeout(() => this.toastr.warning(title, message));
  }
  error(title: string, message?: string) {
    setTimeout(() => this.toastr.error(title, message));
  }
}
