import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppCarouselComponent } from './components/app-carousel/app-carousel.component';

@NgModule({
	declarations: [AppCarouselComponent],
	imports: [CommonModule],
	exports: [AppCarouselComponent],
})
export class AppCarouselModule {}
