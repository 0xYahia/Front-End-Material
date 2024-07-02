import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { HTTP_INTERCEPTORS, provideHttpClient, withInterceptors } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AngularFireModule } from '@angular/fire/compat';
import { environment } from '../environment/environment';
import { AuthInterceptorService } from './auth-interceptor.service';
import { LoggingInterceptorService } from './logging-interceptor.service';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes), provideHttpClient(
      withInterceptors([AuthInterceptorService, LoggingInterceptorService])
    ),
    importProvidersFrom(FormsModule, BrowserModule, AngularFireModule.initializeApp(environment.firebaseConfig))
  ],

};
