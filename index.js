const express = require("express");
const multer = require("multer");
const uuidv4 = require("uuid/v4");
const app = express();

app.use(multer().none());
app.use(express.static('web'));

const todoList = [];

app.get('/api/v1/list', (req, res) => {
    res.json(todoList);
});

app.post('/api/v1/add', (req,res) => {
    const todoData = req.body;
    const todoTitle = todoData.title;

    const id = uuidv4();

    const todoItem = {
        id,
        title: todoTitle,
        done: false
    };

    todoList.push(todoItem);
    console.log("Add: " + JSON.stringify(todoItem));
    res.json(todoItem);

});



app.delete('/api/v1/item/:id', (req, res) => {
    const index = todoList.findIndex((item) => item.id === req.params.id);
    if(index >= 0) {
        const deleted = todoList.splice(index, 1);
        console.log('Delete: ' + JSON.stringify(deleted[0]));
        res.sendStatus(200);
    }
});
app.put('/api/v1/item/:id', (req, res) => {
    // URLの:idと同じIDを持つ項目を検索
    const index = todoList.findIndex((item) => item.id === req.params.id);

    // 項目が見つかった場合
    if(index >= 0) {
        const item = todoList[index];
        if(req.body.done) {
            item.done = req.body.done === 'true';
        }
        console.log('Edit: ' + JSON.stringify(item));
    }
});


// node_py.js
var {PythonShell} = require('python-shell');
var pyshell = new PythonShell('./python/my_script.py');

// sends a message to the Python script via stdin
pyshell.send('Hello World!');

pyshell.on('message', function (message) {
  // received a message sent from the Python script (a simple "print" statement)
  console.log(message);
});

// end the input stream and allow the process to exit
pyshell.end(function (err,code,signal) {

  console.log('The exit code was: ' + code);
  console.log('The exit signal was: ' + signal);
  console.log('finished');
  console.log('finished');
});

app.listen(3000, () => console.log('Listening on port 3000')); 