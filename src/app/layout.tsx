"use client"
//import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import 'bootstrap/dist/css/bootstrap.css';
import {Header} from "@/Header";
import {Footer} from "@/Footer";
import {Login} from "@/Login";
import {Menu} from "@/Menu";
import {useReducer} from "react";
import {reducer} from "../redux/reducer";
import {init} from "../redux/init";
import {Provider} from "../context/appCxt";
import { Loader } from "@/common/components/Loader";
import { Toaster } from "@/common/components/Toaster";
const inter = Inter({ subsets: ["latin"] });



export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [state,dispatch]=useReducer(reducer,init)
  return (
    <html lang="en">
      <body className={inter.className}>
      <Provider value={{ state, dispatch }}>
          <Header />
          {state?.isLoggedIn ? <Menu /> : <Login />}
          <Footer />
          {state?.isShowLoader && <Loader />}
          {state?.toaster?.isShowToaster && <Toaster />}
        </Provider>
        </body>
    </html>
  );
}
