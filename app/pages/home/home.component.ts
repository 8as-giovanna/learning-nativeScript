import { Component, OnInit } from "@angular/core";
import {RouterExtensions} from "nativescript-angular";

@Component({
    selector: "Home",
    moduleId: module.id,
    templateUrl: "./home.component.html",
    styleUrls: ['home.css'],
})
export class HomeComponent implements OnInit {

    constructor(public routerExtensions: RouterExtensions) {}

    public user = {
        user_login: '',
        senha_login: '',
    };

    ngOnInit(): void {}

    cadastrar(){
        this.routerExtensions.navigate(['cadastro']);
    }

    login(){
        console.log("user", this.user);
        this.routerExtensions.navigate(['toMain']);
    }
}
