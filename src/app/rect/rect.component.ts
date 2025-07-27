import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-rect',
  standalone: true,
  imports: [],
  templateUrl: './rect.component.html',
  styleUrl: './rect.component.css',
})
export class RectComponent {
  // Todo: Implement custom two-way binding
  @Input({ required: true }) size!: { width: string; height: string };
  @Output() sizeChange = new EventEmitter<{ width: string; height: string }>();
  // @NOTE: Implement custom two-way binding
  // name of the output should be exactly size + Change in order to angular to understand that this is a two-way binding

  onReset() {
    this.sizeChange.emit({ width: '200', height: '100' });
  }
}
