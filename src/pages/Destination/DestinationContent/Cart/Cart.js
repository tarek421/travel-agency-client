import { Button } from '@mui/material';
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { userContext } from '../../../../App';
import './Cart.css';


const Cart = ({ title }) => {

    const [adult, setAdult, children, setChildren] = useContext(userContext);

    const total = adult * 320 + children * 250;

    return (
        <div id="cart">
            <div className='text-center bg-light'>
                <div className="header">
                    <h4>TOUR INFORMATION</h4>
                </div>
                <div className="content mt-3 p-3">
                    <div className="incrise d-flex justify-content-evenly">
                        <div className="adults">
                            <small>Adults</small>
                            <div className="mt-3">
                                <button onClick={() => { setAdult(adult - 1) }}>-</button>
                                <span>{adult}</span>
                                <button onClick={() => { setAdult(adult + 1) }}>+</button>
                            </div>
                        </div>
                        <div className="children">
                            <small>Children</small>
                            <div className="mt-3">
                                <button onClick={() => { setChildren(children - 1) }}>-</button>
                                <span>{children}</span>
                                <button onClick={() => { setChildren(children + 1) }}>+</button>
                            </div>
                        </div>
                    </div>
                    <br />
                    <hr />
                    <div className="calculation">
                        <div className="d-flex justify-content-between">
                            <p>Adults</p>
                            <p>320*{adult}</p>
                            <p>{adult * 320}</p>
                        </div>
                        <div className="d-flex justify-content-between">
                            <p>Children</p>
                            <p>250*{children}</p>
                            <p>{children * 250}</p>
                        </div>
                        <hr />
                        <div className="d-flex justify-content-between">
                            <p>Total</p>
                            <p>{total}</p>
                        </div>
                    </div>

                </div>
                <Button as={Link} to={`/checkOut/${title}`} variant="contained" color="success" className="w-100">Buy now</Button>
            </div>
        </div>
    );
};

export default Cart;