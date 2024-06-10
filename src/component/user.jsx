import React from "react";

const User = (users) => {
  return (
    <>
      {users.map((member) => (
        <div key={member.id} className="mx-16 flex gap-24">
          <h2 className="text-2xl font-black">{member.name}</h2>
          <h2 className="text-2xl font-black">{member.lastName}</h2>
          <h2 className="text-2xl font-black">{member.position}</h2>
        </div>
      ))}
    </>
  );
};
export default User;
