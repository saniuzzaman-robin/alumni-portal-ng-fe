import { Component, Input, OnInit } from '@angular/core';
import { fadeIn, fadeOut, scaleIn, scaleOut } from './app-carousel.animations';
import { transition, trigger, useAnimation } from '@angular/animations';
@Component({
	selector: 'app-carousel',
	templateUrl: './app-carousel.component.html',
	styleUrls: ['./app-carousel.component.scss'],
	animations: [
		trigger('carouselAnimation', [
			transition('void => *', [
				useAnimation(fadeIn, { params: { time: '1300ms' } }),
			]),
			transition('* => void', [
				useAnimation(fadeOut, { params: { time: '1300ms' } }),
			]),
		]),
		trigger('slideAnimation', [
			/* scale */
			transition('void => *', [
				useAnimation(scaleIn, { params: { time: '500ms' } }),
			]),
			transition('* => void', [
				useAnimation(scaleOut, { params: { time: '500ms' } }),
			]),
		]),
	],
})
export class AppCarouselComponent implements OnInit {
	@Input() slides: any[] = [];
	@Input() arrowWidth = '16px';
	@Input() arrowHeight = '16px';
	@Input() indicators = true;
	@Input() autoPlay = false;
	@Input() autoPlayInterval = 5000;
	@Input() registrationUrl =
		'https://images.pexels.com/photos/15490405/pexels-photo-15490405/free-photo-of-alumni-standing-in-academic-dress.jpeg?auto=compress&cs=tinysrgb&w=600';

	currentSlide = 0;
	ngOnInit() {
		this.preloadImages();
		if (this.autoPlay) {
			setInterval(() => {
				this.currentSlide =
					this.slides.length === this.currentSlide
						? 0
						: this.currentSlide + 1;
			}, this.autoPlayInterval);
		}
	}
	onPreviousClick() {
		const previous = this.currentSlide - 1;
		this.currentSlide = previous < 0 ? this.slides.length - 1 : previous;
		console.log(
			'previous clicked, new current slide is: ',
			this.currentSlide
		);
	}

	onNextClick() {
		const next = this.currentSlide + 1;
		this.currentSlide = next === this.slides.length ? 0 : next;
		console.log('next clicked, new current slide is: ', this.currentSlide);
	}
	preloadImages() {
		for (const slide of this.slides) {
			new Image().src = slide.Url;
		}
	}
}
