import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MainpageComponent } from "./mainpage/mainpage.component";
import { SkillspageComponent } from "./skillspage/skillspage.component";
import { PortfolioComponent } from "./portfolio/portfolio.component";
import { FooterComponent } from "./footer/footer.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [MainpageComponent, SkillspageComponent, PortfolioComponent, FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'first_angluar_project';
}
