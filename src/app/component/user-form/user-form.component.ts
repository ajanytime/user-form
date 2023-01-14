import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { User } from 'src/app/model/user.model';
import { BaseComponent } from '../base.component';
import { MatInputModule } from '@angular/material/input';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, MatInputModule]
})
export class UserFormComponent extends BaseComponent implements OnInit {
  f: FormGroup;

  get form() {
    return this.f?.controls;
  }

  override ngOnInit() {
    super.ngOnInit();
    this.bindForm();
  }

  bindForm() {
    this.f = new User().form();
  }

}
