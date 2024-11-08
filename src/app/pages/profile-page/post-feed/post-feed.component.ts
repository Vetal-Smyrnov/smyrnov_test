import {
  Component,
  ElementRef,
  HostListener,
  inject,
  Renderer2,
} from '@angular/core';
import { PostInputComponent } from '../post-input/post-input.component';
import { PostComponent } from '../post/post.component';
import { PostService } from '../../../data/services/post.service';
import { firstValueFrom, from, fromEvent } from 'rxjs';

@Component({
  selector: 'app-post-feed',
  standalone: true,
  imports: [PostInputComponent, PostComponent],
  templateUrl: './post-feed.component.html',
  styleUrl: './post-feed.component.scss',
})
export class PostFeedComponent {
  PostService = inject(PostService);
  hostElement = inject(ElementRef);
  r2 = inject(Renderer2);

  feed = this.PostService.posts;

  @HostListener('window:resize')
  onWindowResize() {
    this.resizeFeed();
  }

  constructor() {
    firstValueFrom(this.PostService.fetchPost());
  }

  ngAfterViewInit() {
    this.resizeFeed();

    fromEvent(window, 'resize').subscribe(() => {
      console.log(123);
    });
  }

  resizeFeed() {
    const { top } = this.hostElement.nativeElement.getBoundingClientRect();
    const height: number = window.innerHeight - top - 48;
    this.r2.setStyle(this.hostElement.nativeElement, 'height', `${height}px`);
  }
}
