import { ChangeDetectionStrategy, Component } from '@angular/core';
import { BaseComponent } from '../base.component';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FooterComponent extends BaseComponent {

}
