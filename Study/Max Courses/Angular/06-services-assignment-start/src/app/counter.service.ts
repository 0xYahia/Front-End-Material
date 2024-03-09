export class CounterService {
  inActiveToActiveCounter: number = 0;
  activeToInActiveCounter: number = 0;

  setInActiveToActive() {
    this.inActiveToActiveCounter++;
    console.log('InActive to Active ' + this.inActiveToActiveCounter)
  }

  setActiveToInActive() {
    this.activeToInActiveCounter++;
    console.log('Active to InActive ' + this.activeToInActiveCounter)
  }
}
