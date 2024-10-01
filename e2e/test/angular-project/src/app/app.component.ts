import { booleanAttribute, Component, EventEmitter, Input, input, model, output, Output } from '@angular/core';

@Component({
  selector: 'app-root',
  styleUrls: ['./app.component.css'],
  templateUrl: './app.component.html'
})
export class AppComponent {
  @Input({ alias: 'decorator-input', transform: booleanAttribute }) decoratorInput = false
  signalInput = input(false, { alias: 'signal-input', transform: booleanAttribute });
  signalRequiredInput = input.required({ alias: 'signal-required-input', transform: booleanAttribute });

  signalModel = model(false, { alias: 'signal-model' });
  signalRequiredModel = model.required<boolean>({ alias: 'signal-required-model' });

  @Output() decoratorOutput = new EventEmitter<boolean>();
  signalOutput = output({ alias: 'signal-output' });

  public title = 'angular' + '-project';
}
