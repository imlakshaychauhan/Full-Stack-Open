import { addContact, getAllContacts, updateContact } from "../services/ContactService";

const PersonForm = (props) => {
  const { newName, newPhone, setNewPhone, setNewName, persons, setPersons, setMessage,
    setError } =
    props;

  const addPerson = (e) => {
    e.preventDefault();
    const tempContact = { name: newName, number: newPhone };
    if (persons.some((person) => person.name === newName)) {
      const actionAdd = window.confirm(`${newName} is already added to the phonebook, replace the old number`);

      if(actionAdd) {
        const person = persons.find((person) => {
          return person.name == newName;
        })
        updateContact(person.id, tempContact)
        .then((res) => {
          return getAllContacts();
        })
        .then(res => {
          setPersons(res.data);
          setMessage(`Added ${newName}`);
          setTimeout(() => setMessage(null), 5000);
        })
        .catch(err => {
          setError(`Information of ${newName} has been already been removed from server`);
          setTimeout(() => setError(null), 5000);
        })

      }

    } else {
      addContact(tempContact).then((res) => {
        setPersons(persons.concat(res.data));
        setMessage(`Added ${newName}`);
        setTimeout(() => setMessage(null), 5000);
      });
    }
    setNewName("");
    setNewPhone("");
  };
  return (
    <form>
      <div>
        name:
        <input
          name="name"
          value={newName}
          onChange={(e) => setNewName(e.target.value)}
        />
      </div>
      <div>
        number:
        <input
          name="number"
          value={newPhone}
          onChange={(e) => setNewPhone(e.target.value)}
        />
      </div>
      <div>
        <button type="submit" onClick={addPerson}>
          add
        </button>
      </div>
    </form>
  );
};

export default PersonForm;
