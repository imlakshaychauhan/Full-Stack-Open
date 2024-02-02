import axios from "axios";
const url = "http://localhost:3001/persons";

const getAllContacts = () => {
    return axios.get(url);
}

const addContact = (newContact) => {
    return axios.post(url, newContact);
}

const updateContact = (id, contactDetails) => {
    return axios.put(url + `/${id}`, contactDetails);
}

const deleteContact = (id) => {
    return axios.delete(url + `/${id}`);
}

export {getAllContacts, addContact, deleteContact, updateContact};