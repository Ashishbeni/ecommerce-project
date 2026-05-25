import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import HomeImagesScroller from "./homeScroller";
import HomeProductByCategory from "./homeProductByCategory";
import Footer from "./footer";

function Home({ AddToCart }) {

  return (

    <div>
      <HomeImagesScroller/>

      <HomeProductByCategory
        AddToCart={AddToCart}
      />

      <Footer />

    </div>

  );

}

export default Home;