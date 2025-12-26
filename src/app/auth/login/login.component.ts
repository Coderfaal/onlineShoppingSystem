import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../core/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html'
})
export class LoginComponent {

  loading = false;
  error = '';

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private router: Router
  ) {}

  loginForm = this.fb.group({
    emailOrPhone: ['', Validators.required],
    password: ['', Validators.required]
  });

  submit() {
    if (this.loginForm.invalid) return;

    this.loading = true;
    this.error = '';

    this.authService.login(this.loginForm.value)
      .subscribe({
        next: (res: any) => {
          // 🔑 SAVE JWT
          this.authService.saveToken(res.data);

          // ➜ REDIRECT (profile will come next)
          this.router.navigate(['/user/profile']);
        },
        error: err => {
          this.error = err.error?.message || 'Login failed';
          this.loading = false;
        }
      });
  }
}
