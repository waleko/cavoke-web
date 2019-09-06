import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {Router, RouterModule} from '@angular/router';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {HttpClientModule} from '@angular/common/http';

import {AngularFireModule} from '@angular/fire';
import {AngularFireAuthModule} from '@angular/fire/auth';
import {NgxAuthFirebaseUIModule} from 'ngx-auth-firebaseui';

import {AppComponent} from './app.component';

import {appRoutes} from './routerConfig';
import {HomeComponent} from './components/home/home.component';
import {ContactComponent} from './components/contact/contact.component';
import {LibraryComponent} from './components/library/library.component';
import {GameComponent} from './components/game/game.component';
import {LoginComponent} from './components/login/login.component';
import {ColorBarComponent} from './components/color-bar/color-bar.component';
import {LicenseComponent} from './components/license/license.component';
import {PrivacyPolicyComponent} from './components/privacy-policy/privacy-policy.component';
import {NotfoundComponent} from './components/notfound/notfound.component';
import {TermsOfServiceComponent} from './components/terms-of-service/terms-of-service.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {AngularFirePerformanceModule} from '@angular/fire/performance';
import { NewGameComponent } from './components/new-game/new-game.component';
import { ErrorComponent } from './components/error/error.component';
import {BackendService} from './services/backend.service';
import { NoconnectionComponent } from './components/noconnection/noconnection.component';

const firebaseConfig = {
  apiKey: 'AIzaSyDjK0nU2IvK_DZ7rfH37ffYyaVjeNWgcq4',
  authDomain: 'cavoke-firebase.firebaseapp.com',
  databaseURL: 'https://cavoke-firebase.firebaseio.com',
  projectId: 'cavoke-firebase',
  storageBucket: 'cavoke-firebase.appspot.com',
  messagingSenderId: '65383339602',
  appId: '1:65383339602:web:d7c1296dc5f5ceb1'
};

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ContactComponent,
    LibraryComponent,
    GameComponent,
    LoginComponent,
    ColorBarComponent,
    LicenseComponent,
    PrivacyPolicyComponent,
    NotfoundComponent,
    TermsOfServiceComponent,
    NewGameComponent,
    ErrorComponent,
    NoconnectionComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes),
    NgbModule,
    BrowserAnimationsModule,
    NgxAuthFirebaseUIModule.forRoot(firebaseConfig,
      AppModule.f,
      {
        enableFirestoreSync: false
      }),
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireAuthModule,
    AngularFirePerformanceModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
  static f() {
    return 'cavoke_factory';
  }
}

