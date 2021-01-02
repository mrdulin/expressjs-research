// @ts-nocheck
import { expect } from 'chai';
import sinon from 'sinon';
import sendGridMail from '@sendgrid/mail';
import sendGridClient from './sendGridClient';

describe('sendGridClient', function () {
  it('should send email successfully (replace send method with stub)', async function () {
    const sendOriginal = sendGridMail.send;
    const setApiKey = sinon.stub(sendGridMail, 'setApiKey').returns('mocked');
    const mandrillSend = sinon.stub().callsFake((data, cb) => {
      cb(null, {});
    });
    sendGridMail.send = mandrillSend;
    const sendGridApi = new sendGridClient();

    const actualResult = await sendGridApi.send(
      'supprt@test.com',
      'user@gmail.com',
      'Subject',
      'Email description',
      'Email body',
    );
    expect(actualResult).to.be.deep.equal({});
    sinon.assert.calledWith(setApiKey, 'Test key');
    expect(mandrillSend.callCount).to.equal(1);

    setApiKey.restore();
    sendGridMail.send = sendOriginal;
  });

  it('sends email successfully (stub sendAsync method)', async function () {
    const setApiKey = sinon.stub(sendGridMail, 'setApiKey').returns('mocked');
    const sendGridApi = new sendGridClient();
    const mandrillSend = sinon.stub(sendGridMail, 'sendAsync').resolves({});

    const actualResult = await sendGridApi.send(
      'supprt@test.com',
      'user@gmail.com',
      'Subject',
      'Email description',
      'Email body',
    );
    expect(actualResult).to.be.deep.equal({});
    sinon.assert.calledWith(setApiKey, 'Test key');
    expect(mandrillSend.callCount).to.equal(1);

    setApiKey.restore();
    mandrillSend.restore();
  });
});
