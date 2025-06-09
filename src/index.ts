import { Subject, Subscription } from 'rxjs';

export class NgSub extends Subject<void> {
  private d$: Subject<void>;
  private subscription: Subscription;

  /**
   * A class that extends Subject and provides a way to manage subscriptions.
   * It allows adding multiple subscriptions and unsubscribing from all of them at once.
   */
  constructor() {
    super();

    // Initialize the Subject and Subscription
    // that will be used to manage the lifecycle of subscriptions.
    this.d$ = new Subject();
    this.subscription = new Subscription();
  }

  public unsubscribe(): void {
    this.d$.next();
    this.d$.complete();

    this.subscription.unsubscribe();

    super.next();
    super.complete();
  }

  public add(...subs: Subscription[]): void {
    subs.forEach(sub => {
      this.subscription.add(sub);
    });
  }
}
