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

  ngOnInit(): void {
    const navigation = this.router.lastSuccessfulNavigation?.extras;
    this.navLink = navigation?.state?.['song'].viewLink;
    this.downloadLink = navigation?.state?.['song'].downloadLink;
    this.link = this.sanitizer.bypassSecurityTrustResourceUrl(this.navLink);
  }

  goBack() {
    this.router.navigate(['home']);
  }

  openLink() {
    window.open(this.downloadLink, '_blank');
  }
}
