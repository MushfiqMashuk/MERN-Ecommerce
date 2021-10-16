import React from 'react'
import Nav from "./Nav";
import Announcement from './Announcement';
import Newsletter from "./Newsletter";
import Footer from './Footer';

export default function Layout({children}) {
    return (
        <div>
            <Announcement />
            <Nav/>
            {children}
            <Newsletter />
            <Footer />
        </div>
    )
}
