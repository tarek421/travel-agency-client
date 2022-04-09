import { Alert, Button, CircularProgress, TextField } from "@mui/material";
import React, { useState } from "react";
import useAuth from "../../../Hooks/useAuth";
import './MakeAdmin.css';

const MakeAdmin = () => {
  const [email, setEmail] = useState("");
  const [success, setSuccess] = useState(false);
  const { token } = useAuth();
  const [lodding, setLodding] = useState(false);


  const handleChange = (e) => {
    setEmail(e.target.value);
  };
  const handleSubmit = (e) => {
    setLodding(true)
    e.preventDefault();
    
    const user = { email };
    fetch("https://quiet-citadel-61809.herokuapp.com/users/admin", {
      method: "PUT",
      headers: {
        "content-type": "application/json",
        "authorization": `Bearer ${token}`,
      },
      body: JSON.stringify(user),
    })
      .then((res) => res.json())
      .then((data) => {
        setLodding(false);
        setSuccess(true);
      }).finally(() => {
        
      });
  };
  return (
    <div id="makeAdmin">
      <h2 className="text-center mb-5">Make an Admin</h2>
      {
        lodding && <CircularProgress />
      }
      <form onSubmit={handleSubmit}>
        <TextField
          type="email"
          label="Email"
          variant="outlined"
          onBlur={handleChange}
          required
        />
        <Button type="submit" sx={{ height: "55px" }} variant="contained">
          Make Admin
        </Button>
        {success && (
          <Alert
            sx={{
              width: "50%",
              margin: "auto",
              background: "#2d377bab",
              color: "white",
              marginTop: "5px",
            }}
            severity="success"
          >
            made admin successfully!
          </Alert>
        )}
      </form>
    </div>
  );
};

export default MakeAdmin;