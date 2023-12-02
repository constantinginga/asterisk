require('dotenv').config();
const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);

exports.handler = async (event, context, callback) => {
  try {
    const { amount } = JSON.parse(event.body);
    const paymentIntent = await stripe.paymentIntents.create({
      amount,
      currency: 'usd',
      automatic_payment_methods: {
        enabled: true,
      },
    });

    return {
      statusCode: 200,
      body: JSON.stringify('test success'),
    }
  } catch (error) {
    console.log({ error });

    return {
      statusCode: 500,
      body: JSON.stringify('error'),
    }
  }
}

// exports.handler = async function (event, context, callback) {
//   return {
//     statusCode: 200,
//     headers: {},
//     body: 'Hello world',
//   };
// };
