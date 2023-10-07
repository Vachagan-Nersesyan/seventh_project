import React from 'react';


import styles from './FilterStl.module.css'


import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';

import { FaArrowDownWideShort } from "react-icons/fa6";


const FilterComp = ({ }) => {
    return (
        <div className={styles.filter_content_container}>
            <div className={styles.filter_content}>
                <InputGroup>
                    <div className={styles.filter_content_overlay}>
                        <div className={styles.first_item}>
                            <div className={styles.first_item_label}>
                                Filter:
                            </div>
                            <Form.Select aria-label="Default select example">
                                <option>Open this select menu</option>
                                <option value="1">One</option>
                                <option value="2">Two</option>
                                <option value="3">Three</option>
                            </Form.Select>
                        </div>
                        <div className={styles.first_item}>
                            <div className={styles.first_item_label}>
                                Sort:
                            </div>
                            <Form.Select aria-label="Default select example">
                                <option>Open this select menu</option>
                                <option value="1">One</option>
                                <option value="2">Two</option>
                                <option value="3">Three</option>
                            </Form.Select>
                        </div>
                        <div className={styles.first_item}>
                            <FaArrowDownWideShort />
                        </div>
                    </div>

                </InputGroup>
            </div>
        </div>

    )
}


export default FilterComp