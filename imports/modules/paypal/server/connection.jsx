import paypal from 'paypal-rest-sdk';

let PaypalConnection = function () {
  paypal.configure({
    mode: 'sandbox',
    client_id: "AZjkfJTlFqHn83bSP7OMZ_NnxNyNLIMKuPtvkA_bWi4JJWcW-q_N8Bvr7FIUJVDfUnVssCIENezDE8sv",
    client_secret: "EMLtjau8z-xAdTQ9qy5lZmJj1TY8wpF8w6bGpJNwWsve1eg6w1C1NG1n50tkCT7zkmnoPuOqMa517rwK"
  });
  return paypal;
};

export default PaypalConnection;
