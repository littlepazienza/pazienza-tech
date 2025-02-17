import { Component } from '@angular/core';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent {
  isModalOpen = false;
  
  // Sample list of media items (images and videos)
  mediaList = [
    {
      type: 'video',
      src: 'assets/gallery/can_i_kick_it.MP4',
      name: 'Beautiful Landscape',
      desc: 'A stunning landscape photo'
    }
    // Add more media items (images and videos) here...
  ];

  // Modal data
  modalMediaSrc: string = '';
  modalMediaType: string = ''; // 'image' or 'video'
  modalMediaName: string = '';
  modalMediaDesc: string = '';

  openModal(index: number): void {
    const selectedMedia = this.mediaList[index];
    this.modalMediaSrc = selectedMedia.src;
    this.modalMediaType = selectedMedia.type;
    this.modalMediaName = selectedMedia.name;
    this.modalMediaDesc = selectedMedia.desc;
    this.isModalOpen = true;

    // Check if the media is a video and unmute it on interaction
    if (this.modalMediaType === 'video') {
      setTimeout(() => {
        const videoElement = document.querySelector('.modal-content') as HTMLVideoElement;
        if (videoElement) {
          videoElement.muted = false;  // Unmute video after modal is open
        }
      }, 100);
    }
  }

  closeModal(): void {
    this.isModalOpen = false;
  }
}
