import React from 'react';


import styles from './ItemStl.module.css'


import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Form from 'react-bootstrap/Form';

import { FaPencil, FaBoxArchive } from "react-icons/fa6";


const ItemComp = ({ itemsArr }) => {

    const itemDate = itemsArr.map((val) => {
        return (
            <div key={val.id}>
                <Navbar className="bg-body-tertiary">
                    <Container>
                        <Form.Check
                            inline
                            label="1"
                            name="group1"
                        />
                        <Navbar.Brand href="#home">{val.text}</Navbar.Brand>
                        <Navbar.Toggle />
                        <Navbar.Collapse className="justify-content-end">
                            <div className={styles.item_content}>
                                <div className={styles.item_content_item_1}>
                                    <div className={styles.item_content_item_1_in_item_1}>
                                        <FaPencil />
                                    </div>
                                    <div className={styles.item_content_item_1_in_item_1}>
                                        <FaBoxArchive />
                                    </div>
                                </div>
                                <div className={styles.item_content_item_2}>
                                    {val.date}
                                </div>
                            </div>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
            </div>
        )
    })


    return (
        <div>
            {itemDate}
        </div>
    )
}


export default ItemComp