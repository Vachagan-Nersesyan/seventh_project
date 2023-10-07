import React from 'react';


import styles from './AddItemStl.module.css'


import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import { FaCalendarDays } from "react-icons/fa6";

import NavDropdown from 'react-bootstrap/NavDropdown';

const ArrItemComp = ({ }) => {
    return (
        <InputGroup className='mb-5'>
            <Form.Control
                placeholder="Recipient's username"
                aria-label="Recipient's username with two button addons"
            />
            <Button>
                <NavDropdown title={<FaCalendarDays />} id="basic-nav-dropdown">
                    <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                </NavDropdown>
            </Button>

            <Button variant="outline-secondary">ADD</Button>
        </InputGroup>
    )
}


export default ArrItemComp