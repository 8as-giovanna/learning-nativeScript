import { Component, OnInit } from "@angular/core";
import {RouterExtensions} from "nativescript-angular";

@Component({
    selector: "Home",
    moduleId: module.id,
    templateUrl: "./home.component.html"
})
export class HomeComponent implements OnInit {

    constructor(public routerExtensions: RouterExtensions) {
        // Use the component constructor to inject providers.
    }

    ngOnInit(): void {
        // Init your component properties here.
    }

    cadastrar(){
        this.routerExtensions.navigate(['cadastro']);
    }
}
