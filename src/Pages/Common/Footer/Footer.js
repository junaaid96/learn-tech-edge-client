import React from 'react';
import Button from 'react-bootstrap/Button';
import { FaFacebook, FaTwitter, FaTwitch, FaInstagram, FaReddit } from 'react-icons/fa';

const Footer = () => {
    return (
        <div className='text-center bg-light p-1'>
            <div className='d-flex justify-content-center'>
                <Button variant="light"><FaFacebook /></Button>
                <Button variant="light"><FaTwitter /></Button>
                <Button variant="light"><FaTwitch /></Button>
                <Button variant="light"><FaInstagram /></Button>
                <Button variant="light"><FaReddit /></Button>
            </div>
            <p>	&copy; Copyright 2020-2022 by LearnTechEdge. All Rights Reserved.</p>
        </div>
    );
};

export default Footer;