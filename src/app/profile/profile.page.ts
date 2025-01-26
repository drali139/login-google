import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {
  user: any;

  constructor(private router: Router) {}

  ngOnInit() {
    // Retrieve user data from the router state
    const navigation = this.router.getCurrentNavigation();
    if (navigation && navigation.extras.state) {
      this.user = navigation.extras.state['user'];
    } else {
      // If user data is missing, navigate back to login
      this.router.navigate(['/login']);
    }
  }

  async logout() {
    // Log the user out and navigate to the home or login page
    this.user = null;
    this.router.navigate(['/home']);
  }
}