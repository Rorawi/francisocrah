'use client'
import Navbar from '../../components/Navbar';
import React from 'react';
import ContactForm from "../../components/ContactForm"

const page = () => {

    return (
        <>
            <Navbar />
            <div className="relative">
                <img
                    src="/images/paintsplash.jpg"
                    alt=""
                    className="fixed right-0 opacity-20 left-0 w-full blur-md z-0"
                />

                <div className="md:py-[75px] container mx-auto px-4 text-center max-w-7xl relative z-10">
                  <ContactForm />
                </div>

            </div>
        </>
    )
}

export default page