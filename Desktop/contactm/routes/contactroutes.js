 const express = require("express");
 const router = express.Router();
 const { getContacts, createContact, getContact, updateContact, deleteContact } = require("../controllers/Ccontact");

 router.route("/").get(getContacts).post(createContact);


 router.route("/:id").get(getContact).put(updateContact).put(deleteContact);



 module.exports = router;