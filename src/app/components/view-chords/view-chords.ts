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

  ngOnInit(): void {
    const navigation = this.router.lastSuccessfulNavigation?.extras
    const navLink = navigation?.state?.['link'];
    console.log('navlink', navLink);
    
    this.link = this.sanitizer.bypassSecurityTrustResourceUrl(navLink)
  }

  goBack() {
    this.router.navigate(['home'])
  }
}
