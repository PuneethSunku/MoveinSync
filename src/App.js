import React, { useState } from "react";

function App() {
  const [passengers, setPassengers] = useState([
    { id: 1, name: "", age: "", gender: "", senior: false },
  ]);

  const addPassenger = () => {
    const newPassenger = {
      id: passengers.length + 1,
      name: "",
      age: "",
      gender: "",
      senior: false,
    };
    setPassengers([...passengers, newPassenger]);
  };

  const savePassenger = () => {
    console.log("Saved Passenger Details:", passengers);
  };

  const handleInputChange = (id, key, value) => {
    setPassengers(
      passengers.map((passenger) =>
        passenger.id === id ? { ...passenger, [key]: value } : passenger
      )
    );
  };

  return (
    <div>
      <center>
        <h2>Passenger Details</h2>
      </center>
      <table
        border="1"
        style={{
          width: "50%",
          textAlign: "center",
          marginBottom: "10px",
          margin: "0 auto",
        }}
      >
        <thead>
          <tr>
            <th>S.No</th>
            <th>Name</th>
            <th>Age</th>
            <th>Gender</th>
            <th>Senior?</th>
          </tr>
        </thead>
        <tbody>
          {passengers.map((passenger) => (
            <tr key={passenger.id}>
              <td>{passenger.id}</td>
              <td>
                <input
                  type="text"
                  placeholder="Enter name"
                  value={passenger.name}
                  onChange={(e) =>
                    handleInputChange(passenger.id, "name", e.target.value)
                  }
                />
              </td>
              <td>
                <input
                  type="number"
                  placeholder="Enter age"
                  value={passenger.age}
                  onChange={(e) =>
                    handleInputChange(passenger.id, "age", e.target.value)
                  }
                />
              </td>
              <td>
                <select
                  value={passenger.gender}
                  onChange={(e) =>
                    handleInputChange(passenger.id, "gender", e.target.value)
                  }
                >
                  <option value="">Select</option>
                  <option value="Male">Male</option>
                  <option value="Female">Female</option>
                  <option value="Other">Other</option>
                </select>
              </td>
              <td>
                <input
                  type="checkbox"
                  checked={passenger.senior}
                  onChange={(e) =>
                    handleInputChange(passenger.id, "senior", e.target.checked)
                  }
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <center>
        <button onClick={addPassenger}>Add Passenger</button>
        <button onClick={savePassenger} style={{ marginLeft: "10px" }}>
          {" "}
          Save Details
        </button>
      </center>
    </div>
  );
}

export default App;
