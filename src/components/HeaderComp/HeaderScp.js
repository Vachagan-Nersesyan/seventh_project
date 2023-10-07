import React from 'react';

import { FaAngleDown } from "react-icons/fa6";

import styles from './HeaderStl.module.css'

const HeaderComp = ({ }) => {
    return (
        <h1 className='text-center mb-5 p-5'>
            <FaAngleDown /> Example heading
        </h1>
    )
}


export default HeaderComp