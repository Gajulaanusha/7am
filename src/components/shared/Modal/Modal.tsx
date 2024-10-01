import React from 'react'
import styles from './Modal.module.css'
import { appCxt } from '@/context/appCxt'
import { useContext } from 'react'
export const Modal = () => {
  const {dispatch,state}=useContext(appCxt)
  const fnOK=()=>{
    state?.modal?.modalAction?.()
    fnCancel();
  }
  const fnCancel=()=>{
    dispatch({
      type:'MODAL',
      payload:{
        isShowModal:false,
        modalAction:()=>{}
      }
    })
  }
  return (
    <div>
    <div className={styles.modalMask}></div>
    <div className={`px-3 py-3 ${styles.modalContent}`}>
        <h5 className="mb-5">are you sure?</h5>
        <div className="text-end">
            <button className="btn btn-dark me-3" onClick={fnOK} >
                OK
            </button>
            <button className="btn btn-dark" onClick={fnCancel} >
                CANCEL
            </button>
        </div>
    </div>
</div>
  )
}
