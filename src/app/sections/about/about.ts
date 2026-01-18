import { Component,OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-about',
  imports: [CommonModule],
  templateUrl: './about.html',
  styleUrl: './about.css',
})
export class About implements OnInit {
 repos: any[] = [];

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.fetchRepos();
  }

  fetchRepos() {
    const username = 'Manjunath-naik-ai';
    const url = `https://api.github.com/users/${username}/repos`;

    this.http.get<any[]>(url).subscribe(
      data => {
        this.repos = data.sort((a, b) => b.stargazers_count - a.stargazers_count);
        console.log(data)
      },
      error => {
        console.error('Error fetching GitHub repos:', error);
      }
    );
  }
}