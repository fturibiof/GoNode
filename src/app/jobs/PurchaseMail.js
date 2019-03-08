const Mail = require('../service/Mail');

class PurchaseMail {
  get key () {
    return 'PurchaseMail'
  }
  async handle(job, done) {
    const { ad, user, content} = job.data;
    await Mail.sendMail({
      from: '"Flavio Turibio" <flavio.turibio@zodio.com.br>',
      to: ad.author.email,
      subject: `Solicitacao de compra: ${ad.title}`,
      // template: 'purchase',
      // context: { user, content, ad: ad },
      html: `<p>Solicitacao de compra: ${content}</p>`,
    });
    return done();
  }
}

module.exports = new PurchaseMail();
