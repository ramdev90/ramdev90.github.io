import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-templates',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './templates.component.html',
  styleUrl: './templates.component.css',
})
export class TemplatesComponent {
  templates = [
    `<p>Dear</p>
  <p>I hope you're doing well.</p>
  <p>I've recently come across your agency on Upwork and was impressed by the work you're doing. As a skilled freelancer with experience in Mean stack, I believe my skills and background would be a great fit for your team.</p>
  <p>I'm currently looking for opportunities to collaborate with agencies like yours, where I can contribute my expertise and work on exciting projects. I’d love to join your team and contribute to the success of your clients while continuing to grow professionally.</p>
  <p>If you're open to it, I would appreciate the chance to schedule a brief call to introduce myself, share my portfolio, and discuss how I can add value to your agency's efforts. Please let me know a convenient time for you, and we can arrange a meeting via Zoom, Skype, or Google Meet, whichever works best for you.</p>
  <p>Thank you for considering my application. I look forward to the opportunity to connect with you soon!</p>
  <p>Best regards,</p>
  <p>QueenQuarry Team</p>,
  "ramdev"`,

    `const subject = "Skilled Software Engineering Team – Inquiry About Collaboration or Opportunities";

const message = 
  <p>Hi ${name},</p>

  <p>I hope you're doing well. My name is Ramdev, and I’m part of a team of five experienced Software Engineers based in India. We specialize in full-stack development, with strong expertise in Angular, Node.js, MongoDB, and other modern technologies.</p>

  <p>We’re reaching out to explore potential collaboration or any open Software Engineering opportunities within your team or organization. I am also MongoDB certified, and together, our team has a proven track record of delivering scalable and high-quality software solutions.</p>

  <p>We’d love to learn more about your current needs, upcoming projects, and how our team can contribute to your success.</p>

  <p>Thank you for your time and consideration. Looking forward to connecting with you.</p>

  <p>Best regards,<br>
  Ramdev<br>
  On behalf of the Innovation Synergize Team<br>
  <a href="https://innovationsynergize.com/">https://innovationsynergize.com</a><br>
  <a href="https://www.linkedin.com/in/rathod-ramdevbhai/">LinkedIn Profile</a><br>
  </p>
`,

    `const subject = "Skilled Software Engineering Team – Inquiry About Collaboration or Opportunities";

const message = 
  <p>Hi ${name},</p>

  <p>I hope you're doing well. My name is Ramdev, and I’m part of a team of five experienced Software Engineers based in India. We specialize in full-stack development, with strong expertise in Angular, Node.js, MongoDB, and other modern technologies.</p>

  <p>We’re reaching out to explore potential collaboration or any open Software Engineering opportunities within your team or organization. I am also MongoDB certified, and together, our team has a proven track record of delivering scalable and high-quality software solutions.</p>

  <p>We’d love to learn more about your current needs, upcoming projects, and how our team can contribute to your success.</p>

  <p>Thank you for your time and consideration. Looking forward to connecting with you.</p>

  <p>Best regards,<br>
  Ramdev<br>
  On behalf of the Innovation Synergize Team<br>
  <a href="https://innovationsynergize.com/">https://innovationsynergize.com</a><br>
  <a href="https://www.linkedin.com/in/rathod-ramdevbhai/">LinkedIn Profile</a><br>
  </p>
`,
  ];
}
