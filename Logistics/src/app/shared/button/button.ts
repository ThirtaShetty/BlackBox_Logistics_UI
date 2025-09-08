import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.html',
  styleUrls: ['./button.scss']
})
export class Button {
  @Input() label: string = 'Continue'; // Button text
  @Input() type: 'button' | 'submit' = 'button'; // Button type
  @Input() disabled: boolean = false; // Disable state
  @Input() onClick!: () => void;
  // @Output() onClick = new EventEmitter<void>();

  // handleClick() {
  //   if (!this.disabled) {
  //     this.onClick.emit();
  //   }
  // }
}
