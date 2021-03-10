const mongoose = require('mongoose')

var Employee = mongoose.model('Employee', {

    ID1: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    dept: {
        type: String
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


