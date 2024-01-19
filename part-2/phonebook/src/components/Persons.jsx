import React from "react";

const Persons = ({ filteredPersons }) => {
  return (
    <>
      {filteredPersons.map((person, index) => {
        return (
          <p key={index}>
            {person.name} {person.number}
          </p>
        );
      })}
    </>
  );
};

export default Persons;
