import { Component, Inject } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  constructor(@Inject(Router) private router: Router) { }
  
home() {
  this.router.navigateByUrl('/home');
}

}
