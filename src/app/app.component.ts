import { CommonModule } from '@angular/common';
import { Component, inject, OnDestroy } from '@angular/core';
import {
  Auth,
  GoogleAuthProvider,
  signInWithPopup,
  user,
  User,
} from '@angular/fire/auth';
import { Router, RouterModule, RouterOutlet } from '@angular/router';
import { Subscription } from 'rxjs';

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

  constructor(private router: Router) {
    this.userSubscription = this.user$.subscribe((aUser: User | null) => {
      //handle user state changes here. Note, that user will be null if there is no currently logged in user.
      console.log(aUser);
    });
  }

  signIn() {
    signInWithPopup(this.auth, this.googleProvider).then(
      (result) => {
        console.log('User signed in:', result.user);
        // this.router.navigateByUrl('/my-listings');
        console.log('User signed in:', this.user$);
      },
      (error) => {
        console.error('Error signing in:', error);
        this.errorMessage = error.message;
        this.isLoading = false;
      }
    );
    // this.auth.(new firebase.GoogleAuthProvider()).then(
    //   (result) => {
    //     console.log('User signed in:', result.user);
    //   },
    //   (error) => {
    //     console.error('Error signing in:', error);
    //   }
    // );
  }
  signOut() {
    this.auth.signOut().then(() => {
      console.log('User signed out');
    });
  }

  ngOnDestroy() {
    this.userSubscription.unsubscribe();
  }
}
