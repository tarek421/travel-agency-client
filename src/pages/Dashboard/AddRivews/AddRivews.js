import { Button, Rating } from '@mui/material';
import React from 'react';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import useAuth from '../../../Hooks/useAuth';
import './AddRivews.css';

const AddRivews = () => {
    const [value, setValue] = React.useState(5);
    // const [rivew, setRivew] = React.useState("");
    const { user } = useAuth();
    const navigate = useNavigate()


    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => {
        const loading = toast.loading("Please wait...", {
            style: {
                borderRadius: "10px",
                background: "#333",
                color: "#fff",
            },
        });

        const rivewData = {
            rivew: data.rivew,
            star: value,
            name: user.displayName,
            photo: user.photoURL || 'https://i.ibb.co/9838Gqy/Daco-5266879.png',
            email: user.email
        }
        fetch(`https://dark-gaiters-slug.cyclic.app/rivews`, {
            method: 'POST',
            headers: { "content-type": "application/json" },
            body: JSON.stringify(rivewData)
        })
            .then(res => res.json())
            .then(data => {
                if (data.acknowledged) {
                    toast.dismiss(loading);
                    toast.success("Successfully Added your Rivew", {
                        style: {
                            borderRadius: "10px",
                            background: "#333",
                            color: "#fff",
                        },
                    });
                    navigate('/dashboard/myOrder');
                }
            })
    };

    return (
        <div id="rivews" className="text-center">
            <div className="container">
                <div className="rivew-content">
                    <h2>Please Give Your Feedback</h2>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <textarea type="text" placeholder="Message"{...register("rivew", { required: true })} ></textarea>
                        {errors.rivew && <span>This field is required</span>}
                        <br />
                        <Rating
                            name="simple-controlled"
                            value={value}
                            onChange={(event, newValue) => {
                                setValue(newValue);
                            }}
                        />
                        <br />
                        <Button
                            variant="submit"
                            sx={{
                                backgroundColor: "tomato",
                                float: "right"
                            }}
                            type="submit"
                        >Submit</Button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default AddRivews;