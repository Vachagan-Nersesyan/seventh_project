import React, { useState } from 'react';


import styles from './AddItemStl.module.css'

import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import { FaCalendarDays } from "react-icons/fa6";

import NavDropdown from 'react-bootstrap/NavDropdown';

const ArrItemComp = ({ addingItemFunc }) => {

    const [value, onChange] = useState(new Date());

    const [str,setStr] = useState('')

    function strFunc(e){
        setStr(e.target.value)
    }


    return (
        <InputGroup className='mb-5'>
            <Form.Control
                placeholder="Recipient's username"
                aria-label="Recipient's username with two button addons"
                onChange={(e) => strFunc(e)}
            />
            <Button>
                <NavDropdown title={<FaCalendarDays />} id="basic-nav-dropdown">
                    <NavDropdown.Item href="#action/3.1">
                        <Calendar onChange={onChange} value={value} />
                    </NavDropdown.Item>
                </NavDropdown>
            </Button>

            <Button variant="outline-secondary" onClick={() => addingItemFunc(str,new Date().toLocaleDateString('en-CA'),new Date().getFullYear())}>ADD</Button>
        </InputGroup>
    )
}


export default ArrItemComp