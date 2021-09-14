import { Subject, Subscription } from 'rxjs';

export class NgSub extends Subject<any> {
  private d$: Subject<any>;
  private subscription: Subscription;

  constructor() {
    super();

    this.d$ = new Subject();
    this.subscription = new Subscription();
  }

  public unsubscribe(): void {
    this.d$.complete();
    this.d$.unsubscribe();

    // for the subject extended super class
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
