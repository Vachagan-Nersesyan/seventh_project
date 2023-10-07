import React from 'react';

import { FaAngleDown } from "react-icons/fa6";

import Form from 'react-bootstrap/Form';


import styles from './FIlterItemStl.module.css'

const FilterItemComp = ({ sortArrFunc }) => {


    function getFilterCompFunc(e) {
        sortArrFunc(e.target.value)
    }

    return (
        <div className={styles.first_item}>
            <div className={styles.first_item_label}>
                Filter:
            </div>
            <Form.Select onChange={getFilterCompFunc} aria-label="Default select example">
                <option>Open this select menu</option>
                <option value="1" >Done</option>
                <option value="2">Important</option>
                <option value="3" >All</option>
            </Form.Select>
        </div>
    )
}


export default FilterItemComp