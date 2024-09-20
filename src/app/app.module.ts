import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';
// import { StoreModule } from '@ngrx/store';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { AppRoutingModule } from './app-routing.module';
import { ShoppingListModule } from './shopping-list/shopping-list.module';
import { SharedModule } from './shared/shared.module';
import { CoreModule } from './core.module';
import { AuthModule } from './auth/auth.module';
import { RecipesModule } from './recipes/recipes.module';
// import { DragulaModule } from 'ng2-dragula';

@NgModule({ declarations: [
        AppComponent,
        HeaderComponent
    ],
    bootstrap: [AppComponent], imports: [BrowserModule,
        AppRoutingModule,
        // DragulaModule.forRoot(),
        RecipesModule,
        ShoppingListModule,
        AuthModule,
        SharedModule,
        CoreModule], providers: [provideHttpClient(withInterceptorsFromDi())] })
export class AppModule { }
