import {ApplicationConfig, isDevMode} from '@angular/core';
import {provideRouter} from '@angular/router';
import reducer from "./store/reducer/index";
import {routes} from './app.routes';
import {provideClientHydration} from '@angular/platform-browser';
import { provideStore} from '@ngrx/store';
import {provideStoreDevtools} from '@ngrx/store-devtools';
import {provideHttpClient, withFetch} from "@angular/common/http";

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideHttpClient(withFetch()),
    provideClientHydration(),
    provideStore(
      reducer
    ),
    provideStoreDevtools({
      maxAge: 25,
      logOnly: !isDevMode()
    })
  ]
};
