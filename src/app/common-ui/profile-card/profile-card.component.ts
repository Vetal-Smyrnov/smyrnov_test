import { Component, Input } from '@angular/core';
import { Profile } from '../../data/interfaces/profile.interface';
import { ImgUrlPipe } from '../../helpers/pipes/img-url.pipe';
import { AsyncPipe, NgIf, NgFor } from '@angular/common';

@Component({
  selector: 'app-profile-card',
  standalone: true,
  imports: [ImgUrlPipe, ProfileCardComponent, AsyncPipe, NgIf, NgFor],
  templateUrl: './profile-card.component.html',
  styleUrl: './profile-card.component.scss',
})
export class ProfileCardComponent {
  @Input()
  profile!: Profile;
  // subscriber: any;
}
