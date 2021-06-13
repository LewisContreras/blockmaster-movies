import React from 'react'
import CardsCrud from '../components/crud/CardsCrud'
import FormCrud from '../components/crud/FormCrud'
import SearchCrud from '../components/crud/SearchCrud'

const Crud = () => {
    return (
        <div>
            <SearchCrud/>
            <FormCrud/>
            <CardsCrud/>
            {/* <iframe src="https://embed.api.video/vod/vi4WYBRq0TLtekerHex0dURh" width="100%" height="100%" frameBorder="0" scrolling="no" allowFullScreen={true}></iframe> */}
                    
        </div>
    )
}

export default Crud
