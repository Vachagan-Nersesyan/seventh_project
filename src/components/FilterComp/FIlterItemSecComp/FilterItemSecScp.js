import React from 'react';


import Form from 'react-bootstrap/Form';


import styles from './FilterItemSecStl.module.css'

const FilterSecItemComp = ({sortByDateFunc }) => {

    function getFilterCompFunc(e) {
        sortByDateFunc(e.target.value)
    }


    return (
        <div className={styles.first_item}>
            <div className={styles.first_item_label}>
                Sort:
            </div>
            <Form.Select onChange={getFilterCompFunc}  aria-label="Default select example">
                <option>Open this select menu</option>
                <option value="1">High</option>
                <option value="2">Low</option>
            </Form.Select>
        </div>
    )
}


export default FilterSecItemComp