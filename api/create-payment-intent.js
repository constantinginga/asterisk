require('dotenv').config();
const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);

exports.handler = async (request, response) => {
  try {
    const { amount } = JSON.parse(request.body);
    const paymentIntent = await stripe.paymentIntents.create({
      amount,
      currency: 'usd',
      automatic_payment_methods: {
        enabled: true,
      },
    });

    return {
      statusCode: 200,
      body: JSON.stringify({ paymentIntent }),
    }
  } catch (error) {
    console.log({ error });

    return {
      statusCode: 500,
      body: JSON.stringify({ error: error.message }),
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
