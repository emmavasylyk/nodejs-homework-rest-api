const express = require("express");

const {
  getContacts,
  getContactById,
  postContact,
  deleteContact,
  putContact,
  patchFavoriteContact,
} = require("../../controllers/contacts");

const router = express.Router();

router.get("/", getContacts).post("/", postContact);

router
  .get("/:contactId", getContactById)
  .delete("/:contactId", deleteContact)
  .put("/:contactId", putContact);

router.patch("/:contactId/favorite", patchFavoriteContact);

module.exports = router;
