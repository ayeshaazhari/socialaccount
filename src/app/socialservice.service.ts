import { Injectable } from '@angular/core';
import * as firebase from 'firebase';
import { AngularFireAuth } from '@angular/fire/auth';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class SocialserviceService {
  user$:Observable<firebase.User>;

  constructor(private afauthur :AngularFireAuth) {
    this.user$=afauthur.authState;
   }
   login(){
     return this.afauthur.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider);
   }

   logout(){
     this.afauthur.auth.signOut();
   }

    fblogin(){
      this.afauthur.auth.signInWithRedirect(new firebase.auth.FacebookAuthProvider);
    }

    // fblogout(){
    //   this.afauthur.auth.signOut();
    // }

}
