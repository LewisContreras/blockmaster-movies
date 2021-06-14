import React from 'react'
import CardsCrud from '../components/crud/CardsCrud'
import FormCrud from '../components/crud/FormCrud'
import SearchCrud from '../components/crud/SearchCrud'

const Crud = () => {
    return (
        <div>
            <SearchCrud/>
            <CardsCrud/>
            <FormCrud/>                      
        </div>
    )
}

export default Crud
