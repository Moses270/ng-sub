# NgSub

NgSub is a simple angular tool provided by [Anchor Solutions](https://www.anchorsolutions.nl) that can be used to manage RxJs subscriptions and prevent memory leakages when working subscribe to data streams in angular. This tool has been well tested with Angular versions from 7.x to 9.1.9

## Installation
Install ng-sub via npm by running the following command: 
> `npm install ng-sub --save`

## Usage
Register the `NgSubModule` in your app module (or any other module you want to use it).

 ```typescript
import { NgSubModule } from 'ng-sub';

@NgModule({
  declarations: [],
  imports: [
    ...,
    NgSubModule
  ],
  providers: [],
  bootstrap: []
})
export class AppModule {}
 ``` 

### Use NgSub service in your components, directives, pipes etc
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

### Further Reading
Have a look at other packages by [Anchor Solutions](https://www.anchorsolutions.nl):
- [translator-client-module](https://www.npmjs.com/package/translator-client-module)
- [MatModal](https://www.npmjs.com/package/mat-modal)