import React from "react";
import PreviewCollection from "../../components/PreviewCollection/PreviewCollection";
import { connect } from "react-redux";
import { selectShopCollections } from "../../redux/shop/ShopSelectors";
import { createStructuredSelector } from "reselect";

const Shop = ({ collections }) => {
  return (
    <div className="shop-page">
      {collections.map(({ id, ...otherCollectionProps }) => (
        <PreviewCollection key={id} {...otherCollectionProps} />
      ))}
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  collections: selectShopCollections,
});

export default connect(mapStateToProps)(Shop);
