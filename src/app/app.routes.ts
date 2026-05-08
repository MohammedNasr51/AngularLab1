import { Routes } from '@angular/router';
import { Home } from './components/home/home';
import { AboutUs } from './components/about-us/about-us';
import { ContactUs } from './components/contact-us/contact-us';
import { Order } from './components/order/order';
import { NotFound } from './components/not-found/not-found';
import { CourseDetails } from './components/course-details/course-details';

export const routes: Routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'home', component: Home, title: 'Home' },
    { path: 'about-us', component: AboutUs, title: 'About Us' },
    { path: 'contact-us', component: ContactUs, title: 'Contact Us' },
    { path: 'courses', component: Order, title: 'Courses' },
    { path: 'course/:id', component: CourseDetails, title: 'Course Details' },
    { path: '**', component: NotFound, title: 'Not Found' }
];
