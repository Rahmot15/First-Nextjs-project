"use client";

import React from 'react';
import { SessionProvider } from "next-auth/react"

const NextAuthProcvider = ({ children }) => {
    return (

        <SessionProvider>
            {children}
        </SessionProvider>

    );
};

export default NextAuthProcvider;
