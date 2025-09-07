const express = require("express");
const cors = require("cors");
const { rootRoute } = require("./routes/index");
const bodyParser = require("body-parser");

const PORT = 3000;
const app = express();

app.use(cors());
app.use(express.json());
app.use(bodyParser.json());
 
app.use("/api/v1", rootRoute);
app.use("/api/v1", rootRoute);

app.listen(PORT, () => { console.log(`App is runnning at port ${PORT}`);
});