const express = require("express"); // import express
const app = express(); // init app

app.use(express.json()); // parse JSON body
app.use(express.urlencoded({extended : true})); // parse form data

let students = [ // sample data
    {id:1, name : 'Swaraj', grade : 'A'},
    {id:2, name : 'Karan', grade : 'A+'}
];

// GET: all students
app.get('/students/all', (req,res)=>{
    res.json({
        message: 'All students retrieved',
        count: students.length,
        students: students
    });
});

// GET: student by id
app.get('/students/get/:id', (req,res)=>{
    const id = parseInt(req.params.id); // extract id
    const student = students.find(s => s.id === id); // find student

    if(student){
        res.json({
            message:'Student found',
            student:student
        });
    }else{
        res.status(404).json({message: 'Student not found'}); // not found
    }
});

// POST: create student
app.post('/students/create', (req,res)=>{
    const newStudent = { // build new student
        id: students.length + 1,
        name: req.body.name,
        grade: req.body.grade
    };
    students.push(newStudent); // add to list
    res.status(201).json({
        message: "Student created",
        student: newStudent
    });
});

// PUT: update student
app.put('/students/update/:id', (req,res)=>{
    const id=parseInt(req.params.id); // extract id
    const studentIndex = students.findIndex(s => s.id === id); // find index
    if(studentIndex !== -1){
        students[studentIndex].name = req.body.name; // update fields
        students[studentIndex].grade = req.body.grade;
        res.json({
            message:'Student updated successfully',
            student: students[studentIndex]
        });
    }else{
        res.status(404).json({message : 'Student not found'}); // not found
    }
});

// DELETE: remove student
app.delete('/students/remove/:id', (req,res)=>{
    const id=parseInt(req.params.id); // extract id
    const studentIndex = students.findIndex(s => s.id === id); // find index
    if(studentIndex !== -1){
        const deletedStudent = students.splice(studentIndex,1); // delete
        res.json({
            message:'Student deleted successfully',
            student: deletedStudent[0]
        });
    }else{
        res.status(404).json({message : 'Student not found'}); // not found
    }
});

app.listen(3000, ()=>{ // start server
    console.log("SERVER RUNNING");
});
