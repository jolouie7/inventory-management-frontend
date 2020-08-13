import React, {useEffect, useState} from 'react'
import CategoryItem from '../components/CategoryItem';

const CategoryList = () => {
  const [categories, setCategories] = useState([])

  useEffect(() => {
    async function fetchMyAPI() {
      let response = await fetch(
        "http://127.0.0.1:8000/inventory/category-list/"
      );
      response = await response.json();
      setCategories(response);
    }

    fetchMyAPI();
  }, []);

  return (
    <div>
      {categories.map(cat => <CategoryItem name={cat.name} />)}
    </div>
  )
}

export default CategoryList
