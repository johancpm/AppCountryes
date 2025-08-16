import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { BtnOptionComponent } from "../../components/btn-option/btn-option.component";

@Component({
  selector: 'app-layout-page',
  imports: [RouterOutlet, BtnOptionComponent],
  templateUrl: './layout-page.component.html',
  styleUrl: './layout-page.component.css'
})
export class LayoutPageComponent {

}
