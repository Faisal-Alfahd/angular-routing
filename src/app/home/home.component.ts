import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { Courses } from '../services/courses-data/courses';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})

export class HomeComponent implements OnInit {
  courses: Observable<Courses>;

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.courses = this.route.snapshot.data.courses;
  }
}
