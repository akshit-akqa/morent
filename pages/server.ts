const Paytm = require('paytm-nodejs');

app.post('/paytm/create-transaction', (req, res) => {
    const paytmParams = {
        MID: 'your-merchant-id',
        WEBSITE: 'your-website',
        CHANNEL_ID: 'WEB',
        INDUSTRY_TYPE_ID: 'Retail',
        ORDER_ID: 'unique-order-id',
        CUST_ID: 'unique-customer-id',
        TXN_AMOUNT: 'transaction-amount',
        CALLBACK_URL: 'http://your-website.com/paytm/transaction-callback',
        EMAIL: 'customer-email',
        MOBILE_NO: 'customer-mobile-number',
    };

    const paytm = new Paytm(paytmParams);

    paytm.generateTxnToken((err, response) => {
        if (err) {
            console.log(err);
        } else {
            res.send(response);
        }
    });
});