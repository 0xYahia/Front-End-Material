import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideHttpClient } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AngularFireModule } from '@angular/fire/compat';
import { environment } from '../environment/environment';

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes), provideHttpClient(),
  importProvidersFrom(FormsModule, BrowserModule, AngularFireModule.initializeApp(environment.firebaseConfig))
  ],

};
