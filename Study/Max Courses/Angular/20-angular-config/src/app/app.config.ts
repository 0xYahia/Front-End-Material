import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getDatabase, provideDatabase } from '@angular/fire/database';

export const appConfig: ApplicationConfig = {
  providers: [provideZoneChangeDetection({ eventCoalescing: true }), provideRouter(routes), provideAnimationsAsync(), provideFirebaseApp(() => initializeApp({"projectId":"deploy-angular-app-95254","appId":"1:881356472231:web:6f56b6ac5d865a82cac082","storageBucket":"deploy-angular-app-95254.appspot.com","apiKey":"AIzaSyAolwws-GLiw4klLNmteVFW0-4sgVzppxQ","authDomain":"deploy-angular-app-95254.firebaseapp.com","messagingSenderId":"881356472231","measurementId":"G-6QP9P9B66D"})), provideDatabase(() => getDatabase())]
};
