const TodoModel = require("../models/TodoModel");

exports.CreateTodo = async (req, res) => {
    try {
        const reqBody = req.body;
        const username = req.headers.username;
        const todoTitle = reqBody.todoTitle;
        const todoDescription = reqBody.todoDescription;
        const todoStatus = "new";
        const todoCreateDate = new Date();
        const todoUpdateDate = new Date();

        const postBody = {
            username: username,
            todoTitle: todoTitle,
            todoDescription: todoDescription,
            todoStatus: todoStatus,
            todoCreateDate: todoCreateDate,
            todoUpdateDate: todoUpdateDate
        }

        const todo = await TodoModel.create(postBody);
        res.status(201).json({
            status: "success",
            data: todo
        })

    } catch (error) {
        // console.log(error);
        res.status(500).json({
            status: "fail",
            message: "Internal Server Error"
        })
    }
}

exports.SelectTodo = async (req, res) => {
    try {
        const username = req.headers.username;
        const Query = { username: username };
        const data = await TodoModel.find(Query)
        res.status(200).json({
            status: "success",
            data: data
        })
    } catch (error) {
        res.status(500).json({
            status: "fail",
            message: "Internal Server Error"
        })
    }
}

exports.UpdateTodo = async (req, res) => {
    try {
        const reqBody = req.body;
        const todoTitle = reqBody.todoTitle;
        const todoDescription = reqBody.todoDescription;
        const todoUpdateDate = new Date();
        const _id = reqBody._id

        const Query = { _id: _id };

        const postBody = {
            todoTitle: todoTitle,
            todoDescription: todoDescription,
            todoUpdateDate: todoUpdateDate
        }

        const data = await TodoModel.findOneAndUpdate(Query, postBody, { new: true })
        res.status(200).json({
            status: "success",
            data: data
        })
    } catch (error) {
        res.status(500).json({
            status: "fail",
            message: "Internal Server Error"
        })
    }
}