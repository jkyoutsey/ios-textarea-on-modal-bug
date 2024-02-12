import { Component, Input } from '@angular/core';
import { IonButton, IonTextarea, IonModal } from '@ionic/angular/standalone';

@Component({
  selector: 'app-explore-container',
  templateUrl: './explore-container.component.html',
  styleUrls: ['./explore-container.component.scss'],
  standalone: true,
  imports: [IonTextarea, IonButton, IonModal],
})
export class ExploreContainerComponent {
  @Input() name?: string;
}
