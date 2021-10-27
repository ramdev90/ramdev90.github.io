import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";

import { AlertComponent } from "./alert/alert.component";
import { LoadingSpinnerComponent } from "./loading-spinner/loading-spinner.component";
import { PlaceholderDirective } from "./placeholder/placeholder.directive";
import { DropdownDirective } from "./dropdown.directive";

@NgModule({
    declarations: [
        AlertComponent,
        PlaceholderDirective,
        LoadingSpinnerComponent,
        DropdownDirective

    ],
    imports: [
        CommonModule
    ],
    exports: [
        AlertComponent,
        PlaceholderDirective,
        LoadingSpinnerComponent,
        DropdownDirective,
        CommonModule
    ],
    entryComponents: [AlertComponent]
})
export class SharedModule {

}