import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { UsersComponent } from './users/users.component';
import { UserComponent } from './users/user/user.component';
import { ServersComponent } from './servers/servers.component';
import { ServerComponent } from './servers/server/server.component';
import { EditServerComponent } from './servers/edit-server/edit-server.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { AuthGuard } from './auth-guard.service';
import { CanDeactivateGuard } from './servers/edit-server/can-deactivate.serveice';
import { ErrorPageComponent } from './error-page/error-page.component';
import { ResolverService } from './servers/server/server-resolve.service';

const appRoutes: Routes = [
  { path: '', component: HomeComponent }, // localhost:4200/
  {
    path: 'users', component: UsersComponent, children: [
      { path: ':id/:name', component: UserComponent }, // localhost:4200/users/1
    ]
  }, // localhost:4200/users
  {
    path: 'servers',
    // canActivate: [AuthGuard],
    canActivateChild: [AuthGuard],
    component: ServersComponent, children: [
      { path: ':id', component: ServerComponent, resolve: { server: ResolverService } },  // localhost:4200/servers
      { path: ':id/edit', component: EditServerComponent, canDeactivate: [CanDeactivateGuard] }  // localhost:4200/servers/5/edit
    ]
  },  // localhost:4200/servers
  // { path: 'not-found', component: PageNotFoundComponent },
  { path: 'not-found', component: ErrorPageComponent, data: { message: 'Page not found!' } },
  { path: '**', redirectTo: '/not-found' }
];
@NgModule({
  // imports: [RouterModule.forRoot(appRoutes, { useHash: true })],
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
