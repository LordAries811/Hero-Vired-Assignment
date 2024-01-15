const asyncHandler = require('express-async-handler');
const { Program } = require("../model/program");

const getAllPrograms = asyncHandler(async (req, res) => {
    console.log("Get All Programs");
    return res.json({message:"Get All Programs"});
});

const getProgramById = asyncHandler(async (req, res) => {
    console.log("Get Program by Id");
    return res.json({message:"Get Program by Id"});
});

const createProgram = asyncHandler(async (req, res) => {
    console.log(req.body);
    return res.json({message:"Create Program"});
    const programData = req.body;
    //const createdProgram = await Program.create(programData);
    //return res.status(201).json(createdProgram);
});

const updateProgram = asyncHandler(async (req, res) => {
    console.log("Update Program");
    return res.json({message:"Update Program"});
});

const deleteProgram = asyncHandler(async (req, res) => {
    console.log("Delete Program");
    return res.json({message:"Delete Program"});
});

module.exports = {
    getAllPrograms,
    getProgramById,
    createProgram,
    updateProgram,
    deleteProgram,
};