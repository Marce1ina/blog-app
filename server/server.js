const express = require("express");
const cors = require("cors");
const config = require("./config");
const postRoutes = require("./routes/post.routes");
const mongoose = require("mongoose");
const mongoSanitize = require("express-mongo-sanitize");
const loadTestData = require("./testData");
const helmet = require("helmet");

const app = express();

app.use(cors());
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(helmet());
app.use(mongoSanitize());

app.use("/api", postRoutes);

mongoose.connect(config.DB, { useNewUrlParser: true, useFindAndModify: false });
let db = mongoose.connection;

db.once("open", () => {
    console.log("Connected to the database");
    loadTestData();
});
db.on("error", err => console.log("Error " + err));

app.listen(config.PORT, function() {
    console.log("Server is running on Port:", config.PORT);
});
