import React, { useEffect, useState } from 'react';
import { db } from '../firebase/firebaseConfig';
import { collection, getDocs } from 'firebase/firestore';
import ItemList from '../components/ItemList';
import SearchBar from '../components/SearchBar'; 


const ItemListContainer = () => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, 'products'));
        const items = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
        setProducts(items);
        setFilteredProducts(items);
      } catch (error) {
        console.error("Error al cargar productos: ", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  const handleSearch = (query) => {
    const lowercasedQuery = query.toLowerCase();
    const results = products.filter(product =>
      product.name.toLowerCase().includes(lowercasedQuery)
    );
    setFilteredProducts(results);
  };

  if (loading) {
    return <p>Cargando productos...</p>;
  }

  return (
    <div>
      <h2>Catálogo de Mangas</h2>
          <div className='search-bar'>
            <SearchBar onSearch={handleSearch} /> {}
          </div> 
      <ItemList products={filteredProducts} />
    </div>
  );
};

export default ItemListContainer;
