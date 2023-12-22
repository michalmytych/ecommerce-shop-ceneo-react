import { data } from "../../data";
import Product from "../atoms/Product";

export default function Products() {
  const products = data.products;
  return (
    <div className="md:w-5/6 overflow-x-auto">
      <div className="inline-flex md:flex items-center flex-row space-x-0">
        {products.map((product) => (
          <Product
            key={product.id}
            image={product.image}
            alt={product.alt}
            name={product.name}
            price={product.price}
          />
        ))}
      </div>
    </div>
  );
}
