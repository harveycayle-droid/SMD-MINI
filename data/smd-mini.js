const smd = require("team-bandaheali");
const db = smd.db;

async function connectDb () = {
  db.connect();
  console.log("smd-mini db connected");
