import { FormControl, FormGroup, Validators } from '@angular/forms';

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
      email: new FormControl(this.email, {
        validators: [Validators.required, Validators.email],
      }),
      postalCode: new FormControl(this.postalCode, {
        validators: [
          Validators.required,
          Validators.pattern(
            /^[ABCEGHJ-NPRSTVXY]\d[ABCEGHJ-NPRSTV-Z][ -]?\d[ABCEGHJ-NPRSTV-Z]\d$/i
          ),
        ],
      }),
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
