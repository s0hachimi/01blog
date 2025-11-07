import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AuthService } from '../../services/auth';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './register.html'
})
export class RegisterComponent {
  user = { username: '', email: '', password: '', role: 'USER' };

  constructor(private authService: AuthService) { }

  onSubmit() {
    this.authService.register(this.user).subscribe(console.log);
  }
}
