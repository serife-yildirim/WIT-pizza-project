// Favorites.jsx
import React from "react";
import { Link } from "react-router-dom"; // Link'i ekliyoruz

const Favorites = () => {
  return (
    // EKRAN DARALINCA flex-col, EKRAN GENİŞLEYİNCE flex-row olacak şekilde ayar
    <div className="flex flex-col lg:flex-row justify-center pt-5 gap-3">
      {/* PİZZA KISMI */}
      <div className="bg-pizza-image bg-cover h-[29rem] w-full lg:w-[35rem] rounded-xl">
        <h3 className="text-white text-6xl sm:text-4xl md:text-5xl lg:text-6xl pl-9 pt-5 w-5 font-sans">
          Özel Lezzetus
        </h3>
        <p className="text-white pl-10 pt-4">Position: Abolute Acı Pizza</p>
        
        {/* Butonu Link ile sarıyoruz */}
        <Link to="/order">
          <button className=" bg-white text-[#CE2829] m-8 p-3 rounded-full text-xs font-bold ">
            SİPARİŞ VER
          </button>
        </Link>
      </div>

      {/* BURGER ve KURYE KISMI */}
      <div className="flex flex-col gap-[1rem]">
        
        {/* BURGER */}
        <div className="bg-burger-image bg-cover h-[14rem] w-full lg:w-[35rem] rounded-xl">
          <h3 className="text-white mt-8 ml-8 font-sans text-3xl sm:text-2xl md:text-3xl w-[210px]">
            Hackathlon Burger Menü
          </h3>
          {/* Butonu Link ile sarıyoruz */}
          <Link to="/order">
            <button className="bg-white text-[#CE2829] m-7 p-3 rounded-full text-xs font-bold">
              SİPARİŞ VER
            </button>
          </Link>
        </div>

        {/* KURYE */}
        <div className="bg-delivery-image bg-cover h-[14rem] w-full lg:w-[35rem] rounded-xl">
          <h3 className="text-black ml-8 mt-8 w-[220px] text-3xl sm:text-2xl md:text-3xl font-sans">
            <span className="text-[#CE2829]">Çoooook</span> hızlı 
            <span className="text-5xl">🏎️</span> kurye
          </h3>
          {/* Butonu Link ile sarıyoruz */}
          <Link to="/order">
            <button className="bg-white text-[#CE2829] m-7 p-3 rounded-full text-xs font-bold">
              SİPARİŞ VER
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Favorites;
