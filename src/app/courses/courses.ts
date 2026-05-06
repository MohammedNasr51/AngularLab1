import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ICategory, ICourse } from '../models/icourses';
import { NgClass } from '@angular/common';
import { DisableAfterClick } from '../disable-after-click';


@Component({
  selector: 'app-courses',
  imports: [FormsModule, NgClass,DisableAfterClick],
  templateUrl: './courses.html',
  styleUrl: './courses.css',
})
export class Courses {
  selectedCatId = 0;
  categories: ICategory[] = [
    { id: 0, name: 'All' },
    { id: 1, name: 'Web Development' },
    { id: 2, name: 'Business' },
    { id: 3, name: 'Marketing' },
    { id: 4, name: 'Design' },
  ];

  courses: ICourse[] = [
    {
      id: 1,
      title: 'React Js',
      instructor: 'Eng.Osama',
      price: 500,
      seats: 25,
      image:
        'https://imgs.search.brave.com/9lxgnbvJN8srxnTeZoBHTWalXiPLQr1Uyaj1kKHo6tg/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9raW5z/dGEuY29tL3dwLWNv/bnRlbnQvdXBsb2Fk/cy8yMDIyLzA2L3do/YXQtaXMtcmVhY3Qt/anMtZmVhdHVyZS1p/bWFnZS0xMDI0eDUx/Mi5wbmc',
      catId: 1,
    },
    {
      id: 2,
      title: 'Angular',
      instructor: 'Eng.Mona',
      price: 400,
      seats: 30,
      image:
        'https://imgs.search.brave.com/DrjAR2uwfc-g9MI41JgkLBkDyUyf_8zb8qrgMdX6Ag0/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZWVrc2Zvcmdl/ZWtzLm9yZy93cC1j/b250ZW50L3VwbG9h/ZHMvMjAyMzEwMDkx/ODI5MTkvQW5ndWxh/ci1QcmltZU5HLWNv/cHkud2VicA',
      catId: 1,
    },
    {
      id: 3,
      title: 'NextJs',
      instructor: 'Eng.Mohamed',
      price: 600,
      seats: 20,
      image:
        'https://imgs.search.brave.com/wkE6a6JjSIbvMgVgzKMc96mLTv0iw4ovU5wrmMXL2aM/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/YXhlbGVyYW50LmNv/bS9odWJmcy9JbXBv/cnRlZF9CbG9nX01l/ZGlhL25leHRqc19p/bWFnZTEuanBn',
      catId: 1,
    },
    {
      id: 4,
      title: 'NodeJs',
      instructor: 'Eng.Tarek',
      price: 500,
      seats: 15,
      image:
        'https://imgs.search.brave.com/MDt4sQIyvoJrb8Ra_ooZeY8sFw0kqnRffFqPwH0RD78/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9pbWFn/ZXMucGV4ZWxzLmNv/bS9waG90b3MvMTEw/MzUzODAvcGV4ZWxz/LXBob3RvLTExMDM1/MzgwLmpwZWc_YXV0/bz1jb21wcmVzcyZj/cz10aW55c3JnYiZk/cHI9MSZ3PTUwMA',
      catId: 1,
    },
    {
      id: 5,
      title: 'Accounting',
      instructor: 'Eng.Ahmed',
      price: 300,
      seats: 25,
      image:
        'https://imgs.search.brave.com/VcczAeJuBvjtGgiqSysWli5hgga9M-knZwZMSywiQ6w/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvOTYw/NDUzNDIwL3ZlY3Rv/ci9jYXJ0b29uLW9m/LWhpc3RvZ3JhbS1m/aW5hbmNpYWwtY2hh/cnQtb3ItZ3JhcGgt/YW5kLWhhbmQtd3Jp/dGluZy13b3JkLWdy/b3d0aC5qcGc_cz02/MTJ4NjEyJnc9MCZr/PTIwJmM9cXNQcEtE/cDZmNHZrdFNHVnpG/REYtWlUxSkk4Vm1V/TGJjYUlCcWdoSHNH/Zz0',
      catId: 2,
    },
    {
      id: 6,
      title: 'Business English',
      instructor: 'Eng.Mona',
      price: 600,
      seats: 60,
      image:
        'https://imgs.search.brave.com/cSqRRg7OjYN2AxH8KbtelAVwuEgCDbO9uNkK8VrpV70/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvMTQy/NDk4ODY5OS9waG90/by9idXNpbmVzc21h/bi1jb250ZW1wbGF0/aW5nLWluLXRoZS1v/ZmZpY2UtbG9va2lu/Zy10aHJvdWdoLXRo/ZS13aW5kb3cuanBn/P3M9NjEyeDYxMiZ3/PTAmaz0yMCZjPVVM/V2xGTlVreUY4V0NV/eEl2Mm9LQ2FsVDhO/NFdCeXRMNUFMUXI3/N2pYUkE9',
      catId: 2,
    },
    //make the third cat with different courses

    {
      id: 7,
      title: 'Marketing',
      instructor: 'Eng.Ali',
      price: 700,
      seats: 70,
      image:
        'https://imgs.search.brave.com/xdnv3w2d7ut1AxcuRLzSg2-EP3EfuhOPeS8Y8tr9Vy8/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9pbWFn/ZXMudW5zcGxhc2gu/Y29tL3Bob3RvLTE1/NjI1NzczMDgtOWU2/NmYwYzY1Y2U1P2Zt/PWpwZyZxPTYwJnc9/MzAwMCZhdXRvPWZv/cm1hdCZmaXQ9Y3Jv/cCZpeGxpYj1yYi00/LjEuMCZpeGlkPU0z/d3hNakEzZkRCOE1I/eHpaV0Z5WTJoOE9I/eDhiV0Z5YTJWMGFX/NW5mR1Z1ZkRCOGZE/QjhmSHd3',
      catId: 3,
    },
    {
      id: 8,
      title: 'Digital Marketing',
      instructor: 'Eng.Maged',
      price: 800,
      seats: 80,
      image:
        'https://imgs.search.brave.com/A9OO6BtWvkNntlkiOQwSKPlxTM-WYb3fboxP38FQ53I/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9pLnBp/bmltZy5jb20vb3Jp/Z2luYWxzLzIyL2I1/LzYwLzIyYjU2MDRl/Y2ExMDVhZTE5NWFh/ODA5ZGM3MzRkMDcx/LmpwZw',
      catId: 3,
    },
    {
      id: 9,
      title: 'Graphic Design',
      instructor: 'Eng.Saad',
      price: 900,
      seats: 2,
      image:
        'https://imgs.search.brave.com/eoj353NUYIzrtuDiL0C12J02v6tdVvh_G_J4e3bBvMQ/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9pbWcu/ZnJlZXBpay5jb20v/ZnJlZS1waG90by9z/dGlsbC1saWZlLWdy/YXBoaWMtZGVzaWdu/LXN0dWRpb18yMy0y/MTUxMzIwNzAxLmpw/Zz9zZW10PWFpc19o/eWJyaWQmdz03NDAm/cT04MA',
      catId: 4,
    },
    {
      id: 10,
      title: 'Seo',
      instructor: 'Eng.Samir',
      price: 1000,
      seats: 0,
      image:
        'https://imgs.search.brave.com/_6V8VdBVoVw4FeRFw-aC_WL1T-5-89O4EsjK7fvJOZo/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9jZG4u/cGl4YWJheS5jb20v/cGhvdG8vMjAxOS8w/NC8wNy8yMy8xMS9z/ZWFyY2gtZW5naW5l/LW9wdGltaXphdGlv/bi00MTExMDAwXzY0/MC5qcGc',
      catId: 1,
    },
  ];

  buy(id: number) {
    this.courses = this.courses.map((course) => {
      if (course.id === id && course.seats > 0) {
        return { ...course, seats: course.seats - 1 };
      }
      return course;
    });
  }
}
