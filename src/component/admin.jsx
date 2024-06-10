import React, { useState } from "react";

const Admin = ({ addMember }) => {
  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");
  const [position, setPosition] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    const newMember = {
      name,
      lastName,
      position,
    };
    addMember(newMember);
    setName("");
    setLastName("");
    setPosition("");
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <h2 className="font-black my-4 mx-16">Create User Here</h2>
        <div className="mx-16">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            className="border-4"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />

          <label htmlFor="lastname">Lastname</label>
          <input
            type="text"
            className="border-4"
            id="lastname"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
          />

          <label htmlFor="position">Position</label>
          <input
            type="text"
            className="border-4"
            id="position"
            value={position}
            onChange={(e) => setPosition(e.target.value)}
          />

          <button
            type="submit"
            className="bg-blue-950 mx-4 text-white p-4"
          >
            Save
          </button>
        </div>
      </form>
    </>
  );
};

export default Admin;
