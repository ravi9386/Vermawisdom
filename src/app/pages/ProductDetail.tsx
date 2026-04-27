import { Link, useParams } from "react-router";
import { ArrowLeft } from "lucide-react";

const products = [
  {
    id: 1,
    name: "Mountain Landscape Print",
    price: 25,
    image: "https://via.placeholder.com/400x300?text=Mountain+Landscape",
    description: "A stunning handmade print of majestic mountains.",
    size: "8x10 inches",
    material: "High-quality paper, framed",
    fullDescription: "This print captures the serene beauty of mountain peaks at dawn. Each print is handcrafted with care, ensuring unique variations in color and texture."
  },
  {
    id: 2,
    name: "Abstract Art Print",
    price: 30,
    image: "https://via.placeholder.com/400x300?text=Abstract+Art",
    description: "Modern abstract design with vibrant colors.",
    size: "11x14 inches",
    material: "Premium canvas, unframed",
    fullDescription: "This piece features bold geometric shapes and a spectrum of colors. Hand-painted and printed for a unique, artistic touch."
  },
  {
    id: 3,
    name: "Cityscape Print",
    price: 28,
    image: "https://via.placeholder.com/400x300?text=Cityscape",
    description: "Urban skyline captured in intricate detail.",
    size: "10x12 inches",
    material: "Matte paper, framed",
    fullDescription: "Detailed illustration of a bustling city at night. Perfect for office spaces or modern homes."
  },
  {
    id: 4,
    name: "Ocean Wave Print",
    price: 22,
    image: "https://via.placeholder.com/400x300?text=Ocean+Wave",
    description: "Serene ocean waves in calming blues.",
    size: "9x11 inches",
    material: "Glossy paper, unframed",
    fullDescription: "Gentle waves rolling onto the shore, captured in soft watercolor style. Ideal for bedrooms or relaxation spaces."
  }
];

export function ProductDetail() {
  const { id } = useParams();
  const product = products.find(p => p.id === parseInt(id || "0"));

  if (!product) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-cyan-50 to-indigo-50 dark:from-slate-900 dark:to-indigo-900 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Product Not Found</h1>
          <Link to="/ecommerce" className="text-cyan-600 dark:text-cyan-400 hover:underline">
            Back to Products
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-cyan-50 to-indigo-50 dark:from-slate-900 dark:to-indigo-900">
      <div className="container mx-auto px-6 py-12">
        <Link
          to="/ecommerce"
          className="inline-flex items-center gap-2 text-cyan-600 dark:text-cyan-400 hover:text-cyan-700 dark:hover:text-cyan-300 mb-8 transition-colors"
        >
          <ArrowLeft className="w-5 h-5" />
          Back to Products
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="bg-white dark:bg-slate-800 rounded-xl shadow-lg overflow-hidden">
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-96 object-cover"
            />
          </div>

          <div className="space-y-6">
            <div>
              <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
                {product.name}
              </h1>
              <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
                {product.description}
              </p>
            </div>

            <div className="text-3xl font-bold text-cyan-600 dark:text-cyan-400">
              ${product.price}
            </div>

            <div className="space-y-3">
              <div className="flex justify-between">
                <span className="font-semibold text-gray-900 dark:text-white">Size:</span>
                <span className="text-gray-600 dark:text-gray-300">{product.size}</span>
              </div>
              <div className="flex justify-between">
                <span className="font-semibold text-gray-900 dark:text-white">Material:</span>
                <span className="text-gray-600 dark:text-gray-300">{product.material}</span>
              </div>
            </div>

            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              {product.fullDescription}
            </p>

            <button className="w-full bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-600 hover:to-emerald-600 text-white py-3 px-6 rounded-lg font-semibold transition-colors duration-200">
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}