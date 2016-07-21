import { RouterConfig }          from '@angular/router';
import { AboutComponent }     from './about.component';
//import { HeroDetailComponent }   from './hero-detail.component';

export const AboutRoutes: RouterConfig = [
  { path: 'about',  component: AboutComponent },
 // { path: 'hero/:id', component: HeroDetailComponent }
];
