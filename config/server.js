module.exports = ({ env }) => ({
  host: env("HOST", "localhost"),
  port: env.int("PORT", 1337),
  // url: "http://localhost:1337",
  // webhooks: {
  //   // Add this to not receive populated relations in webhooks
  //   populateRelations: false,
  // },
  app: {
    keys: env.array("APP_KEYS"),
  },
});
