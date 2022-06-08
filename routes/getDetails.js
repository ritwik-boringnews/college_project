const express = require("express");
const router = express.Router();
const studentSchema = require("../schema/studentSchema");
const collegeSchema = require("../schema/collegeSchema");
const counsellorSchema = require("../schema/counsellorSchema");

router.get("/student", async (req, res) => {
  try {
    const response = await studentSchema.find({});
    if (response) {
      let resList = [];
      response.forEach((e) => {
        let { name, email, specialization, contact } = e;
        resList.push({ name, email, specialization, contact });
      });
      res.json(resList);
    } else {
      res.status(500).send("student doesn't exist");
    }
  } catch (err) {
    res.status(500).send(err.message);
  }
});

router.get("/student/:email", async (req, res) => {
  try {
    const response = await studentSchema.findOne({ email: req.params.email });
    if (response) {
      let { name, email, specialization, contact } = response;
      res.json({ name, specialization, email, contact });
    } else {
      res.status(500).send("student doesn't exist");
    }
  } catch (err) {
    res.status(500).send(err.message);
  }
});
router.get("/college", async (req, res) => {
  try {
    const response = await collegeSchema.find({});
    if (response) {
      let resList = [];
      response.forEach((e) => {
        let { collegeName, location, email, specialization, contact } = e;
        resList.push({ collegeName, location, email, specialization, contact });
      });
      res.json(resList);
    } else {
      res.status(500).send("student doesn't exist");
    }
  } catch (err) {
    res.status(500).send(err.message);
  }
});
router.get("/college/:email", async (req, res) => {
  try {
    const response = await collegeSchema.findOne({ email: req.params.email });
    if (response) {
      let { collegeName, location, email, specialization, contact } = response;
      res.json({ collegeName, location, specialization, email, contact });
    } else {
      res.status(500).send("student doesn't exist");
    }
  } catch (err) {
    res.status(500).send(err.message);
  }
});
router.get("/counsellor", async (req, res) => {
  try {
    const response = await counsellorSchema.find({});
    if (response) {
      let resList = [];
      response.forEach((e) => {
        let { name, location, email, specialization, contact } = e;
        resList.push({ name, location, email, specialization, contact });
      });
      res.json(resList);
    } else {
      res.status(500).send("student doesn't exist");
    }
  } catch (err) {
    res.status(500).send(err.message);
  }
});
router.get("/counsellor/:email", async (req, res) => {
  try {
    const response = await counsellorSchema.findOne({
      email: req.params.email,
    });
    if (response) {
      let { name, location, email, specialization, contact } = response;
      res.json({ name, location, specialization, email, contact });
    } else {
      res.status(500).send("student doesn't exist");
    }
  } catch (err) {
    res.status(500).send(err.message);
  }
});
module.exports = router;