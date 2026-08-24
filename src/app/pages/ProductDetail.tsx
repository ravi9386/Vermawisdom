import { Link, useParams } from "react-router";
import { ArrowLeft } from "lucide-react";
import { products } from "../store/productsStore";

export default function ProductDetail() {
  const { id } = useParams();
  const product = products.find(p => p.id === parseInt(id || "0"));

  if (!product) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-display text-foreground mb-4">Product Not Found</h1>
          <Link to="/Ecommerce" className="text-primary dark:text-primary hover:underline">
            Back to Products
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-6 py-12">
        <Link
          to="/Ecommerce"
          className="inline-flex items-center gap-2 text-primary dark:text-primary hover:text-accent mb-8 transition-colors"
        >
          <ArrowLeft className="w-5 h-5" />
          Back to Products
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="bg-card rounded-xl shadow-lg overflow-hidden">
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-96 object-cover"
            />
          </div>

          <div className="space-y-6">
            <div>
              <h1 className="text-3xl font-display text-foreground mb-4">
                {product.name}
              </h1>
              <p className="text-lg text-muted-foreground dark:text-muted-foreground mb-6">
                {product.description}
              </p>
            </div>

            <div className="text-3xl font-bold text-primary dark:text-primary">
              ₹{product.price}
            </div>

            <div className="space-y-3">
              <div className="flex justify-between">
                <span className="font-semibold text-foreground dark:text-white">Size:</span>
                <span className="text-muted-foreground dark:text-muted-foreground">{product.size}</span>
              </div>
              <div className="flex justify-between">
                <span className="font-semibold text-foreground dark:text-white">Material:</span>
                <span className="text-muted-foreground dark:text-muted-foreground">{product.material}</span>
              </div>
            </div>

            <p className="text-foreground/80 dark:text-muted-foreground leading-relaxed">
              {product.fullDescription}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}