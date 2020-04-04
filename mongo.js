const mongoose = require("mongoose");

if (process.argv.length < 3) {
  console.log("Give password as argument");
  process.exit(1);
}

const password = process.argv[2];

const url = `mongodb+srv://fullstack:${password}@phonebook-bqjzd.mongodb.net/phonebook-app?retryWrites=true&w=majority`;

mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true });

const personName = process.argv[3];
const personNumber = process.argv[4];

const personSchema = new mongoose.Schema({
  name: String,
  number: String,
});

const Person = mongoose.model("Person", personSchema);

if (!process.argv[3] && !process.argv[4]) {
  Person.find({}).then((persons) => {
    console.log("Phonebook: ");
    persons.map((person) => console.log(`${person.name} ${person.number}`));
    mongoose.connection.close();
  });
} else {
  const person = new Person({
    name: personName,
    number: personNumber,
  });

  person.save().then((response) => {
    console.log(`Added ${personName} number ${personNumber} to phonebook`);
    mongoose.connection.close();
  });
}
