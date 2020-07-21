import React from "react";
import "./CollectionsOverview.scss";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import PreviewCollection from "../PreviewCollection/PreviewCollection";
import { selectShopCollections } from "../../redux/shop/ShopSelectors";

const CollectionsOverview = ({ collections }) => {
  return (
    <div className="collections-overview">
      {collections.map(({ id, ...otherCollectionProps }) => (
        <PreviewCollection key={id} {...otherCollectionProps} />
      ))}
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  collections: selectShopCollections,
});

export default connect(mapStateToProps)(CollectionsOverview);
