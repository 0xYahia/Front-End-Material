import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable, OperatorFunction, Subscription, interval } from 'rxjs';
import { filter, map } from 'rxjs/operators';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, OnDestroy {
  private firstObSubscription: Subscription;

  constructor() { }

  ngOnInit(): void {
    // this.firstObSubscription = interval(1000).subscribe(count => {
    //   console.log(count);
    // })

    const customIntervalObservable: Observable<number> = Observable.create((observer) => {
      let count: number = 0;
      setInterval(() => {
        observer.next(count++);
        if (count == 3) {
          observer.complete();
        }
        if (count > 3) {
          observer.error(new Error('count greater than 3!'));
        }
      }, 1000);
    });


    this.firstObSubscription = customIntervalObservable.pipe(
      filter((data) => {
        return data > 0;
      }),
      map((data: number) => {
        return 'Round: ' + (data + 1);
      })).subscribe(data => {
        console.log(data);
      },
        error => {
          console.log(error);
          alert(error);
        },
        () => {
          console.log('Completed!');
          alert('Completed!');
        });
  }

  ngOnDestroy(): void {
    this.firstObSubscription.unsubscribe();
  }
}
