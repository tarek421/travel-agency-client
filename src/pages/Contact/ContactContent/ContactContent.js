import { faEnvelope, faLocationPin, faPhone } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import './ContactContent.css';
import toast from 'react-hot-toast';
import Swal from 'sweetalert2';

const ContactContent = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, send it!'
          }).then((result) => {
            if (result.isConfirmed) {

                const loading = toast.loading("Please wait...", {
                    style: {
                        borderRadius: "10px",
                        background: "#333",
                        color: "#fff",
                    },
                });
        
                emailjs.sendForm('service_i4v6154', 'template_rxijsh6', form.current, 'user_Y67x4ITrAVSdzzkkghXDx')
                    .then((result) => {
                        toast.dismiss(loading);
                        Swal.fire(
                            'send!',
                            'Your Message has been send.',
                            'success'
                          )
                    }, (error) => {
                        toast.error(error.message, {
                            style: {
                                borderRadius: "10px",
                                background: "#333",
                                color: "#fff",
                            },
                        });
                    });

             
            }
          })

        
    };
    return (
        <div id="contact-content">
            <div className="container">
                <h1>SEND US A MESSAGE</h1>
                <p>Morbi eget lectus in lorem sagittis dictum. Mauris vitae ultricies urna.</p>
                <div className="row mt-5">
                    <div className="  col-lg-4 col-sm-12">
                        <FontAwesomeIcon icon={faPhone} />
                        <p>+61(1)234 56789</p>
                    </div>

                    <div className="  col-lg-4 col-sm-12">
                        <FontAwesomeIcon icon={faLocationPin} />
                        <p><span>Cecilia Chapman</span>, 711-2880</p>
                        <p>Mankato Mississippi.</p>
                    </div>

                    <div className="  col-lg-4 col-sm-12">
                        <FontAwesomeIcon icon={faEnvelope} />
                        <p>contact@zonetour.com</p>
                    </div>
                </div>

                <form ref={form} onSubmit={sendEmail} className="mt-5">
                    <div className="row">
                        <div className="name col-6">
                            <input type="text" placeholder="name" name="name" required />
                        </div>
                        <div className="email col-6">
                            <input type="text" placeholder="email" name="email" required />
                        </div>
                    </div>
                    <div className="message row">
                        <div className="col-12">
                            <textarea placeholder="message" name="message" required />
                        </div>
                    </div>
                    <input type="submit" value="Send" />
                </form>
            </div>
        </div>
    );
};

export default ContactContent;