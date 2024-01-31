import logo from '../logo.svg';
import '../App.css';
import Navbar from './Navbar';
import React, { useState, useEffect, useRef } from 'react';


function Layout(props) {

    const ref = useRef();
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            const entry = entries[0];

            if (entry.isIntersecting)
            {
                setScrolled(entry.isIntersecting);
                console.log(entry.isIntersecting);
            }
        })
        observer.observe(ref.current);
    }, []);

    return (
        <>
            <Navbar scrolled={scrolled} onChange = {props.onChange}></Navbar>
            <h1 id = "header">Investments Tracker</h1>
            
            <div id = "scroller" ref = {ref}>s</div>
            {/* <Footer></Footer> */}
        </>
    );
}

export default Layout;
