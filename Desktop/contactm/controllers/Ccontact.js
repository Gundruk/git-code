const asyncHandler = require("express-async-handler");
const contact = require("../models/contactmodel");


//@desp get all contacts
//@route GET /api/contacts
//a@acesss public
const getContacts = asyncHandler(async(req, res) => {
    const contacts = await contact.find();
    res.status(200).json(contact);
});

//@desp create all contacts
//@route POST /api/contacts
//a@acesss public
const createContact = asyncHandler(async(req, res) => {
    console.log("the  request body is :", req.body);
    const { name, email, phone } = req.body;
    if (!name || !email || !phone) {

        res.status(400);
        throw new Error("fulfill me human");

    }
    const newcontact = await contact.create({

        name,
        email,
        phone,

    });
    res.status(201).json(newcontact);
});

//@desp GET all contacts
//@route GET /api/contacts/:id    //individual 
//@acesss public
const getContact = asyncHandler(async(req, res) => {

    const contact = await contact.findById(req.params.id)
    if (!contact) {
        res.status(404);
        throw new Error("contact not found");
    } {
        res.status(200).json(contact);
    }
});

//@desp  Update all contacts
//@route PUT /api/contacts/:id   
//@acesss public
const updateContact = asyncHandler(async(req, res) => {

    const contact = await contact.findById(req.params.id)
    if (!contact) {
        res.status(404);
        throw new Error("contact not found");
    } else {
        res.status(200).json(contact);
    }
    const updatedcontact = await contact.findByIdAndUpdate(
        req.params.id,
        req.body, { new: true }
    )
    res.status(200).json(updatedcontact);
});

//@desp  delete all contacts
//@route delete /api/contacts/:id   
//@acesss public
const deleteContact = asyncHandler(async(req, res) => {

    const contact = await contact.findById(req.params.id)
    if (!contact) {
        res.status(404);
        throw new Error("contact not found");
    }
    await contact.remove();

    res.status(200).json({ message: `delete contact for ${req.params.id}` });
});






module.exports = { getContacts, createContact, getContact, updateContact, deleteContact };