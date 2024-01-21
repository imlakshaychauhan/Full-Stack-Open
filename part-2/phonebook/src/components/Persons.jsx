import { deleteContact, getAllContacts } from "../services/ContactService";

const Persons = ({ setPersons, filteredPersons }) => {
  const handleDelete = (person) => {
    deleteContact(person.id)
    .then((res) => {
      return getAllContacts();
    })
    .then((res) => {
      setPersons(res.data);
    })
  }
  return (
    <>
      {filteredPersons.map((person, index) => {
        return (
          <p key={index}>
            {person.name} {person.number}
           <button onClick={() => handleDelete(person)}>delete</button>
          </p>
        );
      })}
    </>
  );
};

export default Persons;
