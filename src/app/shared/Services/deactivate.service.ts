import { ActivatedRouteSnapshot, CanDeactivate, RouterStateSnapshot } from "@angular/router";
import { ContactComponent } from "../../midmodule/contact/contact.component";
import { Observable } from "rxjs";

export interface Ideactivate{
    canExit : () => Observable<boolean> | Promise<boolean>  | boolean;
}
export class CanDeactivateGuardService implements CanDeactivate<Ideactivate>{
    canDeactivate(component: Ideactivate, currentRoute : ActivatedRouteSnapshot, currentState : RouterStateSnapshot, nextState : RouterStateSnapshot){
        return component.canExit()
    }
}




