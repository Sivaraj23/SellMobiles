import { Injectable } from '@angular/core';
import { Subject, Observable } from "rxjs";
import { ToastrService } from "ngx-toastr";

@Injectable({
  providedIn: 'root'
})
export class LoaderService {

  private subject = new Subject<any>();
  

  constructor() { }

  showProgBar() {
    this.subject.next({ boolean : true });
    // this.toastr.success(message+' open serv');
    // setTimeout(() => this.toastr.success(' open serv'));
  }

  hideProgBar() {
    this.subject.next({ boolean : false });
    // this.toastr.warning(message+' closeserv');
    // setTimeout(() => this.toastr.warning(' closeserv'));
  }

  getVal(): Observable<any> {
    // this.toastr.info('getval');
    // setTimeout(() => this.toastr.info('getValServ'));
    return this.subject.asObservable();
    
  }
}
