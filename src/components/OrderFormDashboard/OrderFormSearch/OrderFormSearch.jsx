import style from './OrderFormSearch.module.css'
import {useState} from 'react'

const OrderFormSearch = () => {
    const [searchText, setSearchText] = useState('');


  return (
    <div>
      <input
      className={style.orderFormSearchInput}
        type="text"
        placeholder="Search..."
        // onChange={handleChange}
      />
    </div>
  )
};

export default OrderFormSearch;
