import {
  Component,
  OnInit,
} from '@angular/core';

import { OAuthService } from 'angular-oauth2-oidc';

import { authConfig } from './auth-config';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'siru-fe';
  
  constructor(private oauthService: OAuthService) {

  }
  
  ngOnInit(): void {
    this.oauthService.configure(authConfig);

    this.oauthService.loadDiscoveryDocumentAndLogin()
      .then((result) => {
        console.log(result)
      })
      .catch((error) => {
        console.warn(error)
      })
  }


}
