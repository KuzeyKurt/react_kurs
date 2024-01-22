import React from "react";
import { connect } from "react-redux";
import Collections from "./Collections"
import {getCollectionsThunkCreator} from "../../redux/reducers/collections-reducer"
const mapStateToProps = (state) =>{
	return{
		collElements: state.collectionsPage.collections,
	}
}

const CollectionsContainer = connect(mapStateToProps, {getCollectionsThunkCreator})(Collections);

export default CollectionsContainer;