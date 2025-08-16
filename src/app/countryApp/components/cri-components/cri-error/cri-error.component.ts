import { Component, inject } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-cri-error',
  imports: [],
  templateUrl: './cri-error.component.html',
  styleUrl: './cri-error.component.css'
})
export class CriErrorComponent {
 location = inject(Location)

 goBack () {
  this.location.back()
 }
}
