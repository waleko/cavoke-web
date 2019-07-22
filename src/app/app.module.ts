import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

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
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {NotfoundComponent} from './components/notfound/notfound.component';

@NgModule({
  declarations: [
    AppComponent, HomeComponent, ContactComponent, LibraryComponent, GameComponent, CanvasComponent, GameInfoComponent, GameInfoSlimComponent, LoginComponent, ColorBarComponent, LicenseComponent, PrivacyPolicyComponent, NotfoundComponent
  ],
  imports: [
    BrowserModule, RouterModule.forRoot(appRoutes), NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

