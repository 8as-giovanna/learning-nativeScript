import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptModule } from "nativescript-angular/nativescript.module";

import { CadastroRoutingModule } from "./cadastro-routing.module";
import { CadastroComponent } from "./cadastro.component";

@NgModule({
    imports: [
        NativeScriptModule,
        CadastroRoutingModule
    ],
    declarations: [
        CadastroComponent
    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})
export class CadastroModule { }
