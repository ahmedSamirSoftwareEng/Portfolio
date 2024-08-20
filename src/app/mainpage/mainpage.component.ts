import { Component } from '@angular/core';

@Component({
  selector: 'app-mainpage',
  standalone: true,
  imports: [],
  templateUrl: './mainpage.component.html',
  styleUrl: './mainpage.component.css'
})
export class MainpageComponent {
name: string = "Ahmed Samir Ibrahim";

downloadPDF() {
 const link = document.createElement('a');
 link.download = 'download.pdf';
 link.href='assets/ahmedsamir.pdf';
 link.click();
 }

goToContact(){
  // navigate to footer

  document.getElementById("contact")?.scrollIntoView({behavior: "smooth"});

}
}
