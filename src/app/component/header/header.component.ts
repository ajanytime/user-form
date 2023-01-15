import { ChangeDetectionStrategy, Component, Injector } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { BaseComponent } from '../base.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeaderComponent extends BaseComponent {
  languages = [
    { code: 'en', label: 'English' },
    { code: 'fr', label: 'French' },
  ];

  constructor(private injector: Injector, private translate: TranslateService) {
    super(injector);
  }

  useLanguage(lang: string): void {
    this.translate.use(lang);
    sessionStorage.setItem('locale', lang);
  }

  get currentLang() {
    return sessionStorage.getItem('locale') || 'en';
  }
}
