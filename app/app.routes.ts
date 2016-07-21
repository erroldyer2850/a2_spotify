import { provideRouter } from '@angular/router';
import { SearchRoute } from './search/search.route';
import { AboutRoutes } from './about/about.route';
import { ArtistRoute } from './artists/artist.route';
import { AlbumRoute } from './album/album.route';

export const routes = [
  ...AboutRoutes,
  ...SearchRoute,
  ...ArtistRoute,
  ...AlbumRoute

];

export const APP_ROUTER_PROVIDERS = [
  provideRouter(routes)
];
