import { Component } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { UploadComponent } from './upload/upload.component';
import { MailComponent } from './mail/mail.component';
import { HeaderComponent } from './shared/header/header.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterModule, UploadComponent, MailComponent, HeaderComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'front';
}
