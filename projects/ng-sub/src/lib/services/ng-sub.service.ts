import { Injectable } from '@angular/core';
import { Subject, Subscription } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NgSub extends Subject<any> {
  private d$: Subject<any>;
  private subscription: Subscription;

  constructor() {
    super();

    this.d$ = new Subject();
    this.subscription = new Subscription();
  }

  public unsubscribe(): void {
    this.d$.next();
    this.d$.complete();
    this.d$.unsubscribe();

    // for the subject extended super class
    super.next();
    super.complete();
    super.unsubscribe();

    this.subscription.unsubscribe();
  }

  public add(...subs: Subscription[]): void {
    subs.forEach(sub => {
      this.subscription.add(sub);
    });
  }
}
