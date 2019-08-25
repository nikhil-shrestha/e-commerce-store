import ShopActionTypes from './shop.types';

export const fetchCollectionsStart = () => ({
  type: ShopActionTypes.FETCH_COLLECTIONS_START
});

export const fetchCollectionsSucess = collectionsMap => ({
  type: ShopActionTypes.FETCH_COLLECTIONS_SUCESS,
  payload: collectionsMap
});

export const fetchCollectionsFailure = errorMsg => ({
  type: ShopActionTypes.FETCH_COLLECTIONS_FAILURE,
  payload: errorMsg
});

export const fetchCollectionsStartAsync = () => {
  return dispatch => {};
};
