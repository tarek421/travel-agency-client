import { faEnvelope, faLocationPin, faPhone } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { useForm } from "react-hook-form";
import './ContactContent.css';

const ContactContent = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => console.log(data);
    return (
        <div id="contact-content">
            <div className="container">
                <h1>SEND US A MESSAGE</h1>
                <p>Morbi eget lectus in lorem sagittis dictum. Mauris vitae ultricies urna.</p>
                <div className="row mt-5">
                    <div className="col-md-4 col-sm-12">
                        <FontAwesomeIcon icon={faPhone} />
                        <p>+61(1)234 56789</p>
                    </div>

                    <div className="col-md-4 col-sm-12">
                        <FontAwesomeIcon icon={faLocationPin} />
                        <p><span>Cecilia Chapman</span>, 711-2880</p>
                        <p>Mankato Mississippi.</p>
                    </div>

                    <div className="col-md-4 col-sm-12">
                        <FontAwesomeIcon icon={faEnvelope} />
                        <p>contact@zonetour.com</p>
                    </div>
                </div>

                <form onSubmit={handleSubmit(onSubmit)} className="mt-5">
                    <div className="row">
                        <div className="name col-6">
                            <input type="text" placeholder="name"{...register("name", { required: true })} />
                            {errors.exampleRequired && <span>This field is required</span>}
                        </div>
                        <div className="email col-6">
                            <input type="text" placeholder="email"{...register("email", { required: true })} />
                            {errors.exampleRequired && <span>This field is required</span>}
                        </div>
                    </div>
                    <div className="message row">
                        <div className="col-12">
                            <textarea placeholder="message"{...register("message", { required: true })} />
                            {errors.exampleRequired && <span>This field is required</span>}
                        </div>
                    </div>
                    <input type="submit" />
                </form>
            </div>
        </div>
    );
};

export default ContactContent;