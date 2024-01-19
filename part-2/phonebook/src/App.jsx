import { useState } from "react";
import PersonForm from "./components/PersonForm"
import Filter from "./components/Filter"
import Persons from "./components/Persons"

const App = () => {
  const [persons, setPersons] = useState([
    { name: "Arto Hellas", number: "040-123456", id: 1 },
    { name: "Ada Lovelace", number: "39-44-5323523", id: 2 },
    { name: "Dan Abramov", number: "12-43-234345", id: 3 },
    { name: "Mary Poppendieck", number: "39-23-6423122", id: 4 },
  ]);
  const [newName, setNewName] = useState("");
  const [newPhone, setNewPhone] = useState("");
  const [filter, setFilter] = useState("");
  const filteredPersons = persons.filter((person) => person.name.toLowerCase().includes(filter.toLowerCase()));

  const personFormProps = {
    newName,
    newPhone,
    setNewPhone,
    setNewName,
    filteredPersons,
    persons,
    setPersons
  };

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter filter={filter} setFilter={setFilter} />
      <h2>add a new</h2>
      <PersonForm {...personFormProps} />
      <h2>Numbers</h2>
      <Persons filteredPersons={filteredPersons} />
    </div>
  );
};

export default App;
