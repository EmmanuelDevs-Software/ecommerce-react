import React from "react";
import "./collection.styles.scss";
import { connect } from "react-redux";
import CollectionItem from "../../components/collection-item/collection-item.component";
import { selectCollection } from "../../redux/shop/shop.reducer";
import { createStructuredSelector } from "reselect";
import {
  CollectionContainer,
  ItemsContainer,
  TitleText,
} from "./collection.styles";

const CollectionPage = ({ collection }) => {
  const { title, items } = collection;

  return (
    <CollectionContainer>
      <TitleText>{title}</TitleText>
      <ItemsContainer>
        {items.map((item) => (
          <CollectionItem key={item.id} item={item} />
        ))}
      </ItemsContainer>
    </CollectionContainer>
  );
};

const mapStateToProps = (state, ownProps) => {
  return {
    collection: selectCollection(ownProps.match.params.collectionId)(state),
  };
};

export default connect(mapStateToProps)(CollectionPage);
