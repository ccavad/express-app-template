const path = require("path");
const dotenv = require("dotenv");

const envPath = path.join(__dirname, "../../.env");

dotenv.config({ path: envPath });

const config = {
  port: process.env.port,
  database_url: process.env.database_url,
};

module.exports = config;
