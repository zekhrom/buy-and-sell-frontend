import { CommonModule } from '@angular/common';
import { Component, inject, OnDestroy } from '@angular/core';
import { Auth, GoogleAuthProvider, user, User } from '@angular/fire/auth';
import { Router, RouterModule, RouterOutlet } from '@angular/router';
import { Subscription } from 'rxjs';
import { AuthService } from './auth.service';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RouterModule, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent implements OnDestroy {
  title = 'buy-and-sell-frontend';
  private auth: Auth = inject(Auth);
  user$ = user(this.auth);
  userSubscription: Subscription;
  googleProvider = new GoogleAuthProvider();
  isLoading = false;
  errorMessage = '';

  constructor(private router: Router, private authService: AuthService) {
    this.userSubscription = this.user$.subscribe((aUser: User | null) => {
      //handle user state changes here. Note, that user will be null if there is no currently logged in user.
      console.log('aUser', aUser);
    });
  }

  signIn() {
    this.isLoading = true;
    this.authService
      .logInGoogleUser()
      .then(() => {
        this.router.navigateByUrl('/my-listings');
        this.isLoading = false;
      })
      .catch((error) => {
        this.errorMessage = error.message;
        this.isLoading = false;
        console.error('Error signing in:', error);
      });
  }

  signOut() {
    this.authService.logOutUser().then(() => {
      this.router.navigateByUrl('/');
      console.log('User signed out');
    });
  }

  ngOnDestroy() {
    this.userSubscription.unsubscribe();
  }
}
