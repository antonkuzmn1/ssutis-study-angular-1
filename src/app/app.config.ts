import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import {provideHttpClient} from "@angular/common/http";

export const appConfig: ApplicationConfig = {
  providers: [
    // Provide the router with the list of routes for the application.
    provideRouter(routes),

    provideAnimationsAsync(),

    provideHttpClient(),
  ]
};
