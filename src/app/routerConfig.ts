import { Routes } from '@angular/router';
import {HomeComponent} from './components/home/home.component';
import {ContactComponent} from './components/contact/contact.component';
import {LicenseComponent} from './components/license/license.component';
import {PrivacyPolicyComponent} from './components/privacy-policy/privacy-policy.component';
import {NotfoundComponent} from './components/notfound/notfound.component';
import {LoginComponent} from './components/login/login.component';
import {TermsOfServiceComponent} from './components/terms-of-service/terms-of-service.component';
import {LibraryComponent} from './components/library/library.component';
import {GameComponent} from './components/game/game.component';

export const appRoutes: Routes = [
  { path: '', component: HomeComponent},
  { path: 'contact', component: ContactComponent},
  { path: 'license', component: LicenseComponent},
  { path: 'privacy-policy', component: PrivacyPolicyComponent},
  { path: 'terms-of-service', component: TermsOfServiceComponent},
  { path: 'login', component: LoginComponent},
  { path: 'library', component: LibraryComponent},
  { path: 'game', component: GameComponent},
  { path: '**', component: NotfoundComponent},
];
