const express = require('express');
const classModel = require('./Class.model');

const ClassModel = require('./Class.model')
const router = express.Router()

router.post('/enter-details', async (req, res) => {
  try {
    const { name, classes, dept, capacity, startTime, EndTime } = req.body;
    const profName = await classModel.findOne({ name })
    const Rooms = await classModel.findOne({ classes })
    const start = await classModel.findOne({ startTime })
    const End = await classModel.findOne({ EndTime })
    const Depart = await classModel.findOne({ dept })
    const Capacity = await classModel.findOne({ capacity })
    if (profName) {
      if (Depart) {
        if (start || End) {
          return res.status(400).send({ Prof: "Is Not Available" })
        }
      }
    }

    if (Rooms) {
      if (start || End) {
        return res.status(400).send("Rooms are  not availble")
      }
    }

    if (start >= 1 && End <= 2) {
      return res.status(400).send(" **** Break  **** Time ****")
    }


    let newClass = new ClassModel({
      name,
      classes,
      dept,
      capacity,
      startTime,
      EndTime
    })
    await newClass.save()
    return res.status(201).send({ newClass })

  } catch (error) {
    return res.status(500).send(error)
  }
});


router.get("/get-timetable", async (req, res) => {
  try {
    const classRoom = await classModel.find()
    res.status(200).send(classRoom)
  } catch (error) {
    res.status(400).send(error)
  }
})




module.exports = router