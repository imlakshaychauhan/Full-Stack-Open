import { useState, useEffect } from "react";
import PersonForm from "./components/PersonForm";
import Filter from "./components/Filter";
import Persons from "./components/Persons";
import { getAllContacts } from "./services/ContactService";
import AddNotification from "../src/components/AddNotification";
import ErrorNotification from "../src/components/ErrorNotification"

const App = () => {
  const [persons, setPersons] = useState([]);
  const [newName, setNewName] = useState("");
  const [newPhone, setNewPhone] = useState("");
  const [filter, setFilter] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  const filteredPersons = persons.filter((person) =>
    person.name.toLowerCase().includes(filter.toLowerCase())
  );

  useEffect(() => {
    getAllContacts()
      .then((res) => setPersons(res.data))
      .catch((err) => alert(err));
  }, []);

  const personFormProps = {
    newName,
    newPhone,
    setNewPhone,
    setNewName,
    filteredPersons,
    persons,
    setPersons,
    setMessage,
    setError
  };

  return (
    <div>
      <h2>Phonebook</h2>

      <AddNotification addMessage={message} />
      <ErrorNotification addError={error} />

      <Filter filter={filter} setFilter={setFilter} />
      <h2>add a new</h2>
      <PersonForm {...personFormProps} />
      <h2>Numbers</h2>
      <Persons setPersons={setPersons} filteredPersons={filteredPersons} />
    </div>
  );
};

export default App;
