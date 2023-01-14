import { ChangeDetectionStrategy, Component } from '@angular/core';
import { BaseComponent } from '../base.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HeaderComponent extends BaseComponent{

}
