import React from 'react';


import styles from './FilterStl.module.css'

import InputGroup from 'react-bootstrap/InputGroup';

import { FaArrowDownWideShort } from "react-icons/fa6";

import FilterItemComp from './FilterItemComp/FilterItemScp'
import FilterSecItemComp from './FIlterItemSecComp/FilterItemSecScp'


const FilterComp = ({ sortArrFunc, sortByDateFunc }) => {
    return (
        <div className={styles.filter_content_container}>
            <div className={styles.filter_content}>
                <InputGroup>
                    <div className={styles.filter_content_overlay}>
                        <FilterItemComp sortArrFunc={sortArrFunc} />
                        <FilterSecItemComp sortByDateFunc={sortByDateFunc} />
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