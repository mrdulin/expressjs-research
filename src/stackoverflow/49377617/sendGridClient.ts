// @ts-nocheck
import sendGridMail from '@sendgrid/mail';
import Promise from 'bluebird';

export default class sendGridClient {
  constructor() {
    this.apiKey = 'Test key';
    this.sendGrid = Promise.promisifyAll(sendGridMail);
    this.sendGrid.setApiKey(this.apiKey);
  }

  async send(to, from, subject, description, body) {
    const message = {
      to,
      from,
      subject,
      text: description,
      html: body,
    };
    const response = await this.sendGrid.sendAsync(message);
    return response;
  }
}
