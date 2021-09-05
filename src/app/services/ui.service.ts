import {Injectable} from '@angular/core';
import {Observable, Subject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class UIService {
  private showAdd: boolean = false;
  private subject = new Subject<any>();

  constructor() {
  }

  toggleSubject(): void {
    this.showAdd = !this.showAdd;
    this.subject.next(this.showAdd);
  }

  toggle(): Observable<any> {
    return this.subject.asObservable();
  }

  getShowAdd(): boolean {
    return this.showAdd;
  }
}
