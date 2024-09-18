import React from 'react'
import styles from "./loader.module.css"
import Image from 'next/image'
export const Loader = () => {
  return (
    <div>
        <div className={styles?.Loader}></div>
        <Image src="/loader.gif" alt="loader" width={100} height={100} />
   </div>
  )
}
