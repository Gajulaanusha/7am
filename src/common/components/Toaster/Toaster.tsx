import React,{useContext}from 'react'
import styles from "./Toaster.module.css"
import { appCxt } from '@/context/appCxt'
import { updateStoreData } from '@/common/services/functions'
export const Toaster = () => {
    const { state, dispatch } = useContext(appCxt)
    const {toasterMsg,color}=state?.toaster
    const closeToaster=()=>{
        updateStoreData(dispatch,'TOASTER',{
            isShowToaster:false,
            toasterMsg:'',
            color:''
        })

    }
  return (
    <div className={styles?.Toaster}style={{ backgroundColor:color }} >
        {toasterMsg}
        <b onClick={closeToaster}>X</b>
    </div>
  )
}
