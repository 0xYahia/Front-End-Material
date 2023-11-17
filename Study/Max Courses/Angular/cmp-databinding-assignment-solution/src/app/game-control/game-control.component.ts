import { Component, EventEmitter, OnDestroy, Output } from '@angular/core';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrl: './game-control.component.css'
})
export class GameControlComponent implements OnDestroy {
  @Output() intervalFired = new EventEmitter<number>();
  interval;
  lastNumber: number = 1;

  ngOnDestroy(): void {
    clearInterval(this.interval);
  }

  onStartGame() {
    this.interval = setInterval(() => {
      this.intervalFired.emit(this.lastNumber++);
    }, 1000);
  }

  onPauseGame() {
    clearInterval(this.interval);
  }
}
