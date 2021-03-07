import React from "react";
import SHOP_DATA from "./shop.data";
import CollectionReview from '../../component/collection-review/collection-review.component';

class ShopPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            collections: SHOP_DATA
        }
    }

    render() {
        const {collections} = this.state;
        return(
            <div className = "shoppage">{
                    collections.map(({id,...otherCollectionProps}) => (
                        <CollectionReview key= {id} {...otherCollectionProps}/>)
                    )}
                </div>
        );
    }
}

export default ShopPage;