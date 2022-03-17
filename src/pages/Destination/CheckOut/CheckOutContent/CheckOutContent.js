import React from 'react';
import { useForm } from "react-hook-form";
import './CheckOutContent.css';


const CheckOutContent = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => console.log(data);
    return (
        <div id="CheckOutContent" className="my-5">
            <div className="container">
                <div className="row">
                    <div className="border-start col-md-8 col-sm-12">
                        <h3 className="mb-5"><span>1</span> Tour Details</h3>

                        <form className="mx-5" onSubmit={handleSubmit(onSubmit)}>
                            <div className="mb-3 d-flex justify-content-between">
                                <div className="w-50 px-2">
                                    <p>First Name</p>
                                    <input placeholder="First Name"{...register("firstName", { required: true })} />
                                    {errors.exampleRequired && <span>This field is required</span>}
                                </div>

                                <div className="w-50 px-2">
                                    <p>Last Name</p>
                                    <input placeholder="Last Name"{...register("lastName", { required: true })} />
                                    {errors.exampleRequired && <span>This field is required</span>}
                                </div>
                            </div>

                            <div className="mb-3 d-flex justify-content-between">
                                <div className="w-50 px-2">
                                    <p>Phone Number</p>
                                    <input placeholder="Phone Number"{...register("phone", { required: true })} />
                                    {errors.exampleRequired && <span>This field is required</span>}
                                </div>

                                <div className="w-50 px-2">
                                    <p>Email</p>
                                    <input placeholder="Email" {...register("email", { required: true })} />
                                    {errors.exampleRequired && <span>This field is required</span>}
                                </div>
                            </div>
                            <textarea name="message" placeholder="Message" rows="5"></textarea>


                            <input type="submit" />
                        </form>
                        <h3 className="mb-5"><span>2</span> Billing Information</h3>
                    </div>
                </div>



                <div className="row mt-5">
                    <div className="col-md-8 col-sm-12">
                        <div className="billing-information">
                            <h3 className="mb-5"><span>2</span> Billing Information</h3>

                            <form className="mx-5" onSubmit={handleSubmit(onSubmit)}>
                                <div className="mb-3 d-flex justify-content-between">
                                    <div className="w-50 px-2">
                                        <p>First Name</p>
                                        <input placeholder="First Name"{...register("firstName", { required: true })} />
                                        {errors.exampleRequired && <span>This field is required</span>}
                                    </div>

                                    <div className="w-50 px-2">
                                        <p>Last Name</p>
                                        <input placeholder="Last Name"{...register("lastName", { required: true })} />
                                        {errors.exampleRequired && <span>This field is required</span>}
                                    </div>
                                </div>

                                <div className="mb-3 d-flex justify-content-between">
                                    <div className="w-50 px-2">
                                        <p>Phone Number</p>
                                        <input placeholder="Phone Number"{...register("phone", { required: true })} />
                                        {errors.exampleRequired && <span>This field is required</span>}
                                    </div>

                                    <div className="w-50 px-2">
                                        <p>Email</p>
                                        <input placeholder="Email" {...register("email", { required: true })} />
                                        {errors.exampleRequired && <span>This field is required</span>}
                                    </div>
                                </div>
                                <input type="submit" />
                            </form>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default CheckOutContent;