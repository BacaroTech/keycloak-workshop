import { AuthConfig } from 'angular-oauth2-oidc';

export const authConfig: AuthConfig = {
    issuer: "http://localhost:8090/realms/siru",
    redirectUri: "http://localhost:4200",
    clientId: "siru-fe",
    responseType: "code",
    scope: "openid profile email",
    dummyClientSecret: "8mRVEzQWDpneStPjhhMXquiPLi0FrG11"
}