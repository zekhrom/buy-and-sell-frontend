import { inject, Injectable } from '@angular/core';
import {
  Auth,
  GoogleAuthProvider,
  signInWithPopup,
  User,
  user,
} from '@angular/fire/auth';
import { Subscription } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private auth: Auth = inject(Auth);
  user$ = user(this.auth);
  userSubscription: Subscription;
  googleProvider = new GoogleAuthProvider();

  constructor() {
    this.userSubscription = this.user$.subscribe((aUser: User | null) => {
      //handle user state changes here. Note, that user will be null if there is no currently logged in user.
      console.log(aUser);
    });
  }

  logInGoogleUser() {
    return signInWithPopup(this.auth, this.googleProvider).then(
      (result) => {
        console.log('User signed in:', result.user);
        // this.router.navigateByUrl('/my-listings');
        console.log('User signed in:', this.user$);
      },
      (error) => {
        console.error('Error signing in:', error);
        // this.errorMessage = error.message;
        // this.isLoading = false;
      }
    );
  }

  logOutUser() {
    return this.auth.signOut();
  }

  getUser() {
    return this.user$;
  }

  getAccessToken() {
    return this.auth.currentUser?.getIdToken();
  }
}
