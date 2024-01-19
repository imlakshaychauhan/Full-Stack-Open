import React from 'react'

const PersonForm = (props) => {
  const { newName, newPhone, setNewPhone, setNewName, persons, setPersons } = props;

  const addPerson = (e) => {
    e.preventDefault();
    if (persons.some((person) => person.name === newName)) {
      alert(`${newName} is already added to the phonebook.`);
    } else {
      const tempName = { name: newName, number: newPhone };
      setPersons(persons.concat(tempName));
    }
    setNewName("");
    setNewPhone("");
  };
  return (
    <form>
    <div>
      name:
      <input value={newName} onChange={(e) => setNewName(e.target.value)} />
    </div>
    <div>
      number:
      <input
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
  )
}

export default PersonForm