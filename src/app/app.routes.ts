import { Routes } from '@angular/router';
import { Home } from './home/home';
import { ConferanceList } from './conferance-list/conferance-list';
import { UserForm } from './user-form/user-form';

export const routes: Routes = [

{path: 'home',component:Home},
{path: 'list',component:ConferanceList},
{path: 'add',component:UserForm},
{path: '',redirectTo: 'home' , pathMatch:'full'}

];
