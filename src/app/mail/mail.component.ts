import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { environment } from '../../environments/environment.development';

@Component({
  selector: 'app-mail',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './mail.component.html',
  styleUrl: './mail.component.css',
})
export class MailComponent {
  selectedMailType = 'static';
  collectionName = '';
  generatedMail: null | { subject: any; email: any } = null;
  safeHtmlContent!: SafeHtml;
  timePending = '';
  staticSubject =
    'Exploring Global Opportunities - Experienced Angular Engineer | MongoDB Certified';
  staticMessage = '';
  htmlContent = ``;
  currentDoc: any;

  generatedPromt =
    `"${prompt}"` +
    '\n\t above is client lead data i want to cold mail send mail to hunt the client' +
    '\n\t so based on this client data give me subject and personalized email in {"email": "body of the mail in html format", subject: "here subject"} json format' +
    '\n\t dont add any placeholder in mail body and give it in proper format no email no website in email body' +
    '\n\t make it proffestional email and medium size mail and dont add br tag in email html body' +
    '\n\t make it in simple language and like human written tone and proffestional' +
    '\n\t make email in about 80 to 120 words and dont add my contact info in email body not website not email and not phone' +
    '\n\t QueenQuarry Team providing web development service';

  constructor(private http: HttpClient, private sanitizer: DomSanitizer) {}

  intervalId: any;
  onSend() {
    const startInterval = () => {
      let randomDelay =
        Math.floor(Math.random() * (180000 - 60000 + 1)) + 60000; //max = 180000 (3 minutes in milliseconds). //min = 60000 (1 minute in milliseconds).

      this.getMail();
      if (true) {
        // TODO
        this.intervalId = setTimeout(startInterval, randomDelay);
      } else {
        console.log('Interval cleared');
      }
    };

    startInterval();
  }

  private setTemplate(name: string) {
    this.staticMessage = `<p>Hi ${name},</p>

<p>
  I hope you're doing well. My name is Ramdev Rathod, and I’m a software
  engineer with solid experience building front-end applications using Angular
  and a strong backend foundation as a MongoDB Certified Developer.
</p>

<p>
  I’m currently exploring international opportunities where I can contribute to
  high-impact projects, especially with companies leveraging modern JavaScript
  stacks.
</p>

<p>
  Over the past 3+ years, I’ve worked primarily on Angular-based projects in
  fintech and ERP domains—building responsive, modular UIs, optimizing front-end
  performance, and collaborating in Agile teams. My MEAN stack experience
  includes developing REST APIs, integrating MongoDB, and deploying full-stack
  features end-to-end. and am always eager to bring clean code and performance
  optimization into fast-paced teams.
</p>

<p>
  If you know of any roles that align, or could point me in the right direction,
  I’d love to connect.
</p>

<p>Thanks for your time, and I look forward to connecting.</p>
<p>
  Best regards,<br />
  Ramdev Rathod<br />
  https://www.linkedin.com/in/rathod-ramdev/
</p>`;
  }

  private getMail() {
    this.http
      .get(
        environment.API_BASEURL +
          '/api/getLinkedinData/getData?selected=true&limit=1'
        // , {params: {collectionName: this.collectionName}}
      )
      .subscribe((res: any) => {
        let document = JSON.parse(JSON.stringify(res));

        let email = null;

        if (document[0]) {
          this.currentDoc = document[0];
          this.setTemplate(this.currentDoc?.full_name || '');
          if (document[0].emails.length) {
            let emails = document[0].emails;

            email = emails[0].address;

            emails.forEach((el: any) => {
              if (el.type == 'personal') {
                //prefered personal email first
                email = emails[0].address;
              }
            });
          }
        }

        if (email) {
          this.generateMail(email, document[0]._id);
        }
      });
  }

  private generateMail(toEmail: string, _id: string) {
    // `above is client leads data that I want to use for sending a professional email to the client. Based on this data, please generate an email in the following format:

    // Provide the subject line and the email body in HTML format, without any placeholders.
    // The email should be professional, concise, and in a simple, human-like tone, avoiding technical jargon or unnecessary complexity.
    // The email body should be between 80 to 120 words, and formatted properly with appropriate paragraphs (no <br> tags).
    // Do not include any email addresses, websites, or contact details in the email body.
    // The email should be sent from Ramdev, who provides web development services.
    // Please provide the response in the following JSON format:

    // json
    // {
    //   "email": "body of the email in HTML format",
    //   "subject": "subject of the email"
    // }
    // Make sure the email sounds professional and is easy to read, with a clear and polite tone`

    // TODO
    if (this.selectedMailType === 'static') {
      this.sendMail(_id, toEmail, this.staticSubject, this.staticMessage);
      this.generatedMail = {
        subject: this.staticSubject,
        email: this.staticMessage,
      };
      this.safeHtmlContent = this.sanitizer.bypassSecurityTrustHtml(
        this.staticMessage
      );
    } else {
      this.http
        .post(environment.API_BASEURL + '/api/generateEmail', {
          prompt: this.generatedPromt,
          selectedMailType: this.selectedMailType,
          collectionName: this.collectionName,
        })
        .subscribe((res: any) => {
          this.sendMail(res?._id, toEmail, res?.subject, res?.email);
          this.generatedMail = { subject: res?.subject, email: res?.email };
          this.safeHtmlContent = this.sanitizer.bypassSecurityTrustHtml(
            res?.email
          );
        });
    }
  }

  private sendMail(_id: string, to: string, subject: string, message: string) {
    console.log('running email', to);
    this.postLinkedinSelectionData(_id);

    this.http
      .post(environment.API_BASEURL + '/api/mail/send-email', {
        to: to,
        subject: subject,
        message: message,
        collectionName: this.collectionName,
      })
      .subscribe((res) => {
        console.log(res);
      });
  }

  private postLinkedinSelectionData(id: string) {
    this.http
      .post(
        environment.API_BASEURL + '/api/getLinkedinData/postSentLinkedinMail',
        { id: id }
      )
      .subscribe((res) => {
        console.log(res);
      });
  }
}
