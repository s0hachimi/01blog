import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AuthService } from '../../services/auth';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './login.html'
})
export class LoginComponent {
  user = { email: '', password: '' };

  constructor(private authService: AuthService) { }

  onSubmit() {
    this.authService.login(this.user).subscribe(console.log);
  }
}
