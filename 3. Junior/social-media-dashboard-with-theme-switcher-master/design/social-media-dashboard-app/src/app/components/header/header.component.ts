import { DOCUMENT } from '@angular/common';
import { Component, Inject } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  isDarkActive = false
  themeUser = ''

  constructor(@Inject(DOCUMENT)
    private document: Document,
  ) {
    this.getDataLocal()
    this.isDarkActive = this.document.documentElement.classList.contains('dark');
  }

  getDataLocal() {
    this.themeUser = localStorage.getItem('theme') ?? ''

    if (this.themeUser === 'dark') {
      this.isDarkActive = true
      this.document.documentElement.classList.toggle('dark')
    }
  }

  saveLocal() {
    this.isDarkActive ? this.themeUser = 'dark' : this.themeUser = 'ligth'
    localStorage.setItem('theme', (this.themeUser));
  }


  toggleTheme(): void {
    this.isDarkActive = !this.isDarkActive;

    if (this.isDarkActive) {
      this.document.documentElement.classList.add('dark')
      this.saveLocal()
    } else {
      this.document.documentElement.classList.remove('dark')
      this.saveLocal()
    }
  }
}

