import { Injectable } from '@angular/core';
import { Courses } from '../services/courses-data/courses';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { CoursesService } from '../services/courses-data/courses.service';
import { delay } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ResolveCoursesService implements Resolve<Courses[]> {

  constructor(private coursesService: CoursesService) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Courses[]> {
    return this.coursesService.getAllCourses().pipe(delay(2000));
  }
}
