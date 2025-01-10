import { useNavigate } from 'react-router-dom';

const Header = () => {
  const navigate = useNavigate();

  const handleButtonClick = () => {
    navigate('/order');
  };

  return (
    <div className="bg-hero-pattern h-[80vh] bg-cover flex justify-center pt-20 text-center ">
      <div className="max-w-xl flex flex-col text-center items-center">
        <img
          src="https://raw.githubusercontent.com/Workintech/fsweb-s8-challenge-pizza/8f9b6dbeba34ed8e9b45ce243e72feb9bae7be62/images/iteration-1-images/logo.svg"
          alt="Logo"
        />
        <p className="pt-10 text-[#FDC913] font-[Satisfy] text-xl">
          fırsatı kaçırma
        </p>
        <p className="text-white w-[400px] text-5xl leading-[60px] font-thin font-[Barlow]">
          KOD ACIKTIRIR PİZZA DOYURUR
        </p>
        <button
          className="p-3 mt-9 bg-[#FDC913] rounded-full text-black font-bold w-[170px] ease-in duration-150 hover:bg-white"
          onClick={handleButtonClick}
        >
          ACIKTIM
        </button>
      </div>
    </div>
  );
};

export default Header;
