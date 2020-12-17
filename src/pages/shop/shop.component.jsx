import { render } from '@testing-library/react';
import React from 'react';
import shop_data from './shop.data';
import CollectionPreview from '../../components/preview-collection/collection-preview.component';
class ShopPage extends React.Component{
    constructor(props)
    {
        super(props);
        this.state={
            collections:shop_data
        }
    }

render(){
    const {collections}=this.state;
    return (<div className='shop-page'>
        {
        collections.map(({id,...otherprops})=>(
            <CollectionPreview key={id}{...otherprops}/>
        ))
}
        </div>);
}
}
export default ShopPage;