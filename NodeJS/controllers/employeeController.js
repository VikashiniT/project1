const express = require('express');
var router = express.Router();
var ObjectId = require('mongoose').Types.ObjectId;

var { Employee } = require('../models/employee');

router.get('/', (req, res) => {
    Employee.find((err, docs) => {
        if (!err) { res.send(docs); }
        else { console.log('Error in Retriving Employees :' + JSON.stringify(err, undefined, 2)); }
    });
});

router.get('/:id', (req, res) => {
    if (!ObjectId.isValid(req.params.id))
        return res.status(400).send(`No record with given id : ${req.params.id}`);

    Employee.findById(req.params.id, (err, doc) => {
        if (!err) { res.send(doc); }
        else { console.log('Error in Retriving Employee :' + JSON.stringify(err, undefined, 2)); }
    });
});

router.post('/', (req, res) => {
    const emp = new Employee({
        ID1 : req.body.ID1,
        name : req.body.name,
        dept : req.body.dept,
        salary : req.body.salary,
        join_date : req.body.join_date,
        gender : req.body.gender,
        marital_status: req.body.marital_status,
        DOB : req.body.DOB,
        nationality : req.body.nationality
    });
    emp.save((err, doc) => {
        if (!err) { res.send(doc); }
        else { console.log('Error in Employee Save :' + JSON.stringify(err, undefined, 2)); }
    });
});

router.put('/:id', (req, res) => {
    if (!ObjectId.isValid(req.params.id))
        return res.status(400).send(`No record with given id : ${req.params.id}`);

    const emp = new Employee({
        ID1 : req.body.ID1,
        name : req.body.name,
        dept : req.body.dept,
        salary : req.body.salary,
        join_date : req.body.join_date,
        gender : req.body.gender,
        marital_status: req.body.marital_status,
        DOB : req.body.DOB,
        nationality : req.body.nationality
    });
    Employee.findOneAndUpdate({_id:req.body._id}, req.body, { new: true },  (err, doc) => {
        if (!err) { res.send(doc); }
        else { console.log('Error in Employee Update :' + JSON.stringify(err, undefined, 2)); }
    });
});

router.delete('/:id', (req, res) => {
    if (!ObjectId.isValid(req.params.id))
        return res.status(400).send(`No record with given id : ${req.params.id}`);

    Employee.findByIdAndRemove(req.params.id, (err, doc) => {
        if (!err) { res.send(doc); }
        else { console.log('Error in Employee Delete :' + JSON.stringify(err, undefined, 2)); }
    });
});
module.exports = router