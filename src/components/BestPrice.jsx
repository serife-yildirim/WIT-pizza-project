import React from "react";

const BestPrice = () => {
  const menuItems = [
    {
      id: 1,
      img: "https://raw.githubusercontent.com/Workintech/fsweb-s8-challenge-pizza/8f9b6dbeba34ed8e9b45ce243e72feb9bae7be62/images/iteration-2-images/icons/1.svg",
      text: "YENİ! Kore",
    },
    {
      id: 2,
      img: "https://raw.githubusercontent.com/Workintech/fsweb-s8-challenge-pizza/8f9b6dbeba34ed8e9b45ce243e72feb9bae7be62/images/iteration-2-images/icons/2.svg",
      text: "Pizza",
    },
    {
      id: 3,
      img: "https://raw.githubusercontent.com/Workintech/fsweb-s8-challenge-pizza/8f9b6dbeba34ed8e9b45ce243e72feb9bae7be62/images/iteration-2-images/icons/3.svg",
      text: "Burger",
    },
    {
      id: 4,
      img: "https://raw.githubusercontent.com/Workintech/fsweb-s8-challenge-pizza/8f9b6dbeba34ed8e9b45ce243e72feb9bae7be62/images/iteration-2-images/icons/4.svg",
      text: "Kızartmalar",
    },
    {
      id: 5,
      img: "https://raw.githubusercontent.com/Workintech/fsweb-s8-challenge-pizza/8f9b6dbeba34ed8e9b45ce243e72feb9bae7be62/images/iteration-2-images/icons/5.svg",
      text: "Fast Food",
    },
    {
      id: 6,
      img: "https://raw.githubusercontent.com/Workintech/fsweb-s8-challenge-pizza/8f9b6dbeba34ed8e9b45ce243e72feb9bae7be62/images/iteration-2-images/icons/6.svg",
      text: "Gazlı İçecekler",
    },
  ];

  const foodData = [
    {
      image:
        "https://github.com/Workintech/fsweb-s8-challenge-pizza/blob/main/images/iteration-2-images/pictures/food-1.png?raw=true",
      title: "Terminal Pizza",
      rating: 4.9,
      reviews: 200,
      price: 175,
    },
    {
      image:
        "https://github.com/Workintech/fsweb-s8-challenge-pizza/blob/main/images/iteration-2-images/pictures/food-2.png?raw=true",
      title: "Position Absolute Acı Pizza",
      rating: 4.9,
      reviews: 200,
      price: 175,
    },
    {
      image:
        "https://github.com/Workintech/fsweb-s8-challenge-pizza/blob/main/images/iteration-2-images/pictures/food-3.png?raw=true",
      title: "Useeffect Tavuklu Burger",
      rating: 4.9,
      reviews: 200,
      price: 175,
    },
  ];

  return (
    <div className="flex flex-col items-center text-center w-full px-4">
      {/* Üst başlıklar */}
      <div className="mt-12">
      <p className="font-[Satisfy] text-[#ce2829] text-lg md:text-xl">
  en çok paketlenen menüler
</p>

        <p className="text-2xl md:text-4xl font-bold mt-6">
          Acıktıran Kodlara Doyuran Lezzetler
        </p>
      </div>

      {/* Menü ikonları */}
      {/* flex-wrap => küçük ekranlarda otomatik alt satıra geçer */}
      <div className="flex flex-wrap justify-center items-center gap-4 mt-6 mb-4">
        {menuItems.map((item) => (
          <div
            key={item.id}
            className="flex items-center justify-center rounded-full p-2 bg-white cursor-pointer 
                       w-full sm:w-[190px]"
          >
            <img src={item.img} alt={item.text} className="pr-2 w-8 h-8" />
            <p className="text-sm md:text-base">{item.text}</p>
          </div>
        ))}
      </div>

      {/* Yemek kartları */}
      {/* flex-col md:flex-row => Küçük ekranlarda dikey, orta ve üstü ekranlarda yatay */}
      <div className="flex flex-col md:flex-row gap-8 mt-10 items-center justify-center">
        {foodData.map((food, index) => (
          <div
            key={index}
            className="flex flex-col p-4 bg-white rounded-3xl
                       w-full sm:w-[300px] md:w-[350px] lg:w-[400px]"
          >
            <img src={food.image} alt={food.title} className="mx-auto" />
            <p className="text-start mt-4 font-bold text-xl">{food.title}</p>
            <div className="flex justify-between mt-3">
              <p className="font-bold">{food.rating}</p>
              <p>({food.reviews})</p>
              <p className="font-bold">{food.price} TL</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BestPrice;
