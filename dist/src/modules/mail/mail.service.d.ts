import { Transporter } from 'nodemailer';
import SMTPTransport from 'nodemailer/lib/smtp-transport';
import { IMailService } from './mail.interface';
export declare class MailService extends IMailService {
    private readonly transporter;
    constructor(transporter: Transporter<SMTPTransport.SentMessageInfo>);
    private sendMail;
    sendOTP(payload: SendOTPPayload): Promise<any>;
}
