import { useState } from 'react';
import { useSelector } from 'react-redux';
import Badge from '@mui/material/Badge';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { Link } from 'react-router-dom';

function Navbar() {
  const quantity = useSelector((state) => state.entities.cart.quantity);

  const [isOpen, setIsOpen] = useState(false);
  return (
    <header className="flex  xl:pl-[8.625rem] lg:pl-[9.1rem] pl-2  items-center bg-brand-light justify-between min-h-[60px] ">
      <div className=" lg:order-1 order-2    ml-12 lg:ml-0  ">
        <img src="../src/assets/LOGO.svg" alt="logo" />
      </div>
      <nav
        className={`
            flex items-center lg:order-2 order-1 
              
            
         `}
      >
        <button
          type="button"
          className="lg:hidden  "
          onClick={() => setIsOpen(!isOpen)}
        >
          <img src="../src/assets/bars.svg" alt="menu" />
        </button>
        <ul
          className={` lg:flex gap-8  lg:bg-inherit lg:pt-0   pt-4  bg-brand md:bloc lg:z-auto z-20 fixed top-0 left-0 bottom-0 right-[20%]  lg:static
            lg:translate-x-0  transition-all duration-500 ease-out  ${
              isOpen ? 'translate-x-0' : 'translate-x-[-100%] '
            }  `}
        >
          <li className="md:pl-[90%] pl-[80%]   lg:hidden">
            <button type="button" onClick={() => setIsOpen(!isOpen)}>
              <img src="../src/assets/white-close.svg" alt="close menu" />
            </button>
          </li>
          <li
            className="
          my-10 lg:my-0 lg:py-0   text-center py-5 
          lg:hover:bg-inherit hover:bg-brand-dark transition-all duration-400 ease-out
          "
          >
            <Link
              className="
              relative
             lg:after:block
             after:hidden
              after:absolute after:w-full after:-bottom-4 after:left-0 after:scale-x-0 after:h-1 after:bg-brand after:origin-bottom-right after:transition-transform after:duration-300 after:ease-out hover:after:scale-x-100 hover:after:origin-bottom-left
              font-open font-semibold lg:text-lg text-2xl  tracking-widest lg:tracking-normal lg:text-brand  text-white"
              to="/"
            >
              Home
            </Link>
          </li>
          <li
            className="my-10 lg:my-0 lg:py-0  text-center py-5
                    lg:hover:bg-inherit hover:bg-brand-dark transition-all duration-400 ease-out
          "
          >
            <a
              className="
              font-open font-semibold lg:text-lg text-2xl tracking-widest lg:tracking-norma lg:text-brand text-white
               relative
             lg:after:block
             after:hidden
              after:absolute after:w-full after:-bottom-4 after:left-0 after:scale-x-0 after:h-1 after:bg-brand after:origin-bottom-right after:transition-transform after:duration-300 after:ease-out hover:after:scale-x-100 hover:after:origin-bottom-left
              
              "
              href="#"
            >
              Collections
            </a>
          </li>
          <li
            className="my-7 lg:my-0 lg:py-0  text-center py-5
                    lg:hover:bg-inherit hover:bg-brand-dark transition-all duration-400 ease-out
          "
          >
            <Link
              className="font-open font-semibold lg:text-lg text-2xl tracking-widest lg:tracking-norma lg:text-brand text-white
               relative
             lg:after:block
             after:hidden
              after:absolute after:w-full after:-bottom-4 after:left-0 after:scale-x-0 after:h-1 after:bg-brand after:origin-bottom-right after:transition-transform after:duration-300 after:ease-out hover:after:scale-x-100 hover:after:origin-bottom-left
              "
              to="/products"
            >
              Products
            </Link>
          </li>
        </ul>
      </nav>

      <nav className="order-last">
        <ul className="flex  gap-6 items-center">
          <li>
            <button type="button" className="hidden md:block">
              <img src="../src/assets/searchbar.svg" alt="searchbar" />
            </button>
          </li>
          <li className="hidden  lg:block">
            <button type="button">
              <img src="../src/assets/person.svg" alt="sign in" />
            </button>
          </li>

          <Link to="/cart">
            <li className="mr-4">
              <Badge color="secondary" badgeContent={quantity}>
                <ShoppingCartIcon sx={{ color: '#1E4E87' }} fontSize="large" />
              </Badge>
            </li>
          </Link>
        </ul>
      </nav>
    </header>
  );
}

export default Navbar;

/*
     <li className="my-7 md:my-0">
            <a
              className="font-open font-semibold text-lg text-brand"
              href="trendes"
            >
              Trendes
            </a>
          </li>s

        <Menu setIsOpen={setIsOpen} isOpen={isOpen} />
     s

      */
