import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppHomeComponent } from './components/app-home/app-home.component';
import { Route, RouterModule } from '@angular/router';
import { AppCarouselModule } from '../../shared/modules/app-carousel/app-carousel.module';

const routes: Route[] = [
	{
		path: '',
		component: AppHomeComponent,
	},
];
@NgModule({
	declarations: [AppHomeComponent],
	imports: [CommonModule, RouterModule.forChild(routes), AppCarouselModule],
})
export class AppHomeModule {}
