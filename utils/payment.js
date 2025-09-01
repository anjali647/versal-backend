// placeholder for integrating Razorpay/Stripe later.
exports.createCheckoutSession = async ({ plan, email }) => {
  return { sessionId: `demo_${plan}_${Date.now()}`, url: "https://pay.example/burro" };
};
