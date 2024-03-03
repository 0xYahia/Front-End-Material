import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable, Subscription, interval } from 'rxjs'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, OnDestroy {
  private firstObSubscription: Subscription

  constructor() { }

  ngOnInit(): void {
    // this.firstObSubscription = interval(1000).subscribe(count => {
    //   console.log(count);
    // })

    const customIntervalObservable = Observable.create(observer => {
      let count: number = 0;
      setInterval(() => {
        observer.next(count++);
        if (count == 2) {
          observer.complete()
        }
        if (count > 3) {
          observer.error(new Error('count greater than 3!'))
        }
      }, 1000)
    })

    this.firstObSubscription = customIntervalObservable.subscribe(data => {
      console.log(data);
    },
      error => {
        console.log(error);
        alert(error)
      },
      () => {
        console.log('Completed!');
        alert('Completed!')
      })
  }

  ngOnDestroy(): void {
    this.firstObSubscription.unsubscribe();
  }
}
