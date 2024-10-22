import { Component, OnInit, OnDestroy, Inject, PLATFORM_ID } from '@angular/core';
import { CommonModule } from '@angular/common';
import { isPlatformBrowser } from '@angular/common';

interface Testimonial {
  id: number;
  name: string;
  date: string;
  message: string;
  image: string;
  image2: string;
  stars: number;
}

@Component({
  selector: 'app-testimonial',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './testimonial.component.html',
  styleUrls: ['./testimonial.component.css'],
})
export class TestimonialComponent implements OnInit, OnDestroy {
  testimonials: Testimonial[] = [
    {
      id: 1,
      name: 'John Doe',
      date: 'January 1, 2024',
      message: 'This service was fantastic! Highly recommend.',
      image: './../../assets/images/testinomial1.png',
      image2: '',
      stars: 5,
    },
    {
      id: 2,
      name: 'Jane Smith',
      date: 'February 15, 2024',
      message: 'Absolutely wonderful experience.',
      image: '',
      image2: './../../assets/images/testimonial2.png',
      stars: 4,
    },
    {
      id: 3,
      name: 'Bob Johnson',
      date: 'March 10, 2024',
      message: 'Could not have asked for better service!',
      image: './../../assets/images/testimonial3.png',
      image2: '',
      stars: 5,
    },
    {
      id: 4,
      name: 'Alice Davis',
      date: 'April 5, 2024',
      message: 'A memorable experience from start to finish.',
      image: '',
      image2: './../../assets/images/testinomial1.png',
      stars: 4,
    },
    {
      id: 5,
      name: 'Chris Lee',
      date: 'May 12, 2024',
      message: 'I will definitely be coming back!',
      image: './../../assets/images/testimonial2.png',
      image2: '',
      stars: 5,
    },
  ];

  visibleTestimonial: Testimonial[] = [];
  currentIndex = 0;
  windowWidth: number = 0; // Initialize with a default value
  resizeListener: any;

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {}

  ngOnInit() {
    if (isPlatformBrowser(this.platformId)) {
      this.windowWidth = window.innerWidth; // Only access window in browser
      this.updateVisibleTestimonials();

      // Listen for window resize events
      this.resizeListener = () => {
        this.windowWidth = window.innerWidth;
        this.updateVisibleTestimonials();
      };
      window.addEventListener('resize', this.resizeListener);
    } else {
      // Set a default width for server-side rendering or non-browser environments
      this.windowWidth = 768; // Default to a common breakpoint
      this.updateVisibleTestimonials();
    }
  }

  ngOnDestroy() {
    if (isPlatformBrowser(this.platformId) && this.resizeListener) {
      // Clean up event listener if it was set
      window.removeEventListener('resize', this.resizeListener);
    }
  }

  updateVisibleTestimonials() {
    const visibleCount = this.windowWidth < 768 ? 1 : 3; // Show 1 for small and medium screens, 3 for larger screens
    this.visibleTestimonial = this.testimonials.slice(this.currentIndex, this.currentIndex + visibleCount);
  }

  next() {
    const maxIndex = this.testimonials.length - (this.windowWidth < 984 ? 1 : 3);
    if (this.currentIndex < maxIndex) {
      this.currentIndex++;
      this.updateVisibleTestimonials();
    }
  }

  previous() {
    if (this.currentIndex > 0) {
      this.currentIndex--;
      this.updateVisibleTestimonials();
    }
  }
}
