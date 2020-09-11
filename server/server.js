const express = require('express');
const cors = require('cors');
const db = require("./model");
const Role = db.role;

const app = express();
const port = process.env.port || 5000;

app.use(cors());
app.use(express.json());

db.sequelize.sync().then(() => 
{
    initial();
})

require("./routes/student.routes")(app);
require("./routes/user.routes")(app);
require("./routes/school.routes")(app);

function initial()
{
    //todo also create user admin 
    Role.create({
        id:1,
        name:"user"
    });
    Role.create({
        id:2,
        name:"admin"
    });
}
app.listen(port, () => {
    console.log('Server is running on port: ' + port);
});