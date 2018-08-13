import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptModule } from "nativescript-angular/nativescript.module";

import { MainRoutingModule } from "./main-routing.module";
import { MainComponent } from "./main.component";

@NgModule({
    imports: [
        NativeScriptModule,
        MainRoutingModule
    ],
    declarations: [
        MainComponent
    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})
export class MainModule { }
