import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

import HomeProductByCategory from "./homeProductByCategory";
import Footer from "./footer";

function Home({ AddToCart }) {

  return (

    <div>

      <HomeProductByCategory
        AddToCart={AddToCart}
      />

      <Footer />

    </div>

  );

}

export default Home;