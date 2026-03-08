require("dotenv/config");
const app = require("./src/app.js");
const connectToDb = require("./src/config/database.js");

const PORT = process.env.PORT || 3000;

connectToDb();

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
