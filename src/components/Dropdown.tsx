import Select from 'react-select'
import React from 'react';

export default function Dlist(props: any){

    return(
      <Select options={props.opt} placeholder={props.placeholder} />  
    )
}