const convict = require("convict");

// Define a schema
const config = convict({
  port: {
    ini: 4000
  },
  json: {
    limit: "10mb"
  },
  DB: {
    url: ""
  },
  watson: {
    apikey: "vozsek3KcmhC6X49sEzwc1dqgGvuWkisIJ2QnLfb3JIr",
    assistantId: "a04780b7-4df5-4856-a7bd-b161900c65f0",
    url: "https://gateway.watsonplatform.net/assistant/api/"
  }
});

module.exports = config;
