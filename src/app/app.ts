import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Navbar } from './shared/navbar/navbar';
import { Hero } from './sections/hero/hero';
import { About } from './sections/about/about';
import { Contact } from './sections/contact/contact';
import { Experience } from './sections/experience/experience';
import { Projects } from './sections/projects/projects';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-root',
  imports: [About,Contact,Navbar,Experience,Hero,Projects],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected readonly title = signal('PortPolio');
}
