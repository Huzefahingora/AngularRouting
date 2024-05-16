//course-gaurd.services
import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, IsActiveMatchOptions, RouterStateSnapshot, UrlTree,Router } from "@angular/router";
import { Observable } from "rxjs";
import { AuthService } from "./auth.service";
@Injectable()
export class CourseGuard implements CanActivate{
   constructor(private authService : AuthService,private router : Router){}

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) : boolean {
        if(this.authService.isAuthenticated())
        {
            return true;
        }
        else{
            this.router.navigate(['top/login']);
        return false;}
    }
}
