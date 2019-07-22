import { Routes } from '@angular/router';
import {HomeComponent} from './components/home/home.component';
import {ContactComponent} from './components/contact/contact.component';
import {LicenseComponent} from './components/license/license.component';
import {PrivacyPolicyComponent} from './components/privacy-policy/privacy-policy.component';
import {NotfoundComponent} from './components/notfound/notfound.component';

export const appRoutes: Routes = [
  { path: '', component: HomeComponent},
  { path: 'contact', component: ContactComponent},
  { path: 'license', component: LicenseComponent},
  { path: 'privacy-policy', component: PrivacyPolicyComponent},
  { path: '**', component: NotfoundComponent},
];
