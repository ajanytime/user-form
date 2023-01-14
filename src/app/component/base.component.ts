import {
  ChangeDetectorRef,
  Component,
  EventEmitter,
  Injector,
  OnDestroy,
  OnInit,
  Output,
} from '@angular/core';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-base',
  template: ``,
})
export abstract class BaseComponent implements OnInit, OnDestroy {
  @Output() onUpdate = new EventEmitter();
  alive = true;
  subscription = new Subscription();
  changeDetectorRef: ChangeDetectorRef;

  constructor(injector: Injector) {
    this.changeDetectorRef = injector.get(ChangeDetectorRef);
  }

  ngOnInit() {}

  ngOnDestroy() {
    this.alive = false;
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }

  cd() {
    this.changeDetectorRef.markForCheck();
  }
}
