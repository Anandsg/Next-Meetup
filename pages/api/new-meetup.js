// POST /api/new-meetup
import { MongoClient } from "mongodb";

async function handler(req, res) {
  if (req.method === "POST") {
    const data = req.body;

    const client = await MongoClient.connect(
      "mongodb+srv://anandgadugin:e6jRc8pM32c2Z4Bz@cluster0.hqfzkan.mongodb.net/meetups?retryWrites=true&w=majority"
    );

    const db = client.db();
    const meetupCollection = db.collection("meetups");

    const results = await meetupCollection.insertOne(data);
    console.log(results);

    client.close();
    res.status(201).json({ message: "Meetup inserted!" });
  }
}

export default handler;
