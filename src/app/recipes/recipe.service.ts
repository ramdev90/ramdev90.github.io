import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Store } from '@ngrx/store';

import { Recipe } from './recipe.model';
import { Ingredient } from '../shared/ingredient.model';
import * as ShoppingListActions from '../shopping-list/store/shopping-list.actions';
import * as fromApp from '../store/app.reducer';
import { SwPush } from '@angular/service-worker';

@Injectable()
export class RecipeService {
  recipesChanged = new Subject<Recipe[]>();

  // private recipes: Recipe[] = [
  //   new Recipe(
  //     'Tasty Schnitzel',
  //     'A super-tasty Schnitzel - just awesome!',
  //     'https://upload.wikimedia.org/wikipedia/commons/7/72/Schnitzel.JPG',
  //     [new Ingredient('Meat', 1), new Ingredient('French Fries', 20)]
  //   ),
  //   new Recipe(
  //     'Big Fat Burger',
  //     'What else you need to say?',
  //     'https://upload.wikimedia.org/wikipedia/commons/b/be/Burger_King_Angus_Bacon_%26_Cheese_Steak_Burger.jpg',
  //     [new Ingredient('Buns', 2), new Ingredient('Meat', 1)]
  //   )
  // ];
  private recipes: Recipe[] = [];

  constructor(
    private store: Store<fromApp.AppState>,
    private swPush: SwPush
  ) {}

  setRecipes(recipes: Recipe[]) {
    this.recipes = recipes;
    this.recipesChanged.next(this.recipes.slice());
  }

  getRecipes() {
    return this.recipes.slice();
  }

  getRecipe(index: number) {
    return this.recipes[index];
  }

  addIngredientsToShoppingList(ingredients: Ingredient[]) {
    // this.slService.addIngredients(ingredients);
    // this.store.dispatch(new ShoppingListActions.AddIngredients(ingredients));
    this.store.dispatch(ShoppingListActions.AddIngredients({ingredients}));

  }

  addRecipe(recipe: Recipe) {
    this.recipes.push(recipe);
    this.recipesChanged.next(this.recipes.slice());
    this.simulatePushNotification('New Recipe Added');
  }

  updateRecipe(index: number, newRecipe: Recipe) {
    this.recipes[index] = newRecipe;
    this.recipesChanged.next(this.recipes.slice());
  }

  deleteRecipe(index: number) {
    this.recipes.splice(index, 1);
    this.recipesChanged.next(this.recipes.slice());
  }

  readonly VAPID_PUBLIC_KEY = 'YOUR_VAPID_PUBLIC_KEY';

  subscribeToNotifications() {
    this.swPush
      .requestSubscription({
        serverPublicKey: this.VAPID_PUBLIC_KEY,
      })
      .then((sub) => this.sendSubscriptionToTheServer(sub))
      .catch((err) =>
        console.error('Could not subscribe to notifications', err)
      );
  }

  private sendSubscriptionToTheServer(subscription: PushSubscription) {    
    console.log('Subscription object:', subscription);    
  }

   // Request notification permission from the user
   requestNotificationPermission(): Promise<NotificationPermission> {
    return Notification.requestPermission();
  }

  simulatePushNotification(msg: string) {
    this.requestNotificationPermission().then(permission => {
      if (permission === 'granted') {
        console.log("Notification permission granted.");
        if ('serviceWorker' in navigator && 'PushManager' in window) {
          navigator.serviceWorker.ready.then(registration => {
            registration.showNotification(msg, {
              body: msg
            });
          });
        }
      } else {
        console.log("Notification permission denied.");
      }
    });
  }
}
