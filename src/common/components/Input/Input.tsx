import React from 'react'

export const Input = ({lbl,hasError,handleChange,isRequired,value,name,type,errorMsg,lblcols,inputcols,errMsgcols}:any) => {
  return (
    <div>
        <div className="row mb-3 ">
           <div className={`col-sm-${lblcols} text-end `}>
              <b>{lbl}{isRequired && <span className="text-danger">*</span>}:</b>
           </div>
           <div className={`col-sm-${inputcols}`}>
            <input type={type} name={name} onChange={handleChange} className="form-control"/>
           </div>
           <div className={`col-sm-${errMsgcols}`}>
              {errorMsg && <b className="text-danger"> {errorMsg}</b>}
           </div>
        </div>
    </div>
  )
}
