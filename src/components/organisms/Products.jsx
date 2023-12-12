import { data } from "../../data";
import Product from "../atoms/Product";

export default function Products() {
  const products = data.products;
  return (
    <div className="w-full md:w-5/6">
      <div className="flex flex-col space-y-1 items-center md:flex-row md:space-y-0 md:space-x-0">
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
