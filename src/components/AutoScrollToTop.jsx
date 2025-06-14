import { useEffect } from "react";
import { useLocation } from "react-router-dom";

import React from 'react'

const AutoScrollToTop = () => {

    const {pathname} = useLocation();

    useEffect(()=>{
        window.scrollTo({top: 0,behavior:"smooth"});
    },[pathname])

    return null
}

export default AutoScrollToTop
