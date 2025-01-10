import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import {
  Button,
  InputGroup,
  InputGroupText,
  Input,
  Card,
  CardBody,
  CardTitle,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
} from "reactstrap";
import Footer from "../components/Footer";

import "../styles/OrderPage.css";

const OrderPage = () => {
  const [malzemeSecimi, setMalzemeSecimi] = useState([]);
  const [quantity, setQuantity] = useState(1);
  const [pizzaSize, setPizzaSize] = useState("");
  const [pizzaCrust, setPizzaCrust] = useState("");
  const [error, setError] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false); // Modal state'i eklendi

  const pizzaPrice = 175; // Pizza fiyatı 175 TL olarak güncellendi
  const extraPrice = 5;
  const navigate = useNavigate();

  const toggleModal = () => setIsModalOpen(!isModalOpen); // Modal aç/kapat

  const calculateTotal = () => {
    const basePrice = pizzaPrice + malzemeSecimi.length * extraPrice;
    return basePrice * quantity;
  };

  const increment = () => setQuantity((prev) => prev + 1);

  const decrement = () => setQuantity((prev) => (prev > 1 ? prev - 1 : 1));

  const handleChange = (e) => {
    const { value, checked } = e.target;
    if (checked) {
      if (malzemeSecimi.length < 10) {
        setMalzemeSecimi([...malzemeSecimi, value]);
      } else {
        alert("En fazla 10 malzeme seçebilirsiniz.");
      }
    } else {
      setMalzemeSecimi(malzemeSecimi.filter((item) => item !== value));
    }
  };

  const handleButtonClick = () => {
    if (malzemeSecimi.length < 4) {
      setError("En az 4 malzeme seçmelisiniz.");
      setIsModalOpen(true); // Hata olduğunda modal açılır
      return;
    }
    if (!pizzaSize) {
      setError("Lütfen pizza boyutunu seçin.");
      setIsModalOpen(true); // Hata olduğunda modal açılır
      return;
    }
    if (!pizzaCrust) {
      setError("Lütfen hamur kalınlığını seçin.");
      setIsModalOpen(true); // Hata olduğunda modal açılır
      return;
    }

    setError("");

    const orderData = {
      size: pizzaSize,
      crust: pizzaCrust,
      toppings: malzemeSecimi,
      total: calculateTotal().toFixed(2),
    };

    axios
      .post("https://jsonplaceholder.typicode.com/posts", orderData)
      .then(() => {
        navigate("/success", {
          state: {
            size: pizzaSize,
            crust: pizzaCrust,
            toppings: malzemeSecimi,
            total: calculateTotal().toFixed(2),
            toppingsTotal: (malzemeSecimi.length * extraPrice).toFixed(2),
          },
        });
      })
      .catch((err) => {
        setError("Sipariş oluşturulurken bir hata oluştu. Lütfen tekrar deneyin.");
        setIsModalOpen(true); // Hata olduğunda modal açılır
        console.error(err);
      });
  };

  return (
    <div className="flex flex-col min-h-screen bg-white">
      {/* HEADER */}
      <header className="bg-red-600 w-full flex justify-center py-4">
        <img
          src="https://raw.githubusercontent.com/Workintech/fsweb-s8-challenge-pizza/8f9b6dbeba34ed8e9b45ce243e72feb9bae7be62/images/iteration-1-images/logo.svg"
          alt="Teknolojik Yemekler"
          className="h-12"
        />
      </header>

      {/* Modal */}
      <Modal isOpen={isModalOpen} toggle={toggleModal}>
        <ModalHeader toggle={toggleModal}>Uyarı</ModalHeader>
        <ModalBody>{error}</ModalBody>
        <ModalFooter>
          <Button color="secondary" onClick={toggleModal}>
            Kapat
          </Button>
        </ModalFooter>
      </Modal>

      {/* Orta Alan */}
      <div className="flex-grow flex flex-col items-center">
        <div
          className="bg-[#faf7f2] flex flex-col items-center pt-8 pb-8 max-w-screen-md w-full px-4 md:px-6 lg:px-8"
        >
          {/* Pizza Fotoğrafı */}
          <img
            src="https://raw.githubusercontent.com/Workintech/fsweb-s8-challenge-pizza/main/images/iteration-2-images/pictures/form-banner.png"
            alt="Pizza"
            className="object-contain"
            style={{
              maxWidth: "300px",
              maxHeight: "200px",
              margin: "0",
              padding: "0",
              position: "relative",
              top: "-33px",
            }}
          />

          {/* Pizza Bilgileri */}
          <div className="w-full text-left">
            <div className="text-sm font-medium text-black flex space-x-2 mb-4">
              <Link
                to="/main"
                className="hover:text-red-500 transition-colors duration-200"
              >
                Anasayfa
              </Link>
              <span>-</span>
              <Link
                to="/"
                className="hover:text-red-500 transition-colors duration-200"
              >
                Seçenekler
              </Link>
              <span>-</span>
              <Link
                to="/order"
                className="hover:text-red-500 transition-colors duration-200"
              >
                Sipariş Oluştur
              </Link>
            </div>

            <h2 className="text-3xl font-bold mb-1">
              Position Absolute Acı Pizza
            </h2>
            <div className="flex items-center space-x-2 text-gray-600 mb-4">
              <p className="text-red-500 text-xl font-bold">
                {pizzaPrice.toFixed(2)}₺
              </p>
              <p>4,90</p>
              <p>(200)</p>
            </div>

            <p
              className="text-gray-700 mb-6"
              style={{
                lineHeight: "1.8",
                textAlign: "justify",
                fontSize: "1rem",
              }}
            >
              Frontend Dev olarak hala position:absolute kullanıyorsan bu çok acı
              pizza tam sana göre. Pizza, domates, peynir ve genellikle çeşitli
              diğer malzemelerle kaplanmış; daha sonra geleneksel olarak odun
              ateşinde bir fırında yüksek sıcaklıkta pişirilen, genellikle
              yuvarlak, düzleştirilmiş mayalı buğday bazlı hamurdan oluşan İtalyan
              kökenli lezzetli bir yemektir. Küçük bir pizzaya bazen pizzetta
              denir.
            </p>
          </div>

          {/* Seçim Alanı */}
          <div className="w-full">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
              <div>
                <p className="font-semibold mb-2">
                  Boyut Seç <span className="text-red-500">*</span>
                </p>
                <div className="flex space-x-4">
                  {["S", "M", "L"].map((size) => (
                    <label
                      key={size}
                      className="inline-flex items-center space-x-2"
                    >
                      <input
                        type="radio"
                        name="pizzaSize"
                        value={size}
                        onChange={(e) => setPizzaSize(e.target.value)}
                        className="appearance-none w-6 h-6 border border-gray-300 rounded-full checked:bg-[#fdc913] checked:border-[#fdc913]"
                      />
                      <span className="font-semibold">{size}</span>
                    </label>
                  ))}
                </div>
              </div>

              <div>
                <p className="font-semibold mb-2">
                  Hamur Seç <span className="text-red-500">*</span>
                </p>
                <select
                  className="border border-gray-300 rounded p-2 focus:outline-none focus:ring-[#fdc913] focus:border-[#fdc913]"
                  defaultValue=""
                  onChange={(e) => setPizzaCrust(e.target.value)}
                >
                  <option value="" disabled>
                    Hamur Kalınlığı Seç
                  </option>
                  <option value="İnce">İnce</option>
                  <option value="Orta">Orta</option>
                  <option value="Kalın">Kalın</option>
                </select>
              </div>
            </div>

            {/* Ek Malzemeler */}
            <div className="mb-8">
              <p className="font-semibold mb-2">Ek Malzemeler</p>
              <p className="text-sm text-gray-500 mb-2">
                En Fazla 10 malzeme seçebilirsiniz. 5₺
              </p>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
                {[
                  "Pepperoni",
                  "Sosis",
                  "Pastırma",
                  "Tavuk Izgara",
                  "Domates",
                  "Mısır",
                  "Biber",
                  "Sucuk",
                  "Ananas",
                  "Kabak",
                  "Soğan",
                  "Sarmısak",
                ].map((item) => (
                  <label
                    key={item}
                    className="flex items-center space-x-2 border rounded p-2 hover:bg-gray-50"
                  >
                    <input
                      type="checkbox"
                      value={item}
                      checked={malzemeSecimi.includes(item)}
                      onChange={handleChange}
                      className="
                        custom-checkbox 
                        w-5 
                        h-5 
                        text-[#fdc913] 
                        relative
                        appearance-none
                        border-customYellow
                        checked:bg-customYellow
                        checked:border-customYellow
                        checked:before:content-['✓']
                        checked:before:text-black
                        checked:before:text-xl
                        checked:before:font-bold
                        checked:before:absolute
                        checked:before:top-[-5px]
                        checked:before:left-[2px]
                      "
                      style={{
                        appearance: "none",
                        backgroundColor: "white",
                        border: "2px solid #fdc913",
                        borderRadius: "4px",
                        width: "20px",
                        height: "20px",
                        display: "grid",
                        placeContent: "center",
                      }}
                    />
                    <span className="text-sm">{item}</span>
                  </label>
                ))}
              </div>
            </div>

            {/* Sipariş Notu ve Özeti */}
            <div className="mb-6">
              <p className="font-semibold mb-2">Sipariş Notu</p>
              <textarea
                className="border border-gray-300 rounded w-full p-2"
                name="orderNote"
                placeholder="Siparişine eklemek istediğin bir not var mı?"
              ></textarea>
              <hr className="mt-2 border-gray-300" />
            </div>

            <div className="flex justify-between">
              <InputGroup
                className="mb-4 md:mb-0 w-32"
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  gap: "4px",
                }}
              >
                <Button
                  color="warning"
                  onClick={decrement}
                  style={{
                    backgroundColor: "#fdc913",
                    borderColor: "#fdc913",
                    width: "30px",
                    height: "30px",
                    fontSize: "16px",
                  }}
                >
                  -
                </Button>
                <InputGroupText
                  style={{
                    width: "30px",
                    height: "30px",
                    textAlign: "center",
                    fontSize: "14px",
                  }}
                >
                  {quantity}
                </InputGroupText>
                <Button
                  color="warning"
                  onClick={increment}
                  style={{
                    backgroundColor: "#fdc913",
                    borderColor: "#fdc913",
                    width: "30px",
                    height: "30px",
                    fontSize: "16px",
                  }}
                >
                  +
                </Button>
              </InputGroup>

              <Card className="shadow-sm w-full md:w-80 mt-4 md:mt-0">
                <CardBody>
                  <CardTitle tag="h5" className="font-bold mb-3">
                    Sipariş Toplamı
                  </CardTitle>
                  <div className="flex justify-between mb-2">
                    <span>Seçimler</span>
                    <span>{(malzemeSecimi.length * extraPrice).toFixed(2)}₺</span>
                  </div>
                  <div className="flex justify-between mb-2">
                    <span className="text-red-500">Toplam</span>
                    <span className="text-red-500 font-bold">
                      {calculateTotal().toFixed(2)}₺
                    </span>
                  </div>
                  <Button
                    onClick={handleButtonClick}
                    className="w-full font-bold mt-4"
                    style={{
                      backgroundColor: "#fdc913",
                      color: "#000",
                    }}
                  >
                    SİPARİŞ VER
                  </Button>
                </CardBody>
              </Card>
            </div>
          </div>
        </div>
      </div>

      {/* FOOTER */}
      <Footer />
    </div>
  );
};

export default OrderPage;
