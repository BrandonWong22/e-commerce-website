import React from "react";
import CollectionItem from "../../components/CollectionItem/CollectionItem";
import { connect } from "react-redux";
import { selectCollection } from "../../redux/shop/ShopSelectors";
import {
  CollectionsPageContainer,
  CollectionsTitle,
  CollectionsItems,
} from "./CollectionStyles";

const CollectionPage = ({ collection }) => {
  const { title, items } = collection;
  return (
    <CollectionsPageContainer>
      <CollectionsTitle>{title}</CollectionsTitle>
      <CollectionsItems>
        {items.map((item) => (
          <CollectionItem key={item.id} item={item} />
        ))}
      </CollectionsItems>
    </CollectionsPageContainer>
  );
};

const mapStateToProps = (state, ownProps) => ({
  collection: selectCollection(ownProps.match.params.collectionId)(state),
});

export default connect(mapStateToProps)(CollectionPage);
