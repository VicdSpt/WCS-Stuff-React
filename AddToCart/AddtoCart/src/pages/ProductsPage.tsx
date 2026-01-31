import { ProductCard } from "../components/ProductCard";
import productsData from "../data/productsData.json";
import type { Product } from "../types";

export const ProductsPage = () => {
  const products: Product[] = productsData;

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-emerald-50">
      <div className="container mx-auto px-4 py-8">
        {/* Page Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-gray-800 mb-2">
            Our Products
          </h1>
          <p className="text-gray-600">
            Discover our amazing collection of tech products
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </div>
  );
};
