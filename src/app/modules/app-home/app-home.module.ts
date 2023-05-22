import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppHomeComponent } from './components/app-home/app-home.component';
import { Route, RouterModule } from '@angular/router';
import { AppCarouselModule } from '../../shared/modules/app-carousel/app-carousel.module';
import { AppSectionTitleComponent } from 'src/app/shared/components/app-section-title/app-section-title.component';
import { AppEventCardComponent } from 'src/app/shared/components/app-event-card/app-event-card.component';
import { MatButtonModule } from '@angular/material/button';

const routes: Route[] = [
	{
		path: '',
		component: AppHomeComponent,
	},
];
@NgModule({
	declarations: [AppHomeComponent],
	imports: [
		CommonModule,
		RouterModule.forChild(routes),
		AppCarouselModule,
		AppSectionTitleComponent,
		AppEventCardComponent,
		MatButtonModule,
	],
})
export class AppHomeModule {}
