import { Link } from "react-router";

const products = [
  {
    id: 1,
    name: "Mountain Landscape Print",
    price: 2000,
    image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=300&fit=crop",
    description: "A stunning handmade print of majestic mountains.",
    size: "8x10 inches",
    material: "High-quality paper, framed",
    fullDescription: "This print captures the serene beauty of mountain peaks at dawn. Each print is handcrafted with care, ensuring unique variations in color and texture."
  },
  {
    id: 2,
    name: "Abstract Art Print",
    price: 2500,
    image: "https://images.unsplash.com/photo-1541961017774-22349e4a1262?w=400&h=300&fit=crop",
    description: "Modern abstract design with vibrant colors.",
    size: "11x14 inches",
    material: "Premium canvas, unframed",
    fullDescription: "This piece features bold geometric shapes and a spectrum of colors. Hand-painted and printed for a unique, artistic touch."
  },
  {
    id: 3,
    name: "Cityscape Print",
    price: 2200,
    image: "https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=400&h=300&fit=crop",
    description: "Urban skyline captured in intricate detail.",
    size: "10x12 inches",
    material: "Matte paper, framed",
    fullDescription: "Detailed illustration of a bustling city at night. Perfect for office spaces or modern homes."
  },
  {
    id: 4,
    name: "Ocean Wave Print",
    price: 1800,
    image: "https://images.unsplash.com/photo-1505142468610-359e7d316be0?w=400&h=300&fit=crop",
    description: "Serene ocean waves in calming blues.",
    size: "9x11 inches",
    material: "Glossy paper, unframed",
    fullDescription: "Gentle waves rolling onto the shore, captured in soft watercolor style. Ideal for bedrooms or relaxation spaces."
  }
];

export default function Ecommerce() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-cyan-50 to-indigo-50 dark:from-slate-900 dark:to-indigo-900">
      <div className="container mx-auto px-6 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold bg-gradient-to-r from-cyan-600 to-indigo-600 dark:from-cyan-400 dark:to-indigo-400 bg-clip-text text-transparent mb-4">
            Handmade Prints
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Beautiful, unique artwork created by hand. Perfect for your home or office.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {products.map((product) => (
            <div key={product.id} className="bg-white dark:bg-slate-800 rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                  {product.name}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  {product.description}
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-2xl font-bold text-cyan-600 dark:text-cyan-400">
                    ₹{product.price}
                  </span>
                  <Link
                    to={`/product/${product.id}`}
                    className="bg-gradient-to-r from-cyan-500 to-indigo-500 hover:from-cyan-600 hover:to-indigo-600 text-white px-4 py-2 rounded-lg transition-colors duration-200"
                  >
                    View Details
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}