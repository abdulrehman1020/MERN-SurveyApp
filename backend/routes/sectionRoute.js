const express = require("express");


const router = express.Router();
const {
  createQuestion,
  getAllQuestions,
  deleteQuestion,
  updateQuestion,
  singleQuestion,
  randomQuestions,
} = require("../controller/sectionController");
const { isAuthenticatedUser, authorizeRoles } = require("../controller/auth");

router
  .route("/create")
  .post(createQuestion, isAuthenticatedUser, authorizeRoles("admin"));
router.route("/sections").get(getAllQuestions);
router.route("/random").get(randomQuestions);
router
  .route("/sections/:id")
  .delete(deleteQuestion)
  .put(updateQuestion, isAuthenticatedUser, authorizeRoles("admin"))
  .get(singleQuestion, isAuthenticatedUser);

module.exports = router;
