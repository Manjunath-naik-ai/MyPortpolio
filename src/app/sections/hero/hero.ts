import { Component } from '@angular/core';

@Component({
  selector: 'app-hero',
  imports: [],
  templateUrl: './hero.html',
  styleUrl: './hero.css',
})
export class Hero {
roles: string[] = [
    "Software Developer",
    "Frontend Engineer",
    "Backend Engineer",
    "Full Stack Developer"
  ];

  currentRole: string = this.roles[0];
  index = 0;

  ngOnInit() {
    setInterval(() => {
      this.index = (this.index + 1) % this.roles.length;
      this.currentRole = this.roles[this.index];
    }, 2000);   // change every 2 seconds
  }
}