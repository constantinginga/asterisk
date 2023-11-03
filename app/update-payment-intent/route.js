require("dotenv").config();
const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);

exports.handler = async (event) => {
    try {
        const { amount, id, shipping: {name, address: {city, postal_code}, carrier, phone} } = JSON.parse(event.body);
        const paymentIntent = await stripe.paymentIntents.update(id, {
            amount,
            shipping: {
                name,
                address: {
                    city,
                    postal_code,
                },
                carrier,
                phone
            }
        });

        return {
            statusCode: 200,
            body: JSON.stringify({paymentIntent})
        }
    } catch (error) {
        console.log({error});
        
        return {
            statusCode: 500,
            body: JSON.stringify({error: error.message})
        }
    }
}