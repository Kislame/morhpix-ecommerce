import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import SearchIcon from '@mui/icons-material/Search';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from 'axios';


function Products({ filters, category, sort }) {
  const [products, setProducts] = useState([]);
  const [filterdProducts, setFilterdProducts] = useState([]);

  useEffect(() => {
    const getProducts = async () => {
      try {
        const res = await axios.get(
          category
            ? `https://fakestoreapi.com/products/category/${category}'s clothing`
            : "https://fakestoreapi.com/products/category/women's clothing"
        );
        setProducts(res.data);
      } catch (err) {}
    };
    getProducts();
  }, [category]);
  useEffect(() => {
    category &&
      setFilterdProducts(
        products.filter((item) =>
          Object.entries(filters).every(([key, value]) =>
            item[key].includes(value)
          )
        )
      );
  }, [category, filters, products]);

  useEffect(() => {
    if (sort === 'newest') {
      setFilterdProducts((prev) =>
        [...prev].sort((a, b) => a.createdAt - b.createdAt)
      );
    } else if (sort === 'asc') {
      setFilterdProducts((prev) => [...prev].sort((a, b) => a.price - b.price));
    } else {
      setFilterdProducts((prev) => [...prev].sort((a, b) => b.price - a.price));
    }
  }, [sort]);

  return (
    <section className="mt-20">
      <h2 className="text-5xl text-center  font-bold font-playfair text-brand-dark mb-16">
        {category}
      </h2>
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-wrap gap-10 justify-center">
          {category
            ? filterdProducts.map((item) => (
                <Productitem
                  img={item.image}
                  key={item.id}
                  title={item.title}
                  id={item.id}
                />
              ))
            : products.map((item) => (
                <Productitem
                  img={item.image}
                  key={item.id}
                  title={item.title}
                  id={item.id}
                  price={item.price}
                />
              ))}
        </div>
      </div>
    </section>
  );
}

function Productitem({ img, title, id, price }) {
  return (
    <Link to={id.toString()}>
      <div className="card max-w-[320px] bg-base-100 shadow-xl">
        <figure>
          <img src={img} alt="Shoes" />
        </figure>
        <div className="card-body ">
          <h2 className="card-title text-base">{title}</h2>
          <span className="text-xl font-semibold ">{price}$</span>
          <div className="absolute bg-brand-light/50 top-0 left-0 w-full h-full flex items-center justify-center  opacity-0 hover:opacity-100">
            <button
              type="button"
              className="bg-white   rounded-full flex items-center justify-center h-10 w-10 m-4 hover:scale-110 transition-all duration-200 ease-out"
            >
              <FavoriteBorderIcon />
            </button>
            <button
              type="button"
              className="bg-white rounded-full flex items-center justify-center h-10 w-10 hover:scale-110 transition-all duration-200 ease-out"
            >
              <AddShoppingCartIcon />
            </button>
          </div>
        </div>
      </div>
    </Link>
  );
}

export default Products;

/*
      <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center  opacity-0 hover:opacity-100">
        <button
          type="button"
          className="bg-white   rounded-full flex items-center justify-center h-10 w-10 m-4 hover:scale-110 transition-all duration-200 ease-out"
        >
          <FavoriteBorderIcon />
        </button>
        <button
          type="button"
          className="bg-white rounded-full flex items-center justify-center h-10 w-10 hover:scale-110 transition-all duration-200 ease-out"
        >
          <AddShoppingCartIcon />
        </button>
      </div>
*/
