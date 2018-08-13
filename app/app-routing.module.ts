import { NgModule } from "@angular/core";
import { Routes } from "@angular/router";
import { NativeScriptRouterModule } from "nativescript-angular/router";
import {HomeComponent} from "~/pages/home/home.component";
import {CadastroComponent} from "~/pages/cadastro/cadastro.component";

const routes: Routes = [
    { path: "", redirectTo: "/home", pathMatch: "full" },
    { path: "home", component: HomeComponent},
    { path: "cadastro", component: CadastroComponent},
];

@NgModule({
    declarations: [HomeComponent, CadastroComponent],
    imports: [NativeScriptRouterModule.forRoot(routes)],
    exports: [NativeScriptRouterModule]
})
export class AppRoutingModule { }
