import { Rating } from '@mui/material';
import React, { useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import Swal from 'sweetalert2';
import useAuth from '../../../Hooks/useAuth';
import './DestinationControl.css';

const DestinationControl = () => {
    const [allDestinations, setAllDestinations] = useState([]);
    const { user, token, admin } = useAuth();
    console.log(admin)

    useEffect(() => {
        fetch('https://good-puce-sparrow-veil.cyclic.app/users')
            .then(res => res.json)
            .then(data => console.log(data))
    }, [])

    const handleDeleteItem = (id) => {

        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {

                if (admin) {
                    const loading = toast.loading("Please wait...", {
                        style: {
                            borderRadius: "10px",
                            background: "#333",
                            color: "#fff",
                        },
                    });
                    fetch(`https://good-puce-sparrow-veil.cyclic.app/destinations/delete?id=${id}`, {
                        method: "DELETE",
                        headers: {
                            "content-type": "application/json",
                            "authorization": `Bearer ${token}`,
                        }
                    })
                        .then((res) => res.json())
                        .then((data) => {
                            toast.dismiss(loading);
                            Swal.fire(
                                'Deleted!',
                                'Your file has been deleted.',
                                'success'
                            )
                        })
                        .catch(error => {
                            toast.error(error.message, {
                                style: {
                                    borderRadius: "10px",
                                    background: "#333",
                                    color: "#fff",
                                },
                            });
                        })
                } else {
                    Swal.fire({
                        icon: 'error',
                        title: 'Oops...',
                        text: 'Only Admin Can Delete Item!',
                    })
                }

            }
        })


    }

    fetch('https://good-puce-sparrow-veil.cyclic.app/destinations')
        .then(res => res.json())
        .then(data => setAllDestinations(data))
    return (
        <div id='destination-control'>
            <h2>This is a destination control</h2>
            <table>
                <tr className="text-center">
                    <th style={{ width: '30%' }}>Image</th>
                    <th style={{ width: '50%' }}>Details</th>
                    <th style={{ width: '20%' }}>Action</th>
                </tr>
                {
                    allDestinations.map((destination) => <tr>
                        <td><img src={destination.image1} alt="" /></td>
                        <td>
                            <h2>{destination.title}</h2>
                            <p>{destination.duration}</p>
                            <p>{destination.opening}</p>
                            <p><Rating name="read-only" value={destination.rating} readOnly /></p>
                        </td>
                        <td><button onClick={() => handleDeleteItem(destination._id)} className="btn btn-primary">delete</button></td>
                    </tr>)
                }


            </table>
        </div>
    );
};

export default DestinationControl;