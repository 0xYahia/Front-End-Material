import { NgFor } from '@angular/common';
import { Component, computed, Signal, signal, WritableSignal } from '@angular/core';

@Component({
  selector: 'app-signals',
  templateUrl: './signals.component.html',
  standalone: true,
  imports: [NgFor],
})
export class SignalsComponent {
  actions: string[] = [];
  counter: WritableSignal<number> = signal(0);

  doubleCounter: Signal<number> = computed(() => this.counter() * 2);

  increment() {
    this.counter.update(oldCounter => oldCounter + 1);
    this.actions.push('INCREMENT');
  }

  decrement() {
    this.counter.update(oldCounter => oldCounter - 1);
    this.actions.push('DECREMENT');
  }
}
