require('dotenv').config();
const express = require("express");
const cors = require("cors");

const app = express();

var corsOptions = {
  origin: "http://localhost:8081"
};

app.use(cors(corsOptions));

// parse requests of content-type - application/json
app.use(express.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));

const db = require("./app/models");

db.sequelize.sync()
  .then(() => {
    console.log("Synced db.");
  })
  .catch((err) => {
    console.log("Failed to sync db: " + err.message);
  });

// // drop the table if it already exists
// db.sequelize.sync({ force: true }).then(() => {
//   console.log("Drop and re-sync db.");
// });

// simple route
app.get("/", (req, res) => {
  res.json({ message: "Welcome to bezkoder application." });
});

// API Health Check
app.get('/health', (req, res) => {
  res.json({ status: "ok" });
});

// API About (Nhớ sửa lại thông tin thật của bạn nhé)
app.get('/about', (req, res) => {
  res.json({
    "Họ tên sinh viên": "Pham Duy", 
    "Mã số sinh viên": "2251220124",
    "Lớp": "22ct3",
    "App Name": process.env.APP_NAME // Lấy tên app từ file .env
  });
});

require("./app/routes/turorial.routes")(app);


const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});