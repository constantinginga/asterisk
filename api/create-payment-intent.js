// require('dotenv').config();
// const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);

// exports.handler = async (request, response) => {
//   try {
//     const { amount } = JSON.parse(request.body);
//     const paymentIntent = await stripe.paymentIntents.create({
//       amount,
//       currency: 'usd',
//       automatic_payment_methods: {
//         enabled: true,
//       },
//     });

//     response.status(200).json({
//       query: request.query,
//       cookies: request.cookies,
//       body: JSON.stringify({ paymentIntent }),
//     });
//   } catch (error) {
//     console.log({ error });

//     response.status(500).json({
//       query: request.query,
//       cookies: request.cookies,
//       body: JSON.stringify({ error: error.message }),
//     });
//   }
// }

exports.handler = async function (event, context, callback) {
  return {
    statusCode: 200,
    headers: {},
    body: 'Hello world',
  };
};
