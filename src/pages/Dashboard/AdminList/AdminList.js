import React, { useState, useEffect } from 'react';
import './AdminList.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashCan } from '@fortawesome/free-regular-svg-icons';
import toast from 'react-hot-toast';
import Swal from 'sweetalert2';
import useAuth from '../../../Hooks/useAuth';


const AdminList = () => {
    const [adminList, setAdminList] = useState([]);
    console.log(adminList);
    const { token, admin } = useAuth();
    useEffect(() => {
        const url = `https://easy-pear-moth-fez.cyclic.app/users`;
        fetch(url)
            .then((res) => res.json())
            .then((data) => setAdminList(data))
    }, []);




    const handleDelete = (id) => {
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
                    fetch(`https://easy-pear-moth-fez.cyclic.app/users/${id}`, {
                        method: "DELETE",
                        headers: {
                            "content-type": "application/json",
                            "authorization": `Bearer ${token}`,
                        },
                    })
                        .then((res) => res.json())
                        .then((data) => {
                            console.log(data);
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
            <h2 className="text-center">Users List</h2>
            <div className="Admin-content">
                <table>
                    <tr>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Role</th>
                        <th className='text-center'>Remove User</th>
                    </tr>

                    {
                        adminList.map((admin) => <tr key={admin.id}>
                            <td>{admin.name}</td>
                            <td>{admin.email}</td>
                            <td>{admin.role}</td>
                            <td className='text-center'><span onClick={() => handleDelete(admin.id)} className='bg-danger'><FontAwesomeIcon icon={faTrashCan} /></span></td>
                        </tr>
                        )
                    }
                </table>
            </div>
        </div>
    );
};

export default AdminList;