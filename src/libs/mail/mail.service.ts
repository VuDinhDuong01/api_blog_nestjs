/* eslint-disable prettier/prettier */
import { MailerService } from '@nestjs-modules/mailer';
import { Injectable } from '@nestjs/common';
import { TEMPLATE_SEND_EMAIL_RESET_PASSWORD } from 'src/utils/send-mail';

@Injectable()
export class MailService {
  constructor(private mailerService: MailerService) {}
  async sendUserConfirmation(emailTo: string , token?:string , link?:string) {
    await this.mailerService.sendMail({
      to: emailTo,
      subject: 'Welcome to Nice App! Confirm your Email',
      html:TEMPLATE_SEND_EMAIL_RESET_PASSWORD({token, link})
    });
  }
}
export interface User {
  email: string;
  name: string;
}