import React from 'react';
import '../collection-item/collection-item.styles.scss';

const collectionitem=({id,name,imageUrl,price})=>
{
    return(
    <div className='collection-item'>
        <div className='item-img' style=
        {{backgroundImage:`url(${imageUrl})`}}
        />
        <div className='collection-footer'>
        <span className='item-name'>{name}</span>
        <span className='item-price'>{price}</span>
        </div>
    </div>);
}

export default collectionitem;