import React, { useState } from "react";
import { motion } from "framer-motion";
import firebase from "firebase/app"; // Import Firebase here

const UserPopup = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

  const handleSave = () => {
    if (firstName && lastName) {
      // Save to local storage
      localStorage.setItem("firstName", firstName);
      localStorage.setItem("lastName", lastName);

      // Save to Firebase if not already stored
      const storedNames = JSON.parse(
        localStorage.getItem("storedNames") || "[]"
      );
      if (!storedNames.includes(firstName + " " + lastName)) {
        // Save to Firebase
        firebase.firestore().collection("userNames").add({
          firstName,
          lastName,
        });

        // Update stored names
        storedNames.push(firstName + " " + lastName);
        localStorage.setItem("storedNames", JSON.stringify(storedNames));
      }

      // Close the popup
      // You need to implement the closing logic
    }
  };

  return (
    <motion.div
      className='popup'
      // Add your motion properties for animation here
    >
      <div className='popup-content'>
        <h2>Welcome to Our App!</h2>
        <p>Please enter your first and last name:</p>
        <input
          type='text'
          placeholder='First Name'
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
        />
        <input
          type='text'
          placeholder='Last Name'
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
        />
        <button onClick={handleSave}>Save</button>
      </div>
    </motion.div>
  );
};

export default UserPopup;
