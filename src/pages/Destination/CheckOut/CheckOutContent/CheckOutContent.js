import React, { useContext } from 'react';
import { useForm } from "react-hook-form";
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import { userContext } from '../../../../App';
import useAuth from '../../../../Hooks/useAuth';
import './CheckOutContent.css';

const CheckOutContent = ({ title }) => {

    const { register, handleSubmit, formState: { errors } } = useForm();
    const [adult, children] = useContext(userContext);
    const { user } = useAuth();
    const totalprice = adult*320 + children*250;

    const navigate = useNavigate();

    const onSubmit = data => {

        const loading = toast.loading("Please wait...", {
            style: {
                borderRadius: "10px",
                background: "#333",
                color: "#fff",
            },
        });
        const userInfo = {
            destinationName: title,
            name: data.fullName,
            phone: data.phone,
            email: user.email,
            address: data.address,
            city: data.city,
            state: data.state,
            postalCode: data.postalCode,
            comment: data.comment,
            adultPerson: adult,
            childrenPerson: children,
            price: totalprice, 
        }
        console.log(userInfo);
        const url = `https://quiet-citadel-61809.herokuapp.com/orders`;
        fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(userInfo)
        })
            .then(res => res.json())
            .then(data => {
                if (data.acknowledged) {
                    toast.dismiss(loading);
                    toast.success("Thank you for your order!", {
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
    return (
        <div id="CheckOutContent" className="my-5">
            <div className="container">
                <form className="mx-5" onSubmit={handleSubmit(onSubmit)}>
                    <div className="row">
                        <div className="border-start col-md-8 col-sm-12">
                            <h3 className="mb-5"><span>1</span> Tour Details</h3>

                            <div className="mb-3 d-flex justify-content-between">
                                <div className="w-50 px-2">
                                    <p>Full Name</p>
                                    <input placeholder="Full Name"
                                    {...register("fullName", { required: true })}
                                    value={user.displayName}
                                     />
                                    {errors.fullName && <span>This field is required</span>}
                                </div>

                                <div className="w-50 px-2">
                                    <p>Total Price</p>
                                    <input 
                                    value={totalprice}
                                    readonly
                                     />
                                </div>
                            </div>

                            <div className="mb-3 d-flex justify-content-between">
                                <div className="w-50 px-2">
                                    <p>Phone Number</p>
                                    <input type="number" min="9999999" max="1000000000000000000" placeholder="Phone Number"{...register("phone", { required: true })} />
                                    {errors.phone && <span>This field is required</span>}
                                </div>

                                <div className="w-50 px-2">
                                    <p>Email</p>
                                    <input 
                                    placeholder="Email"
                                     {...register("email", 
                                     { required: true })}
                                     value={user.email}
                                     />
                                    {errors.email && <span>This field is required</span>}
                                </div>
                            </div>
                            <textarea {...register("comment")} name="comment" placeholder="Comment" rows="5"></textarea>

                            <h3 className="mb-5"><span>2</span> Billing Information</h3>
                        </div>
                    </div>



                    <div className="row mt-5">
                        <div className="col-md-8 col-sm-12">
                            <div className="billing-information">
                                <div className="mb-3 d-flex justify-content-between">
                                    <div className="w-50 px-2">
                                        <p>Address</p>
                                        <input placeholder="Address"{...register("address", { required: true })} />
                                        {errors.address && <span>This field is required</span>}
                                    </div>

                                    <div className="w-50 px-2">
                                        <p>City</p>
                                        <input placeholder="City"{...register("city", { required: true })} />
                                        {errors.city && <span>This field is required</span>}
                                    </div>
                                </div>

                                <div className="mb-3 d-flex justify-content-between">
                                    <div className="w-50 px-2">
                                        <p>State</p>
                                        <input placeholder="State"{...register("state", { required: true })} />
                                        {errors.state && <span>This field is required</span>}
                                    </div>

                                    <div className="w-50 px-2">
                                        <p>Postal Code</p>
                                        <input
                                            placeholder="Postal Code"
                                            type="number"
                                            min="999"
                                            max="10000"
                                            {...register("postalCode", { required: true })} />
                                        {errors.postalCode && <span>This field is required</span>}
                                    </div>
                                </div>
                                <input type="submit" />
                            </div>
                        </div>
                    </div>
                </form>

            </div>
        </div>
    );
};

export default CheckOutContent;