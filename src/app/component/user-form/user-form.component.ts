import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { TranslateModule } from '@ngx-translate/core';
import { User } from 'src/app/model/user.model';
import { BaseComponent } from '../base.component';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, MatInputModule, TranslateModule]
})
export class UserFormComponent extends BaseComponent implements OnInit {
  f: FormGroup;

  get form() {
    return this.f?.controls as any;
  }

  override ngOnInit() {
    super.ngOnInit();
    this.bindForm();
  }

  bindForm() {
    this.f = new User().form();
  }

}
