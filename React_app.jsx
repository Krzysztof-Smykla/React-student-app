import React, { useState } from "react";

function HttpRequest() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [studentId, setStudentId] = useState("");
  const [email, setEmail] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault(); // Prevent form submission

    // Create a new student object with field information
    const student = {
      first_name: firstName,
      last_name: lastName,
      studentid: studentId,
      email: email,
    };

    // Make a POST request to the FastAPI server
    fetch("http://127.0.0.1:8000/students", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(student),
    })
      .then((response) => {
        if (response.ok) {
          // Request was successful
          return response.json();
        } else {
          // Request failed
          throw new Error("Request failed. Status: " + response.status);
        }
      })
      .then((data) => {
        // Handle the response data
        alert("Request successful! Response: " + JSON.stringify(data));
      })
      .catch((error) => {
        // Handle any errors that occurred during the request
        alert(error.message);
      });
  };

  return (
    <div>
      <h1>HTTP Request</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label html="firstname">First Name:</label>
          <input
            type="text"
            name="firstname"
            id="firstname"
            value={firstName}
            onChange={(event) => setFirstName(event.target.value)}
          />
        </div>
        <div>
          <label html="lastname">Last Name:</label>
          <input
            type="text"
            name="lastname"
            id="lastname"
            value={lastName}
            onChange={(event) => setLastName(event.target.value)}
          />
        </div>
        <div>
          <label htmlFor="studentid">Student ID:</label>
          <input
            type="text"
            name="studentid"
            id="studentid"
            value={studentId}
            onChange={(event) => setStudentId(event.target.value)}
          />
        </div>
        <div>
          <label html="email">Email:</label>
          <input
            type="text"
            name="email"
            id="email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
          />
        </div>
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
}

export default HttpRequest;
