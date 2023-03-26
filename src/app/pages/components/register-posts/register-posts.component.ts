import { Component } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { PostsService } from '../../services/posts.service';

@Component({
  selector: 'app-register-posts',
  templateUrl: './register-posts.component.html',
  styleUrls: ['./register-posts.component.scss']
})
export class RegisterPostsComponent {
  constructor(private postsService: PostsService, private formBuilder: FormBuilder) {}

  name = new FormControl<string>('', [Validators.required]);
  address = new FormControl<string>('', [Validators.required]);

  checkoutForm = this.formBuilder.group({
    name: this.name,
    address: this.address
  });

  onSubmit(): void {
    this.postsService
      .registerPosts({
        name: this.name.value,
        address: this.address.value
      })
      .subscribe((response) => {
        console.log(response);
      });
  }
}
