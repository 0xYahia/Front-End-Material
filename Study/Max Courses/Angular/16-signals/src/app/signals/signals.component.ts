import { NgFor } from '@angular/common';
import { Component, computed, effect, Signal, signal, WritableSignal } from '@angular/core';

@Component({
  selector: 'app-signals',
  templateUrl: './signals.component.html',
  standalone: true,
  imports: [NgFor],
})
export class SignalsComponent {
  actions: WritableSignal<string[]> = signal<string[]>([]);
  counter: WritableSignal<number> = signal(0);

  doubleCounter: Signal<number> = computed(() => this.counter() * 2);

  constructor() {
    effect(() => console.log(this.counter() * 5));
  }

  increment(): void {
    console.log('INCREMENT');
    // this.counter.update(oldCounter => oldCounter + 1);
    //! Update in old array
    this.counter.set(this.counter() + 1);
    // this.actions.push('INCREMENT');
    this.actions.mutate(oldActions => oldActions.push('INCREMENT'));
  }

  decrement(): void {
    if (this.counter() === 0) return;
    console.log('DECREMENT');
    this.counter.update((oldCounter) => oldCounter - 1);
    // this.actions.push('DECREMENT');
    //! this act as mutate because i edit in current array
    this.actions.update(oldActions => [...oldActions, 'DECREMENT']);
  }
}
