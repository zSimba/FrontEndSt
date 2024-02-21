import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {HeaderComponent} from "./shared/header/header.component";
import {DashboardComponent} from "./pages/dashboard/dashboard.component";
import {FooterComponent} from "./shared/footer/footer.component";
import {LoginComponent} from "./auth/login/login.component";
import {CreateComponent} from "./pages/create/create.component";
import {NavComponent} from "./shared/nav/nav.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, DashboardComponent, FooterComponent, LoginComponent, CreateComponent, NavComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'FrontEnd';
}
