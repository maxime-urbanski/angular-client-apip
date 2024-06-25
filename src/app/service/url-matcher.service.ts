import { Injectable } from '@angular/core';
import {NavigationEnd, Router, RoutesRecognized} from "@angular/router";
import {HttpErrorResponse} from "@angular/common/http";
import {filter, map} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class UrlMatcherService {

  constructor(private router: Router) { }

  urlMatcher(url: string) {
    const urlToCheck = this.router.parseUrl(url)
    console.log('urlToCheck ==>', urlToCheck)

  }
}
