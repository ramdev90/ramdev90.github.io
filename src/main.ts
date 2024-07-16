import { enableProdMode, importProvidersFrom, isDevMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import * as fromApp from './app/store/app.reducer';

import { environment } from './environments/environment';
import { AppComponent } from './app/app.component';
import { CoreModule } from './app/core.module';
import { SharedModule } from './app/shared/shared.module';
import { StoreModule } from '@ngrx/store';
import { AppRoutingModule } from './app/app-routing.module';
import { withInterceptorsFromDi, provideHttpClient } from '@angular/common/http';
import { BrowserModule, bootstrapApplication } from '@angular/platform-browser';
import { provideServiceWorker } from '@angular/service-worker';

if (environment.production) {
  enableProdMode();
}

bootstrapApplication(AppComponent, {
    providers: [
        importProvidersFrom(BrowserModule, AppRoutingModule, StoreModule.forRoot(fromApp.appReducer), SharedModule, CoreModule),
        provideHttpClient(withInterceptorsFromDi()), provideServiceWorker('ngsw-worker.js', {
            enabled: !isDevMode(),
            registrationStrategy: 'registerWhenStable:30000'
          })
    ]
})
  .catch(err => console.error(err));
