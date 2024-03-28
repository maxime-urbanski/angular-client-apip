import {ApplicationConfig, isDevMode} from '@angular/core';
import {provideRouter} from '@angular/router';
import reducer from "./store/reducer/index";
import {routes} from './app.routes';
import {provideClientHydration} from '@angular/platform-browser';
import {provideState, provideStore} from '@ngrx/store';
import {provideStoreDevtools} from '@ngrx/store-devtools';
import {provideHttpClient, withFetch} from "@angular/common/http";
import {updateReducer} from "./store/reducer/update.reducer";
import {showReducer} from "./store/reducer/show.reducer";

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideHttpClient(withFetch()),
    provideClientHydration(),
    provideStore(
      reducer
    ),
    provideStoreDevtools()
  ]
};
