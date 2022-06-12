import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { map } from 'rxjs/operators';
import { Store } from '@ngrx/store';

import { DataStorageService } from '../shared/data-storage.service';
import { AuthService } from '../auth/auth.service';
import * as fromApp from '../store/app.reducer';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html'
})
export class HeaderComponent implements OnInit, OnDestroy {
  isAuthenticated = false;
  private userSub: Subscription;

  constructor(
    private dataStorageService: DataStorageService,
    private authService: AuthService,
    private store: Store<fromApp.AppState>
  ) { }

  dayOfMonth: Map<number, string> = new Map([
    [1, 'st'],
    [2, 'nd'],
    [2, 'nd']
  ])

  ngOnInit() {


    function getNumberWithOrdinal() {
      var s = ["th", "st", "nd", "rd"]; 
      debugger
      var index = 10;
      
      // return n + (s[(index - 20) % 10] || s[index] || s[0]);

      let num = index + (s[(index - 20) % 10] || s[index] || 'uminlinete')
      console.log(num)
    }
    
    getNumberWithOrdinal();




      this.userSub = this.store
        .select('auth')
        .pipe(map(authState => authState.user))
        .subscribe(user => {
          this.isAuthenticated = !!user;
          console.log(!user);
          console.log(!!user);
        });
  }

  onSaveData() {
    this.dataStorageService.storeRecipes();
  }

  onFetchData() {
    this.dataStorageService.fetchRecipes().subscribe();
  }

  onLogout() {
    this.authService.logout();
  }

  ngOnDestroy() {
    this.userSub.unsubscribe();
  }
}
