import { Component } from '@angular/core';
import { HomeContentComponent } from "../components/home-content/home-content.component";

@Component({
  selector: 'app-footer-page',
  imports: [ HomeContentComponent],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.css'
})
export default class HomePageComponent {

}
