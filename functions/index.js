const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");
const stripe = require("stripe")(
  "sk_test_51KcDQQB4QGnqpaV9BCwcILYf0DfYvcBknYU2j62GIHT5uBsrq1tMlkyEUjejC4mdHKS3Tq6prYJGj2i6M4RKUiuN00UQmlcQz9"
);

// ===== API =====

// - App config
const app = express();

// - Middlewares
app.use(cors({ origin: true }));
app.use(express.json());

// - API routes
app.get("/", (request, response) => response.status(200).send("hello world"));

app.post("/payments/create", async (request, response) => {
  const total = Math.round(request.query.total);

  console.log("Payment Request Recieved for the amount of >>>", total);

  const paymentIntent = await stripe.paymentIntents.create({
    amount: total,
    currency: "gbp",
  });

  // 201 => GOOD - CREATED
  response.status(201).send({
    clientSecret: paymentIntent.client_secret,
  });
});

// - Listen command
exports.api = functions.https.onRequest(app);
