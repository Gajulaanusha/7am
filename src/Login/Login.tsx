import React,{useState} from 'react'
import {appCxt} from "@/context/appCxt";
import {useContext} from "react"
import config from "./config.json"
import {Input} from '@/common/components/Input'
import axios from 'axios'
import Ajax from '@/common/services/ajax'
import { updateStoreData } from '@/common/services/functions'
import { handleFieldLevelValidation, handleFormLevelValidation } from '@/common/services/validations'
export const Login = () => {
  const [inputControls, setInputControls] = useState(config)
    const { dispatch } = useContext(appCxt)
    const fnLogin = async () => {
        try {
            const [isInValid, data]: any = handleFormLevelValidation(inputControls, setInputControls)
            if (isInValid) return;
            updateStoreData(dispatch, 'LOADER', true)
            const res = await Ajax.post("auth/login", { data })
            if (res?.data?.length > 0) {
                updateStoreData(dispatch, 'LOGIN', true)
            } else {
                updateStoreData(dispatch, 'TOASTER', {
                   isShowToaster: true,
                   toasterMsg: 'Check ented uid or pwd',
                    color: 'red'
                })
            }
        } catch (ex) {

        } finally {
            updateStoreData(dispatch, 'LOADER', false)
        }
    }
    const handleChange = (eve: any) => {
        handleFieldLevelValidation(eve, inputControls, setInputControls)
    }


    
  return (
    <div className="container-fluid">
    <h3 className="mt-3 mb-3 text-center">Login</h3>
          {
            inputControls.map((obj)=>{
              return <Input {...obj}  handleChange={handleChange}/>
            })
          }
      <div className='row mb-3'>
                <div className='offset-sm-5 col-sm-7'>
                    <button className='btn btn-primary' onClick={fnLogin}>Login</button>
                </div>
            </div>

    </div>
  )
}
