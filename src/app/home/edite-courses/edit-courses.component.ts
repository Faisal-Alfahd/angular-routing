import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Courses } from 'src/app/services/courses-data/courses';
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: 'app-edit-courses',
  templateUrl: './edit-courses.component.html',
  styleUrls: ['./edit-courses.component.scss']
})

export class EditCoursesComponent implements OnInit {
  courses$: Observable<Courses[]>;

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.courses$ = this.route.parent.snapshot.data.courses;
  }

}
