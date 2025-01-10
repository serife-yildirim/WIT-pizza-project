import React from "react";
import { useLocation } from "react-router-dom";

function OrderConfirm() {
  const location = useLocation();
  const {
    size = "L",
    crust = "Süpper İnce",
    toppings = [],
    total = "110.50₺",
    toppingsTotal = "25.00₺",
  } = location.state || {};

  return (
    <div className="bg-successPageBackground min-h-screen flex flex-col items-center justify-center px-4 py-8">
      {/* Header */}
      <header className="flex flex-col items-center text-center text-white mb-8 w-full max-w-xl">
        {/* Logo */}
        <img
          src="https://raw.githubusercontent.com/Workintech/fsweb-s8-challenge-pizza/8f9b6dbeba34ed8e9b45ce243e72feb9bae7be62/images/iteration-1-images/logo.svg"
          alt="Teknolojik Yemekler"
          className="w-64 h-auto mb-2"
        />

        {/* Sarı alt başlık (font Satisfy) */}
        <p className="font-[Satisfy] text-yellow-300 text-lg md:text-xl">
          lezzetin yolda
        </p>

        {/* Büyük başlık */}
        <p className="text-4xl md:text-5xl font-light mt-4 mb-4">
          SİPARİŞ ALINDI
        </p>

        {/* İnce çizgi */}
        <hr className="border-white w-full max-w-xl" />
      </header>

      {/* Main Content */}
      <main className="flex flex-col items-center text-white w-full max-w-xl">
        {/* Pizza İsmi */}
        <h2 className="text-xl md:text-2xl font-semibold mb-6">
          Position Absolute Acı Pizza
        </h2>

        {/* Sipariş Detayları */}
        <div className="flex flex-col gap-2 text-base md:text-lg mb-8 text-center">
          <p>
            Boyut: <span className="font-semibold">{size}</span>
          </p>
          <p>
            Hamur: <span className="font-semibold">{crust}</span>
          </p>
          <p>
            Ek Malzemeler:{" "}
            <span className="font-semibold">
              {toppings.length > 0 ? toppings.join(", ") : "Seçilmedi"}
            </span>
          </p>
        </div>

        {/* Fiyat Kartı */}
        <div className="border border-white rounded p-4 w-full max-w-sm mx-auto">
          <h3 className="text-lg md:text-xl font-semibold mb-3">
            Sipariş Toplamı
          </h3>
          <p className="mb-1">
            Seçimler: <span className="font-semibold ml-2">{toppingsTotal}</span>
          </p>
          <p>
            Toplam: <span className="font-semibold ml-2">{total}</span>
          </p>
        </div>
      </main>
    </div>
  );
}

export default OrderConfirm;
