import axios from 'axios';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import './AddDestination.css';

const AddDestinaton = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const [imageUrl, setImageUrl] = useState("");
    const [imageUrl2, setImageUrl2] = useState("");
    const [imageUrl3, setImageUrl3] = useState("");

    const navigate = useNavigate()

    const onSubmit = data => {
        const loading = toast.loading("Please wait...", {
            style: {
                borderRadius: "10px",
                background: "#333",
                color: "#fff",
            },
        });

        var i = 0, strLength = data.title.length;
        for (i; i < strLength; i++) {
            data.title = data.title.replace(" ", "_");
        }

        const destination = {
            title: data.title,
            rating: data.rating,
            duration: data.duration,
            opening: data.opening,
            description: data.description,
            image1: imageUrl,
            image2: imageUrl2,
            image3: imageUrl3,
        };
        const url = `https://dark-gaiters-slug.cyclic.app/destinations`;
        fetch(url, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(destination)
        })
            .then(res => res.json())
            .then(data => {
                if (data.acknowledged) {
                    toast.dismiss(loading);
                    toast.success("Successfully Added Destination", {
                        style: {
                            borderRadius: "10px",
                            background: "#333",
                            color: "#fff",
                        },
                    });
                    navigate('/');
                }
            })
    };

    const handleImage = (event) => {
        const loading = toast.loading("Please wait...", {
            style: {
                borderRadius: "10px",
                background: "#333",
                color: "#fff",
            },
        });
        const image = event.target.files[0];
        const imageData = new FormData();
        imageData.set("key", "c4d02e08b5d3f31e9ab0e3b728b797f2");
        imageData.append("image", image);

        axios
            .post("https://api.imgbb.com/1/upload", imageData)
            .then(function (response) {
                setImageUrl(response.data.data.display_url);
                toast.dismiss(loading);
                toast.success("Successfully Image Upload", {
                    style: {
                        borderRadius: "10px",
                        background: "#333",
                        color: "#fff",
                    },
                });
            })
            .catch(function (error) {
                console.log(error);
            });
    };

    const handleImage2 = (event) => {
        const loading = toast.loading("Please wait...", {
            style: {
                borderRadius: "10px",
                background: "#333",
                color: "#fff",
            },
        });
        const image = event.target.files[0];
        const imageData = new FormData();
        imageData.set("key", "c4d02e08b5d3f31e9ab0e3b728b797f2");
        imageData.append("image", image);

        axios
            .post("https://api.imgbb.com/1/upload", imageData)
            .then(function (response) {
                setImageUrl2(response.data.data.display_url);
                toast.dismiss(loading);
                toast.success("Successfully Image Upload", {
                    style: {
                        borderRadius: "10px",
                        background: "#333",
                        color: "#fff",
                    },
                });
            })
            .catch(function (error) {
                console.log(error);
            });
    };

    const handleImage3 = (event) => {
        const loading = toast.loading("Please wait...", {
            style: {
                borderRadius: "10px",
                background: "#333",
                color: "#fff",
            },
        });
        const image = event.target.files[0];
        const imageData = new FormData();
        imageData.set("key", "c4d02e08b5d3f31e9ab0e3b728b797f2");
        imageData.append("image", image);

        axios
            .post("https://api.imgbb.com/1/upload", imageData)
            .then(function (response) {
                setImageUrl3(response.data.data.display_url);
                toast.dismiss(loading);
                toast.success("Successfully Image Upload", {
                    style: {
                        borderRadius: "10px",
                        background: "#333",
                        color: "#fff",
                    },
                });
            })
            .catch(function (error) {
                console.log(error);
            });
    };

    return (
        <div id="add-destination">
            <h3 className="my-5 text-center"> Add Destination</h3>

            <form className="mx-5" onSubmit={handleSubmit(onSubmit)}>
                <div className="row">
                    <div className="col-md-8 col-sm-12">
                        <div className="mb-3 d-flex justify-content-between">
                            <div className="w-50 px-2">
                                <p>Title</p>
                                <input placeholder="Enter Title"
                                    {...register("title",
                                        { required: true })} />
                                {errors.title && <span>This field is required</span>}
                            </div>

                            <div className="w-50 px-2">
                                <p>Rating</p>
                                <input placeholder="Rating"
                                    type="number"
                                    min="1"
                                    max="5"
                                    {...register("rating",
                                        { required: true })} />
                                {errors.rating && <span>This field is required</span>}
                            </div>
                        </div>

                        <div className="mb-3 d-flex justify-content-between">
                            <div className="w-50 px-2">
                                <p>Duration</p>
                                <input
                                    placeholder="2 hours..."
                                    {...register("duration",
                                        { required: true })} />
                                {errors.duration && <span>This field is required</span>}
                            </div>

                            <div className="w-50 px-2">
                                <p>Opening</p>
                                <input
                                    placeholder="8am-10pm"
                                    {...register("opening",
                                        { required: true })} />
                                {errors.opening && <span>This field is required</span>}
                            </div>
                        </div>
                        <textarea name="message" placeholder="DescripTion" rows="5" {...register("description", { required: true })}></textarea>
                        {errors.description && <span>This field is required</span>}
                    </div>
                    <div className="col-lg-4 col-sm-12">

                        <div className="image-1">
                            <p>Image-1</p>
                            <input placeholder="Image-1"
                                onChange={handleImage}
                                type="file"
                                required
                            />
                        </div>
                        <div className="image-1">
                            <p>Image-2</p>
                            <input placeholder="Image-2"
                                onChange={handleImage2}
                                type="file"
                                required
                            />
                        </div>
                        <div className="image-1">
                            <p>Image-3</p>
                            <input
                                placeholder="Image-3"
                                onChange={handleImage3}
                                type="file"
                                required
                            />
                        </div>

                    </div>
                    <input className="mt-3" type="submit" />
                </div>
            </form>


        </div>
    );
};

export default AddDestinaton;