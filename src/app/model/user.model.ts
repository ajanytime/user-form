import { FormControl, FormGroup } from '@angular/forms';

export class User {
  name: string;
  email: string;
  postalCode: string;

  constructor(init?: Partial<User>) {
    Object.assign(this, init);
  }

  form() {
    return new FormGroup({
      name: new FormControl(this.name),
      email: new FormControl(this.email),
      postalCode: new FormControl(this.postalCode),
    });
  }

  model(form: FormGroup) {
    const v = form.getRawValue();
    return new User({
      name: v.name,
      email: v.email,
      postalCode: v.postalCode,
    });
  }
}
