import { ListarUsuariosComponent } from './listar-usuarios/listar-usuarios.component';
import { TelaComponent } from './tela/tela.component';
import { LoginComponent } from './login/login.component';

import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';



const APP_ROUTES: Routes = [
    {path: '', component: LoginComponent},
    {path: 'login', component: LoginComponent},
    {path: 'tela', component: TelaComponent}, 
    {path: 'usuarios', component: ListarUsuariosComponent}     
];

export const routing : ModuleWithProviders = RouterModule.forRoot(APP_ROUTES);
