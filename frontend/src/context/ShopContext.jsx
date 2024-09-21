import PropTypes from 'prop-types';
import { createContext, useState } from 'react';
import { products } from '../assets/assets';

export const ShopContext = createContext();

const ShopContextProvider = (props) => {
  const currency = '$';
  const delivery_fee = 10;
  const[search,setSearch]=useState('');
  const[showSearch,setShowSearch]=useState(false);

  const value = {
    products,
    currency,
    delivery_fee,search,setSearch,showSearch,setShowSearch
  };

  return (
    <ShopContext.Provider value={value}>
      {props.children}
    </ShopContext.Provider>
  );
};

// Define prop types for validation
ShopContextProvider.propTypes = {
  children: PropTypes.node.isRequired, // Add validation for children
};

export default ShopContextProvider;
