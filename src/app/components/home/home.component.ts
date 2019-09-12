import {Component, OnInit} from '@angular/core';
import {AngularFireAuth} from '@angular/fire/auth';
import {Router} from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private afAuth: AngularFireAuth, private router: Router) {
  }

  ngOnInit() {

    this.afAuth.auth.onAuthStateChanged(user => {
      if (user && !user.isAnonymous) {
        console.log("logged in");
        setTimeout(() => {
          this.router.navigateByUrl("/library", { skipLocationChange: true });
        });
      }
    });
  }

}
