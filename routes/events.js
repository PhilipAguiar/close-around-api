const express = require("express");
const router = express.Router();
const fs = require("fs");
const { v4: uuidv4 } = require('uuid');

getEvents = () => JSON.parse(fs.readFileSync("./data/userEvents.json", { encoding: "utf8", flag: "r" }));

saveEvents = (events) => fs.writeFileSync("./data/userEvents.json", JSON.stringify(events));

router.get("/", (req, res) => {
  const events = getEvents();
  if (events.length === 0) {
    res.status(400).send("No events");
    return;
  }
  res.status(200).json(events);
});

router.post("/", (req, res) => {
  const events = getEvents();

  events.push({
    id: uuidv4(),
    lat: req.body.lat,
    lng: req.body.lng,
    icon: req.body.icon,
    eventName: req.body.eventName,
    eventDescription: req.body.eventDescription,
    eventDate: req.body.eventDate
  });


  saveEvents(events);
  res.status(200).json(events);
});

module.exports = router;
