import { Component, OnInit } from '@angular/core';
import { UserService } from '../../core/services/user.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html'
})
export class ProfileComponent implements OnInit {

  user: any;
  loading = true;

  constructor(private userService: UserService) {}

  ngOnInit(): void {
    this.userService.getProfile().subscribe({
      next: (res: any) => {
        this.user = res;
        this.loading = false;
      },
      error: () => {
        this.loading = false;
      }
    });
  }
}
