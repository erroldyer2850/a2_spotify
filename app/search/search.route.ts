import { RouterConfig }          from '@angular/router';
import { SearchComponent }     from './search.component';

export const SearchRoute: RouterConfig = [
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
  { path: 'home', component: SearchComponent },
];
