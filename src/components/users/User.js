import React from "react";

export default function User(props) {
  const { user: {first, last, votes: {cast}, createdAt,  lastActive, subscribed, username} } = props;
  return (
    <div>
      <h3>
        {first} {last}
      </h3>
      <h4>Username: {username}</h4>
      {subscribed ? <p>Votes Cast: {cast}</p> : null}
      <p>Last Active: {new Date (lastActive).toLocaleDateString ()}</p>
      <p>Member Since: {new Date (createdAt).toLocaleDateString ()}</p>
    </div>
  );
}
// {"_id":"5cb0a0ccf37b820a6d4f30f9","preferences":{"language":"en"},"votes":{"purchased":0,"left":0,"cast":0},"admin":false,"username":"lincoln.howard","password":"$2a$10$7uKFwQ5lQz7eau00uQhn2O00zAmr5zfWqwZ/onshUQ.s1XTeIiDJq","email":"lincoln.c.howard.jr@gmail.com","first":"Lincoln","last":"Howard","createdAt":"2019-04-12T14:29:32.601Z","lastActive":"2019-04-12T14:29:32.601Z","__v":0,"profilePicture":"5cb26c1d0a0ad409869618b1","paid":false,"stripeCustomerId":"cus_FI0idHM9585NVQ","paidThrough":{"month":7,"year":2020},"subscribed":true}, {"_id":"5cb0a0ccf37b820a6d4f30f9","preferences":{"language":"en"},"votes":{"purchased":0,"left":0,"cast":0},"admin":false,"username":"lincoln.howard","password":"$2a$10$7uKFwQ5lQz7eau00uQhn2O00zAmr5zfWqwZ/onshUQ.s1XTeIiDJq","email":"lincoln.c.howard.jr@gmail.com","first":"Lincoln","last":"Howard","createdAt":"2019-04-12T14:29:32.601Z","lastActive":"2019-04-12T14:29:32.601Z","__v":0,"profilePicture":"5cb26c1d0a0ad409869618b1","paid":false,"stripeCustomerId":"cus_FI0idHM9585NVQ","paidThrough":{"month":7,"year":2020},"subscribed":true}]
