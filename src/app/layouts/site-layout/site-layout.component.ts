import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../authentication/auth.service';

@Component({
  selector: 'app-site-layout',
  templateUrl: './site-layout.component.html',
  styleUrls: ['./site-layout.component.scss']
})
export class SiteLayoutComponent implements OnInit {

  username = '';

  constructor(private authService: AuthService) { }

  ngOnInit() {
    this.username = this.authService.getUsername();
  }

}
