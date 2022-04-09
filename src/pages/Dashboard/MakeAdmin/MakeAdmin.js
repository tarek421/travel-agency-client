import { Button, TextField } from "@mui/material";
import React, { useState } from "react";
import toast from "react-hot-toast";
import Swal from "sweetalert2";
import useAuth from "../../../Hooks/useAuth";
import './MakeAdmin.css';

const MakeAdmin = () => {
  const [email, setEmail] = useState("");
  const { token } = useAuth();


  const handleChange = (e) => {
    setEmail(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, Make it!'
    }).then((result) => {
      if (result.isConfirmed) {
        const loading = toast.loading("Please wait...", {
          style: {
              borderRadius: "10px",
              background: "#333",
              color: "#fff",
          },
      });
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
        toast.dismiss(loading);
        Swal.fire(
          'Maked!',
          'made admin successfully!.',
          'success'
        )
      }).finally(() => {
        
      });
      }
    })
  };
  return (
    <div id="makeAdmin">
      <h2 className="text-center mb-5">Make an Admin</h2>
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
      </form>
    </div>
  );
};

export default MakeAdmin;