import React from 'react';

import { FaAngleDown } from "react-icons/fa6";

import Form from 'react-bootstrap/Form';


import styles from './FIlterItemStl.module.css'

const FilterItemComp = ({ }) => {
    return (
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
    )
}


export default FilterItemComp