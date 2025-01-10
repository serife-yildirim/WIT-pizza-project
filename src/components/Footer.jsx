import React from "react";

function Footer() {
  return (
    <div>
      <footer>
        {/* Ana container */}
        {/* flex-col md:flex-row => Küçük ekranlarda dikey, orta ve üstü ekranlarda yatay düzen */}
        {/* gap-8 => Elemanlar arasına boşluk ekler */}
        {/* px-4 md:px-40 => Küçük ekranlarda daha az padding, büyük ekranlarda daha fazla */}
        {/* py-10 => Dikeyde boşluk (üst-alt padding) */}
        <div className="flex flex-col md:flex-row bg-[#292929] justify-around px-4 md:px-40 py-10 md:items-center gap-8">
          
          {/* Sol blok: Logo ve adres bilgileri */}
          {/* w-full md:w-auto => Küçük ekranlarda %100 genişlik, büyük ekranlarda otomatik */}
          {/* mb-8 md:mb-0 => Küçük ekranlarda alta boşluk, büyük ekranda sıfırlanır */}
          <div className="flex flex-col text-white justify-center md:items-start items-center gap-10 w-full md:w-auto mb-8 md:mb-0">
            <img
              className="h-16 w-auto"
              src="https://raw.githubusercontent.com/Workintech/fsweb-s8-challenge-pizza/8f9b6dbeba34ed8e9b45ce243e72feb9bae7be62/images/iteration-2-images/footer/logo-footer.svg"
              alt="Teknolojik Yemekler Logo"
            />

            {/* w-full md:w-[400px] => Küçük ekranlarda tam genişlik, büyük ekranlarda sabit genişlik */}
            <address className="flex flex-col gap-7 w-full md:w-[400px]">
              <div className="flex gap-3">
                <img
                  className="h-5 w-5"
                  src="https://github.com/Workintech/fsweb-s8-challenge-pizza/blob/main/images/iteration-2-images/footer/icons/icon-1.png?raw=true"
                  alt="Location Icon"
                />
                <p>341 Londonderry Road, Istanbul Turkiye</p>
              </div>
              <div className="flex gap-3">
                <img
                  className="h-5 w-5"
                  src="https://github.com/Workintech/fsweb-s8-challenge-pizza/blob/main/images/iteration-2-images/footer/icons/icon-2.png?raw=true"
                  alt="Email Icon"
                />
                <p>aciktim@teknolojikyemekler.com</p>
              </div>
              <div className="flex gap-3">
                <img
                  className="h-5 w-5"
                  src="https://github.com/Workintech/fsweb-s8-challenge-pizza/blob/main/images/iteration-2-images/footer/icons/icon-3.png?raw=true"
                  alt="Phone Icon"
                />
                <p>+90 216 123 45 67</p>
              </div>
            </address>
          </div>
          
          {/* Orta blok: Menüler */}
          {/* w-full md:w-1/4 => Küçük ekranlarda tam genişlik, büyükte 1/4 */}
          <div className="text-white w-full md:w-1/4">
            <h5 className="font-bold">Sıcacık Menüler</h5>
            <p className="font-thin mt-7">Terminal Pizza</p>
            <p className="font-thin">5 Kişilik Hackathlon Pizza</p>
            <p className="font-thin">useEffect Tavuklu Pizza</p>
            <p className="font-thin">Beyaz Console Frosty</p>
            <p className="font-thin">Testler Geçtı Mutlu Burger</p>
            <p className="font-thin">Position Absolute Acı Pizza</p>
          </div>
          
          {/* Sağ blok: Instagram görselleri */}
          {/* justify-center md:justify-start => Küçük ekranlarda ortaya hizala, büyükte sola */}
          <div className="flex flex-col gap-4 items-center md:items-start w-full md:w-auto">
            <h1 className="text-white">INSTAGRAM</h1>
            
            <div className="flex gap-2">
              <img
                className="w-20 h-20 object-cover"
                src="https://github.com/Workintech/fsweb-s8-challenge-pizza/blob/main/images/iteration-2-images/footer/insta/li-0.png?raw=true"
                alt=""
              />
              <img
                className="w-20 h-20 object-cover"
                src="https://github.com/Workintech/fsweb-s8-challenge-pizza/blob/main/images/iteration-2-images/footer/insta/li-1.png?raw=true"
                alt=""
              />
              <img
                className="w-20 h-20 object-cover"
                src="https://github.com/Workintech/fsweb-s8-challenge-pizza/blob/main/images/iteration-2-images/footer/insta/li-2.png?raw=true"
                alt=""
              />
            </div>
            <div className="flex gap-2">
              <img
                className="w-20 h-20 object-cover"
                src="https://github.com/Workintech/fsweb-s8-challenge-pizza/blob/main/images/iteration-2-images/footer/insta/li-3.png?raw=true"
                alt=""
              />
              <img
                className="w-20 h-20 object-cover"
                src="https://github.com/Workintech/fsweb-s8-challenge-pizza/blob/main/images/iteration-2-images/footer/insta/li-4.png?raw=true"
                alt=""
              />
              <img
                className="w-20 h-20 object-cover"
                src="https://github.com/Workintech/fsweb-s8-challenge-pizza/blob/main/images/iteration-2-images/footer/insta/li-5.png?raw=true"
                alt=""
              />
            </div>
          </div>
        </div>

        {/* Alt kısım: Telif vb. */}
        {/* items-center => hem yatayda hem dikeyde ortalama */}
        {/* py-4 => Üst-alt boşluk */}
        <div className="flex flex-col items-center bg-slate-800 py-4">
          {/* width full line */}
          <hr className="w-full border-t border-white mb-2" />
          <p className="text-white">2023 Teknolojik Yemekler</p>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
