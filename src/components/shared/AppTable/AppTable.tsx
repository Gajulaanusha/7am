import React from 'react'
import styles from "./AppTable.module.css"
export const AppTable = ({ths,tds,data}:any) => {
  return (
    <div className='table responsive'>
        <table className='table table-bordered'>
        <thead>
            <tr>
              {
                ths?.map((val:string,ind:number)=>{
                    return <th id={`th_ ${ind}`}>{val}</th>
                })
              }
              <th>EDIT</th>
              <th>DELETE</th>
            </tr>

        </thead>
        <tbody>
            {
           data?.map((obj:any,index:number)=>{
                return <tr id={`tr_${index}`}>
                    {
                         tds?.map((val: string, ind: number) => {
                            return <td id={`th_ ${ind}`}>{obj[val]}</td>
                        })
                    }
                    <th>
                        <button>EDIT</button>
                    </th>
                    <th>
                        <button>DELETE</button>
                    </th>
                </tr>
           
           })
        }
        </tbody>
        </table>

    </div>
  )
}
