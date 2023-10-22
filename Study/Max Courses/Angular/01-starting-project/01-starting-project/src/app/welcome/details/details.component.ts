import { Component } from '@angular/core';
// import { SharedModule } from '../../shared/shared.module';
import { AnalyticsService } from 'src/app/shared/analytics.service';
import { HighlightDirective } from 'src/app/shared/highlight.directive';

@Component({
  selector: 'app-details',
  standalone: true,
  imports: [HighlightDirective],
templateUrl: './details.component.html',
  styleUrls: ['./details.component.css'],
})
export class DetailsComponent {
  constructor(private analyticsService: AnalyticsService) {}

  onClick() {
    this.analyticsService.registerClick();
  }
}
