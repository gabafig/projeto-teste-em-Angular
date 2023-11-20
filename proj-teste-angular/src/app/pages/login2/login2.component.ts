import { Component, inject } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';


@Component({
  selector: 'app-login2',
  templateUrl: './login2.component.html',
  styleUrls: ['./login2.component.css']
})

export class Login2Component {
  private fb = inject(FormBuilder);
  addressForm = this.fb.group({
    email: [null, Validators.compose([Validators.required, Validators.email])],
    password: [null, Validators.required],

  });

  email = this.addressForm.controls['email'];

  getErrorMessage() {
    if (this.email.hasError('required')) {
      return 'E-mail é obrigatório!'
    }
    if (this.email.hasError('email')) {
      return 'Preencha um e-mail válido.'
    }
    else return '';
  }

  onSubmit(): void {
    alert('Thanks!');
  }
}
