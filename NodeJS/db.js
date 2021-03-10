const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/EmployeeDB', (err) => {
    if (!err)
        console.log('DB CONNECTED...');
    else
        console.log('Error in DB connection : ' + JSON.stringify(err, undefined, 2));
});

module.exports = mongoose;