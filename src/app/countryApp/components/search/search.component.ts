import { Component, computed, effect, input, linkedSignal, output, signal } from '@angular/core';

@Component({
  selector: 'app-search',
  imports: [],
  templateUrl: './search.component.html',
  styleUrl: './search.component.css'
})
export class SearchComponent {


  placeHolder = input.required<string>();
  initialValue = input<string>()

  valueInput = output<string>()

  effectValueInput = linkedSignal<string>( () => this.initialValue() ?? '')

  getQueryEffect = effect((onCleanup) => {
    const value = this.effectValueInput()

   const timeOut = setTimeout( () => {
       this.valueInput.emit(value)
    },500)

    onCleanup(() => {
         clearTimeout(timeOut)
    })

  })



}
