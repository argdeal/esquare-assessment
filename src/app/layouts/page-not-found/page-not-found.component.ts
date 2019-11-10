import { Component, OnInit } from "@angular/core";
import { AuthService } from '../../authentication/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: "app-page-not-found",
  templateUrl: "./page-not-found.component.html"
})
export class PageNotFoundComponent implements OnInit {
  constructor(private authService: AuthService, private router: Router) {}

  ngOnInit() {
    if(this.authService.isLoggedIn()) {
      this.router.navigateByUrl('/search');
    } else {
      this.router.navigateByUrl('/login');
    }
  }
}
