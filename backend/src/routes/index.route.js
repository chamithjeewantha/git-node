const express = require("express");
const authRoutes = require("./auth.route")
const router = express.Router();

router.get("/", (req, res) => {
    res.json({
        message: "Hello world",
    });
  });

  router.use("/auth",authRoutes);

  module.exports = router;