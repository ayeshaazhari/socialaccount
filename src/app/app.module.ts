import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AngularFireModule } from '@angular/fire';
import { AngularFireAuthModule} from '@angular/fire/auth';

import { environment}  from '../environments/environment';
import { LoginComponent } from './login/login.component';
import { SocialserviceService } from './socialservice.service';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebaseconfig ,"firebaseconfig1"),
    AngularFireAuthModule
  ],
  providers: [
    SocialserviceService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
