const express = require("express");
const app = express();

app.use(express.json());
app.use(express.urlencoded({extended : true}));

let students = [
    {id:1, name : 'Swaraj', grade : 'A'},
    {id:2, name : 'Karan', grade : 'A+'}
];
//GET REQUESTS
app.get('/students/all', (req,res)=>{
    res.json({
        message: 'All students retrieved',
        count: students.length,
        students: students
    });
});

app.get('/students/get/:id', (req,res)=>{
    const id = parseInt(req.params.id);
    const student = students.find(s => s.id === id);

    if(student){
        res.json({
            message:'Student found',
            student:student
        });
    }else{
        res.status(404).json({message: 'Student not found'});
    }
});
//POST REQUESTS

app.post('/students/create', (req,res)=>{
    const newStudent = {
        id: students.length + 1,
        name: req.body.name,
        grade: req.body.grade
    };
    students.push(newStudent);
    res.status(201).json({
        message: "Student created",
        student: newStudent
    });
});
//PUT REQUESTS
app.put('/students/update/:id', (req,res)=>{
    const id=parseInt(req.params.id);
    const studentIndex = students.findIndex(s => s.id === id);
    if(studentIndex !== -1){
        students[studentIndex].name = req.body.name;
        students[studentIndex].grade = req.body.grade;
        res.json({
            message:'Student updated successfully',
            student: students[studentIndex]
        });
    }else{
        res.status(404).json({message : 'Student not found'});
    }
})

app.delete('/students/remove/:id', (req,res)=>{
    const id=parseInt(req.params.id);
    const studentIndex = students.findIndex(s => s.id === id);
    if(studentIndex !== -1){
        const deletedStudent = student.splice(studentIndex,1)
        res.json({
            message:'Student deleted successfully',
            student: deletedStudent[0]
        });
    }else{
        res.status(404).json({message : 'Student not found'});
    }
})

app.listen(3000, ()=>{
    console.log("SERVER RUNNING");
});