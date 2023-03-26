import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListingPageComponent } from './components/listing-page/listing-page.component';
import { MaterialModule } from '../material/material.module';
import { RegisterPostsComponent } from './components/register-posts/register-posts.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [ListingPageComponent, RegisterPostsComponent],
  imports: [CommonModule, MaterialModule, ReactiveFormsModule],
  exports: [ListingPageComponent, RegisterPostsComponent]
})
export class PagesModule {}
