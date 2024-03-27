const express = require("express");
const mongoose = require("mongoose");


const app = express();
app.use(express.json())
const port = 3000;
mongoose.connect('mongodb+srv://leandropinheiro:WHGZGdJJE9aQQHxG@zappfy-api.vknf54l.mongodb.net/?retryWrites=true&w=majority&appName=zappfy-api')

const Contact = mongoose.model('Contact', {
  name: String,
  phone: String,
  image_url: String,
});

app.get("/", async (req, res) => {
  const contacts = await Contact.find()
  res.send(contacts)
})

app.post("/", async (req, res) => {
  const contact = new Contact({
    name: req.body.name,
    phone: req.body.phone,
  })

  await contact.save()
  res.send(contact)
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});