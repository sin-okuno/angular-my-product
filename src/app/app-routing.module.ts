import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UrlConst } from './pages/constants/url-const';
import { ListingPageComponent } from './pages/components/listing-page/listing-page.component';
import { RegisterPostsComponent } from './pages/components/register-posts/register-posts.component';

const routes: Routes = [
  { path: '', redirectTo: UrlConst.SLASH + UrlConst.PATH_LIST, pathMatch: 'full' },
  { path: UrlConst.PATH_LIST, component: ListingPageComponent },
  { path: UrlConst.PATH_REG, component: RegisterPostsComponent }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
