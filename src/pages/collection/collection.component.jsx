import React from "react";
import "./collection.styles.scss";
import { connect } from "react-redux";
import CollectionItem from "../../components/collection-item/collection-item.component";
import { selectCollection } from "../../redux/shop/shop.reducer";
import { createStructuredSelector } from "reselect";

const CollectionPage = ({ collection }) => {
  console.log(collection);

  return (
    <div className="collection">
      <h2>Collection Page</h2>
    </div>
  );
};

const mapStateToProps = (state, ownProps) => {
  return {
    collection: selectCollection(ownProps.match.params.collectionId)(state),
  };
};

export default connect(mapStateToProps)(CollectionPage);
