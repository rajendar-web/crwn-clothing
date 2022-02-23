import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { selectCollectionsForPreview } from "../../redux/shop/shop.selectors";
import CollectionPreview from "../preview-collection/collection-preview.component";
import './collections-overview.styles.scss'


const CollectionsOveview =({collections})=>(
    <div className='collections-overview'>
        {collections.map(({id, ...otherCollecctionsProps})=>
        (<CollectionPreview key={id} {...otherCollecctionsProps}/>)
        )}
    </div>
)

const mapStateToProps = createStructuredSelector({
    collections:selectCollectionsForPreview
})

export default connect(mapStateToProps)(CollectionsOveview);
