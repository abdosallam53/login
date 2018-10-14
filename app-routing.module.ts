import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router'; // Routes tell the router which view to display when a user clicks a link
import { DashboardComponent } from './dashboard/dashboard.component'; // auto imports when you create a path
import { LoginComponent } from './login/login.component';

// a route has two properties:
// a "path" which is a string that matches the URL and a "component" to display when navigating to this route
const routes: Routes = [
  { path: '', component: LoginComponent},
  { path: 'dashboard', component: DashboardComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  // auto added, initializes the router and
  //  starts it listening for browser location changes
  exports: [RouterModule]
})
export class AppRoutingModule { }

 // In imports, the method is called forRoot() because you configure the router at the application's
//  root level. The forRoot() method supplies the service providers and directives needed for routing,
// and performs the initial navigation based on the current browser URL.
