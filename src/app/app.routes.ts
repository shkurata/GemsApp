import { RouterModule, Routes } from '@angular/router';
import { GemsListComponent } from './gems-list/gems-list.component';
import { GemsAddComponent } from './gems-add/gems-add.component';
import { GemsUitverkochtComponent } from './gems-uitverkocht/gems-uitverkocht.component';

const APP_ROUTES: Routes = [
    {path: '', redirectTo: '/edelstenen', pathMatch: 'full'},
    {path: 'edelstenen', component: GemsListComponent},
    {path: 'edelsteen-voeg-toe', component: GemsAddComponent},
    {path: 'edelstenen-uitverkocht', component: GemsUitverkochtComponent}    
]

export const routing = RouterModule.forRoot(APP_ROUTES);