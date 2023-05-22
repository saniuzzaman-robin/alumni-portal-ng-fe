import { Component, Input } from '@angular/core';
export type Image = {
	Name: string;
	Url: string;
};
@Component({
	selector: 'app-carousel',
	templateUrl: './app-carousel.component.html',
	styleUrls: ['./app-carousel.component.scss'],
})
export class AppCarouselComponent {
	@Input() images: Image[] = [];

	responsiveOptions: any[] = [];

	ngOnInit() {
		this.responsiveOptions = [
			{
				breakpoint: '1199px',
				numVisible: 1,
				numScroll: 1,
			},
			{
				breakpoint: '991px',
				numVisible: 1,
				numScroll: 1,
			},
			{
				breakpoint: '767px',
				numVisible: 1,
				numScroll: 1,
			},
		];
	}

	getSeverity(status: string) {
		switch (status) {
			case 'INSTOCK':
				return 'success';
			case 'LOWSTOCK':
				return 'warning';
			case 'OUTOFSTOCK':
				return 'danger';
			default:
				return 'danger';
		}
	}
}
