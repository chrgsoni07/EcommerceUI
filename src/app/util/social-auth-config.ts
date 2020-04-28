import {AuthServiceConfig, FacebookLoginProvider, LoginOpt} from 'angularx-social-login';
import {environment} from '../../environments/environment';

export const facebookLoginScopes = 'manage_pages,pages_show_list,pages_messaging,public_profile, email';

const fbLoginOptions: LoginOpt = {
  scope: facebookLoginScopes,
  return_scopes: true,
  enable_profile_selector: true
};

const config = new AuthServiceConfig([
  {
    id: FacebookLoginProvider.PROVIDER_ID,
    provider: new FacebookLoginProvider(environment.facebookAppId, fbLoginOptions)
  }
]);

export function provideConfig() {

  return config;
}
