import style from './ExistingProductsSearch.module.css'
import {useState} from 'react'

const ExistingProductsSearch = () => {

  const [searchText, setSearchText] = useState('');


  return (
    <div>
      <input
      className={style.ExistingProductsSearchInput}
        type="text"
        placeholder="Search..."
        // onChange={handleChange}
      />
    </div>
  )
};

export default ExistingProductsSearch;
