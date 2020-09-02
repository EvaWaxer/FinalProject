const express = require('express');
const cors = require('cors');
const db = require("./model");

const app = express();
const port = process.env.port || 5000;

app.use(cors());
app.use(express.json());

db.sequelize.sync();

require("./routes/student.routes")(app);
require("./routes/user.routes")(app);
require("./routes/school.routes")(app);

app.listen(port, () => {
    console.log('Server is running on port: ' + port);
});