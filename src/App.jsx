import "./App.css";
import ProductCard from "./components/ProductCard";

function App() {
  return (
    <>
      <ProductCard
        img_url="src/assets/model1.png"
        product_name="Nemesis Model"
        description="$50"
      />
      <ProductCard
        img_url="src/assets/model2.png"
        product_name="Zombie Model"
        description="$20"
      />
    </>
  );
}

export default App;
