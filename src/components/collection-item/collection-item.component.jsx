import React from 'react';
import '../collection-item/collection-item.styles.scss';

const collectionitem=({id,name,imageUrl,price})=>
{
    return(
    <div className='collection-item'>
        <div className='item-img' style=
        {{backgroundImage:`url(${imageUrl})`}}
        />
        <span className='item-name'>{name}</span>
        <span className='item-price'>Price:{price}</span>
    </div>);
}

export default collectionitem;