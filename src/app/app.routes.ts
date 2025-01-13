import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { ErreurComponent } from './erreur/erreur.component';
import { UserComponent } from './user/user.component';

export const routes: Routes = [
    
    {path : "",component : HomeComponent},

    {path: "contact",component : ContactComponent},

    {path: "user/:id", component : UserComponent},

    {path : "**",component : ErreurComponent}
];
