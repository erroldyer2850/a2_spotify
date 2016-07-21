import { Component } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';
import { HTTP_PROVIDERS } from '@angular/http';
import { NavbarTopComponent } from './navbar-top/navbar-top.component';
import { SpotifyService } from './services/spotify.service';

@Component({
    moduleId: module.id,
    selector: 'my-app',
    templateUrl: 'app.component.html',
    providers: [
        HTTP_PROVIDERS,
        SpotifyService
    ],
    directives: [
        ROUTER_DIRECTIVES,
        NavbarTopComponent
    ]
})

export class AppComponent { }
