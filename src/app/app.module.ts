import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { HttpClientModule } from '@angular/common/http';

import {AngularFireModule} from '@angular/fire';
import {AngularFireAuthModule} from '@angular/fire/auth';
import {NgxAuthFirebaseUIModule} from 'ngx-auth-firebaseui';

import { AppComponent } from './app.component';

import { appRoutes } from './routerConfig';
import {HomeComponent} from './components/home/home.component';
import { ContactComponent } from './components/contact/contact.component';
import { LibraryComponent } from './components/library/library.component';
import { GameComponent } from './components/game/game.component';
import { CanvasComponent } from './components/canvas/canvas.component';
import { GameInfoComponent } from './components/game-info/game-info.component';
import { GameInfoSlimComponent } from './components/game-info-slim/game-info-slim.component';
import { LoginComponent } from './components/login/login.component';
import { ColorBarComponent } from './components/color-bar/color-bar.component';
import { LicenseComponent } from './components/license/license.component';
import { PrivacyPolicyComponent } from './components/privacy-policy/privacy-policy.component';
import {NotfoundComponent} from './components/notfound/notfound.component';
import { TermsOfServiceComponent } from './components/terms-of-service/terms-of-service.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {AngularFirePerformanceModule} from '@angular/fire/performance';

const firebaseConfig = {
  apiKey: "AIzaSyDjK0nU2IvK_DZ7rfH37ffYyaVjeNWgcq4",
  authDomain: "cavoke-firebase.firebaseapp.com",
  databaseURL: "https://cavoke-firebase.firebaseio.com",
  projectId: "cavoke-firebase",
  storageBucket: "cavoke-firebase.appspot.com",
  messagingSenderId: "65383339602",
  appId: "1:65383339602:web:d7c1296dc5f5ceb1"
};

// const firebaseUiAuthConfig: firebaseui.auth.Config = {
//   signInFlow: 'popup',
//   signInOptions: [
//     {
//       requireDisplayName: true,
//       provider: firebase.auth.EmailAuthProvider.PROVIDER_ID
//     },
//     firebase.auth.GithubAuthProvider.PROVIDER_ID,
//     firebaseui.auth.AnonymousAuthProvider.PROVIDER_ID,
//   ],
//   privacyPolicyUrl: '/privacy-policy',
//   tosUrl: '/terms-of-service',
//   credentialHelper: firebaseui.auth.CredentialHelper.ACCOUNT_CHOOSER_COM
// };

@NgModule({
  declarations: [
    AppComponent, HomeComponent, ContactComponent, LibraryComponent, GameComponent, CanvasComponent, GameInfoComponent, GameInfoSlimComponent, LoginComponent, ColorBarComponent, LicenseComponent, PrivacyPolicyComponent, NotfoundComponent, TermsOfServiceComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes),
    NgbModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireAuthModule,
    AngularFirePerformanceModule,
    BrowserAnimationsModule,
    NgxAuthFirebaseUIModule.forRoot(firebaseConfig, () => "cavoke_factory",
      {
        enableFirestoreSync: false
      })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

