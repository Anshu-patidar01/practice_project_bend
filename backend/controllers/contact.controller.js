import asyncHandler from "express-async-handler";
//@description GET all contacts
//@route Get /api/contacts
//@access publice

const getContacts = asyncHandler(async (req, res) => {
  res.status(200).json({
    message: "Get all contacts",
  });
});

//@description Create new contacts
//@route Get /api/contacts
//@access publice

const createContact = asyncHandler(async (req, res) => {
  console.log("The request body is ::", req.body);
  const { name, email, phone } = req.body;
  if (!name || !email || !phone) {
    res.status(400);
    throw new Error("All fields are mandatory");
  }
  res.status(200).json({
    message: "Create contacts",
    info: req.body,
  });
});

//@description Updatecontacts
//@route Get /api/contacts
//@access publice

const updateContact = asyncHandler(async (req, res) => {
  res.status(200).json({
    message: `update contacts for ${req.params.id}`,
  });
});

//@description Delete contacts
//@route Get /api/contacts
//@access publice

const deleteContact = asyncHandler(async (req, res) => {
  res.status(200).json({
    message: `Delete contact for ${req.params.id}`,
  });
});

//@description Delete contacts
//@route Get /api/contacts
//@access publice

const getContact = asyncHandler(async (req, res) => {
  res.status(200).json({
    message: `Contact for ${req.params.id}`,
  });
});

export { getContacts, getContact, createContact, updateContact, deleteContact };
