import { HttpRequest } from "@angular/common/http";
import { Injectable,EventEmitter } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SpinnerService {
  onLoadingChanged:EventEmitter<boolean> = new EventEmitter<boolean>();
  private requests: HttpRequest<any>[] = [];



  onStarted(req:HttpRequest<any>):void{
    this.requests.push(req);
    this.notify();
  }



  /**
   * Removes request from the storage and notifies observers
   */
   onFinished(req: HttpRequest<any>): void {
    const index = this.requests.indexOf(req);
    if (index !== -1) {
      this.requests.splice(index, 1);
    }
    this.notify();
  }

  /**
   * Notifies observers about whether there are any requests on fly
   */
  private notify(): void {
    this.onLoadingChanged.emit(this.requests.length !== 0);
  }
}
