
   
const Router = require("express");
const router = new Router();
const userController = require("../controllers/userController");
const authMiddleware = require("../middleware/authMiddleware");
const multerMiddleware = require("../middleware/multerMiddleware");

router.post("/signup", userController.registration);
router.post("/signin", userController.login);

router.get("/auth", authMiddleware, userController.check);
router.get("/all", authMiddleware, userController.getUsers);
router.put(
  "/update",
  authMiddleware,

  userController.updateUser
);
router.put("/updatepassword", authMiddleware, userController.updatePassword);

module.exports = router;