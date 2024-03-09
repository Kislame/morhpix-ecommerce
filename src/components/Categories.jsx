import uniqid from 'uniqid';
import categories from './data';

function Categories() {
  return (
    <div className="flex pt-8 flex-wrap  max-w-full   mt-14">
      {categories.map((item) => (
        <Categoryitem img={item.img} title={item.title} key={uniqid()} />
      ))}
    </div>
  );
}

export default Categories;

function Categoryitem({ img, title }) {
  return (
    <div className="lg:flex-1  flex-auto    h-[70vh] relative m-2">
      <img src={img} alt={title} className="w-full h-full object-cover " />
      <div className="absolute top-0 left-0 w-full h-full flex justify-center items-center flex-col ">
        <h2 className="text-white text-4xl  font-bold font-open mb-4">
          {title}
        </h2>
        <button
          className="py-4 px-6 font-medium bg-white font-open hover:bg-black hover:text-white transition duration-300 ease-in "
          type="button"
        >
          SHOP NOW
        </button>
      </div>
    </div>
  );
}
