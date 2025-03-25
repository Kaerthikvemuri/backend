const mongoose = require("mongoose");

const eventSchema = mongoose.Schema({
  event_title: { type: String, required: true },
  event_name: { type: String, required: true },
  host_name: { type: String, required: true },
  cast: { type: [String], required: true },
  description: { type: String, required: true },
  image: { type: String, required: true },
  price: { type: String, required: true },
});

const Event = mongoose.model("Event", eventSchema);

module.exports = Event;
