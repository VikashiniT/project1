const mongoose = require('mongoose')

var Employee = mongoose.model('Employee', {

    name: {
        type: String,
        required: true
    },
    dept: {
        type: String,
        required: true
    },
    join_date: {
        type: String,
    },
    salary: {
        type: String,
    },
    gender: {
        type: String,
    },
    marital_status: {
        type: String,
    },
    DOB: {
        type: String,
    },
    nationality: {
        type: String,
    }
});

module.exports = {Employee}


