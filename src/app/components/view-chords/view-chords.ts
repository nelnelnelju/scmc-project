import { Component, inject, OnInit } from '@angular/core';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';
import { Router } from '@angular/router';

@Component({
  selector: 'app-view-chords',
  imports: [],
  templateUrl: './view-chords.html',
  styleUrl: './view-chords.scss',
})
export class ViewChords implements OnInit {
  private readonly router = inject(Router);
  private readonly sanitizer = inject(DomSanitizer);
  link!: SafeUrl;
  navLink!: any;
  downloadLink!: any;
  youtubeLink!: any;

  ngOnInit(): void {
    const navigation = this.router.lastSuccessfulNavigation?.extras;
    this.navLink = navigation?.state?.['song'].viewLink;
    this.downloadLink = navigation?.state?.['song'].downloadLink;
    this.youtubeLink = navigation?.state?.['song'].youtubeLink;
    this.link = this.sanitizer.bypassSecurityTrustResourceUrl(this.navLink);
  }

  goBack() {
    this.router.navigate(['home']);
  }

  openDownloadLink() {
    window.open(this.downloadLink, '_blank');
  }
  
  openYoutubeLink() {
    window.open(this.youtubeLink, '_blank');
  }
}
