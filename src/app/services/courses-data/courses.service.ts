import { Injectable } from '@angular/core';
import { Courses } from './courses';
import { of, Observable } from 'rxjs';
import {delay} from 'rxjs/operators';

const COURSES = [
  new Courses(
    'Angular',
    'Angular Course for Beginners',
    'https://via.placeholder.com/200/808080/FFFFFF?text=ANGULAR'
  ),
  new Courses(
    'HTML',
    'Advanced Course For Web Devolopers',
    'https://via.placeholder.com/200/808080/FFFFFF?text=HTML'
  ),
  new Courses(
    'CSS',
    'CSS From Zero to Hero',
    'https://via.placeholder.com/200/808080/FFFFFF?text=CSS'
  ),
  new Courses(
    'Javascript',
    'Learn Modern Javascript Advanced Topics',
    'https://via.placeholder.com/200/808080/FFFFFF?text=JAVASCRIPT'
  ),
  new Courses(
    'Typescript',
    'Learn Typescript From Scratch',
    'https://via.placeholder.com/200/808080/FFFFFF?text=TYPESCRIPT'
  )
];

const coursesList$ = of(COURSES);

@Injectable({
  providedIn: 'root'
})
export class CoursesService {

  constructor() { }

  getAllCourses(): Observable<Courses[]> {
    return coursesList$;
  }
}
