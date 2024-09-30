import { ToastService } from './../toast.service';
import { Component, inject, OnInit } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ButtonModule } from 'primeng/button';
import { ToolbarModule } from 'primeng/toolbar';
import { MenuModule } from 'primeng/menu';
import { CategoryComponent } from './category/category.component';
import { AvatarComponent } from './avatar/avatar.component';
import { DialogService, DynamicDialogRef } from 'primeng/dynamicdialog';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [
    ButtonModule,
    FontAwesomeModule,
    MenuModule,
    ToolbarModule,
    CategoryComponent,
    AvatarComponent,
  ],
  providers: [DialogService],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss',
})
export class NavbarComponent implements OnInit {
  location = 'Anywhere';
  guests = 'Add guests';
  dates = 'Any week';

  ToastService: ToastService = inject(ToastService);

  // login() => this.authService.login();
  // logout() => this.authService.logout();

  currentMenuItems: MenuItem[] | undefined = [];

  ngOnInit(): void {
    this.fetchMenu();
    this.ToastService.send({
      severity: 'info',
      summary: 'Welcome to Your airbnb app',
    });
  }

  private fetchMenu() {
    return [
      {
        label: 'Sign up',
        styleClass: 'font-bold',
      },
      {
        label: 'Log in',
      },
    ];
  }
}
