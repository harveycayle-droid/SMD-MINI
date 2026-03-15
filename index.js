const smd = require("team-bandaheali");
const connectDb = require("./data/smd-mini");
const msg = require("./lib/msg");

async function startBot() {
  await connectDb();

  const smdMini = smd.getfiles();
  await smdMini.start();

  msg();
}

startBot();
