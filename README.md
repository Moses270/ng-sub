# NgSub

NgSub is a lightweight tool provided by [Anchor Solutions](https://www.anchorsolutions.nl) that can be used to manage RxJs subscriptions and prevent memory leakages when working, subscribe to data streams in JavaScript or any of its framework. Usable both in browser and Node.js environments.

## Installation
Install ng-sub via npm by running the following command: 
> `npm install ng-sub --save`

## Usage
Register the `NgSubModule` in your app module (or any other module you want to use it).

 ```typescript
import { NgSub } from 'ng-sub';

const sub = new NgSub();

const observable: Observable = of(null);

// use the service with takeUntil when subscribing to any observable
observable.pipe(takeUntil(sub)).subscribe();

// Or use it to manage multiple subscriptions
sub.add(sub1, sub2, sub3);

// when done, remember to unsubscribe all subscriptions in one place
sub.unsubscribe();
```

### Angular example
```typescript
import { NgSub } from 'ng-sub';
import { Observable, of } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-selector',
  templateUrl: '<h1>Template html</h1>',
  styleUrls: ['css path here...']
})
export class ComponentA implements OnInit, OnDestroy {
    private sub = new NgSub();

    constructor() {}

    ngOnInit(): void {
        const observable: Observable = of(null);

        // use the service with takeUntil when subscribing to any observable
        observable.pipe(takeUntil(this.sub)).subscribe();

        // Or use it to manage multiple subscriptions
        this.sub.add(sub1, sub2, sub3);
    }

    ngOnDestroy(): void {
        this.sub.unsubscribe();
    }
}
 ``` 
 