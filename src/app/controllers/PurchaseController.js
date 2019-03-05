const Ad = require('../models/Ad');
const User = require('../models/Users');
const Mail = require('../service/Mail');

class PurchaseController {
  async store(req, res) {
    const { ad, content } = req.body;
    const purchaseAd = await Ad.findById(ad).populate('author');
    const user = await User.findById(req.userId);
    await Mail.sendMail({
      from: '"Flavio Turibio" <flavio.turibio@zodio.com.br>',
      to: purchaseAd.author.email,
      subject: `Solicitacao de compra: ${purchaseAd.title}`,
      // template: 'purchase',
      // context: { user, content, ad: purchaseAd },
      html: `<p>Solicitacao de compra: ${content}</p>`,
    });
    return res.send();
  }
}

module.exports = new PurchaseController();
