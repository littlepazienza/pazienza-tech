import { Component } from '@angular/core';

export interface ImageData {
  type: string,
  src: string,
  name: string,
  desc: string,
  supportingFiles: ImageReferences[]
}

export interface ImageReferences {
  type: string,
  src: string,
}

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent {
  // Modal toggle
  isModalOpen = false;
  isFullscreenModalOpen = false;
  
  // Modal data
  selected: ImageData;
  selectedFullscreen: ImageReferences;

  // Image data from the json
  images: ImageData[];

  async ngOnInit() {
    try {
      const response = await fetch('assets/gallery/gallery.json'); // Adjust path as needed
      this.images = await response.json();
    } catch (error) {
      console.error('Error loading JSON:', error);
    }
  }

  openModal(index: number): void {
    this.selected = this.images[index];
    this.isModalOpen = true;
  }

  openFullscreenModal(media: ImageReferences): void {
    this.selectedFullscreen = media;
    this.isFullscreenModalOpen = true;
  }
  
  closeModal(): void {
    this.isModalOpen = false;
  }
  
  closeFullscreenModal(): void {
    this.isFullscreenModalOpen = false;
  }
}
