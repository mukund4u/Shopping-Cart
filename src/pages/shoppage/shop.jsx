import React from 'react';
import SHOP_DATA from './shop.data';
import CollectionPreview from '../../components/collection-preview/collection-preivew';

class Shop extends React.Component{
    constructor(){
        super();
        this.state ={
            collections : SHOP_DATA
        }
    }

    render(){
        const {collections} = this.state;
        return(
            <div className='shop-page'>
                {
                    collections.map(({id, ...otherCollectionPreview}) => (
                        <CollectionPreview key={id} {...otherCollectionPreview} />
                    ))
                }
            </div>
        )
    }
}

export default Shop;