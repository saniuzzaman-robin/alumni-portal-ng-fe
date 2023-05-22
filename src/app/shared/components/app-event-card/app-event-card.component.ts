import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EventCard } from '../../models/event-card.model';
import { MatIconModule } from '@angular/material/icon';

@Component({
	selector: 'app-event-card',
	standalone: true,
	imports: [CommonModule, MatIconModule],
	templateUrl: './app-event-card.component.html',
	styleUrls: ['./app-event-card.component.scss'],
})
export class AppEventCardComponent {
	@Input() height = '300px';
	@Input() width = '100px';
	@Input() eventData: EventCard = {
		ThumbnailUrl:
			'https://images.unsplash.com/photo-1501281668745-f7f57925c3b4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80',
		StartDate: new Date(),
		EndDate: new Date(),
		Title: 'Bachelors Day',
		Location: 'Dhaka, Bangladesh',
		Description: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.`,
	};
}
