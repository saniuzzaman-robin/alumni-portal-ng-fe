import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';

@Component({
	selector: 'app-section-title',
	standalone: true,
	imports: [CommonModule, MatIconModule],
	templateUrl: './app-section-title.component.html',
	styleUrls: ['./app-section-title.component.scss'],
})
export class AppSectionTitleComponent {
	@Input() viewAllButtonText = 'View All';
	@Input() sectionTitle = 'Title';
	@Output() clickViewAll = new EventEmitter<boolean>();

	outputEvent() {
		this.clickViewAll.emit(true);
	}
}
