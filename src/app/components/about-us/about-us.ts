import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-about-us',
  imports: [RouterLink],
  templateUrl: './about-us.html',
  styleUrl: './about-us.css',
})
export class AboutUs {
  team = [
    { name: 'Eng. Osama', role: 'Web Dev Instructor', initials: 'OS' },
    { name: 'Eng. Mona', role: 'Angular & English', initials: 'MO' },
    { name: 'Eng. Mohamed', role: 'Next.js Instructor', initials: 'MH' },
    { name: 'Eng. Tarek', role: 'Node.js Instructor', initials: 'TK' },
    { name: 'Eng. Ahmed', role: 'Accounting', initials: 'AH' },
    { name: 'Eng. Ali', role: 'Marketing', initials: 'AL' },
    { name: 'Eng. Maged', role: 'Digital Marketing', initials: 'MG' },
    { name: 'Eng. Saad', role: 'Graphic Design', initials: 'SA' },
  ];
}
