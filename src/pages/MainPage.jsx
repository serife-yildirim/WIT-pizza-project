import "bootstrap/dist/css/bootstrap.min.css";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Menu from "../components/Menu";
import Favorites from "../components/Favorites";
import BestPrice from "../components/BestPrice";

const MainPage = () => {
  return (
    // Tüm sayfayı dikey olarak (flex-column) düzenleyip 
    // içeriğin boyuna göre esnemesini (flex-grow-1) sağlıyoruz.
    <div className="d-flex flex-column min-vh-100">
      <Header />
      <Menu />

      {/* Ana içerik alanı */}
      <main
        // flex-grow-1 => bu alanın sayfada kalan dikey boşluğu doldurmasını sağlar
        className="flex-grow-1"
        style={{ backgroundColor: "#FAF7F2", paddingBottom: "3rem" }}
      >
        {/* container => içeriği ortalamak / container-fluid => tam genişlik kullanmak */}
        <div className="container py-4">
          <Favorites />
          <BestPrice />
        </div>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default MainPage;
