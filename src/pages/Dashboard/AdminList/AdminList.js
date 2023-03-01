import React, { useState, useEffect } from 'react';
import './AdminList.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashCan } from '@fortawesome/free-regular-svg-icons';
import useAuth from '../../../Hooks/useAuth';
import toast from 'react-hot-toast';
import Swal from 'sweetalert2';


const AdminList = () => {
    const [adminList, setAdminList] = useState([]);
    const { token, administer } = useAuth();





    useEffect(() => {
        const url = `https://dark-gaiters-slug.cyclic.app/admins`;
        fetch(url)
            .then((res) => res.json())
            .then((data) => setAdminList(data))
    }, []);




    const handleDelete = (email, role) => {
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
                if (administer.role === "administer") {
                    const loading = toast.loading("Please wait...", {
                        style: {
                            borderRadius: "10px",
                            background: "#333",
                            color: "#fff",
                        },
                    });
                    const user = { email };
                    fetch("https://dark-gaiters-slug.cyclic.app/admin/remove", {
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
                                'Deleted!',
                                'Admin Remove successfully.',
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
                        text: 'Only Administer Can Remove Admin!',
                    })
                }
            }
        })
    }

    return (
        <div id="admin-List">
            <h2 className="text-center">Admin List</h2>
            <div className="Admin-content">
                <table>
                    <tr>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Role</th>
                        <th className='text-center'>Remove form Admin</th>
                    </tr>

                    {
                        adminList.map((admin) => <tr>
                            <td>{admin.displayName}</td>
                            <td>{admin.email}</td>
                            <td>{admin.role}</td>
                            <td className='text-center'><span onClick={() => handleDelete(admin.email, admin.role)} className='bg-danger'><FontAwesomeIcon icon={faTrashCan} /></span></td>
                        </tr>
                        )
                    }

                </table>
            </div>
        </div>
    );
};

export default AdminList;