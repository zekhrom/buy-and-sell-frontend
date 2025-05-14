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
  token: string | null = null;
  user: User | null = null;

  constructor() {
    this.userSubscription = this.user$.subscribe((aUser: User | null) => {
      aUser?.getIdToken().then((token) => {
        this.token = token;
      });
    });
  }

  logInGoogleUser() {
    return signInWithPopup(this.auth, this.googleProvider).then(
      (result) => {
        console.log('User signed in:', result.user);
      },
      (error) => {
        console.error('Error signing in:', error);
      }
    );
  }

  logOutUser() {
    return this.auth.signOut();
  }

  getUser() {
    return this.auth.currentUser;
  }

  getAccessToken() {
    return this.token;
  }
}
