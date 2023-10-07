import React, { useState } from 'react';


import styles from './FilterStl.module.css'

import InputGroup from 'react-bootstrap/InputGroup';

import { FaArrowDownWideShort ,FaArrowUpWideShort } from "react-icons/fa6";

import FilterItemComp from './FilterItemComp/FilterItemScp'
import FilterSecItemComp from './FIlterItemSecComp/FilterItemSecScp'


const FilterComp = ({ sortArrFunc, sortByDateFunc }) => {

    const [iconTp, seticonTp] = useState(false)


    function changeIconFunc(){
        seticonTp(!iconTp)
        if(iconTp === false){
            return sortByDateFunc('1')
        }else{
            return sortByDateFunc('2')

        }
    }

    return (
        <div className={styles.filter_content_container}>
            <div className={styles.filter_content}>
                <InputGroup>
                    <div className={styles.filter_content_overlay}>
                        <FilterItemComp sortArrFunc={sortArrFunc} />
                        <FilterSecItemComp sortByDateFunc={sortByDateFunc} />
                        <div className={styles.first_item} onClick={() => changeIconFunc()}>

                            {
                                !iconTp ? <FaArrowDownWideShort /> : <FaArrowUpWideShort />

                            }

                        </div>
                    </div>

                </InputGroup>
            </div>
        </div>

    )
}


export default FilterComp