import React from "react";

interface UserCardProps {
  user: {
    firstname: string;
    lastname: string;
    age: number;
    email?: string
  };
}

const UserCard = ({ user }: UserCardProps) => {
  return(
    <div>
        <h2>{user.firstname} {user.lastname}</h2>
        <p>{user.firstname} is {user.age}</p>
        {user.email && <p>{user.firstname} email is {user.email}</p>}
    </div>
  );
};

export default UserCard;
