export interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
  description: string;
  size: string;
  material: string;
  fullDescription: string;
  category: string;
}

export const products: Product[] = [
  {
    id: 1,
    name: "Mountain Landscape Print",
    price: 2000,
    image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=300&fit=crop",
    description: "A stunning handmade print of majestic mountains.",
    size: "8x10 inches",
    material: "High-quality paper, framed",
    fullDescription: "This print captures the serene beauty of mountain peaks at dawn. Each print is handcrafted with care, ensuring unique variations in color and texture.",
    category: "Landscapes"
  },
  {
    id: 2,
    name: "Abstract Art Print",
    price: 2500,
    image: "https://images.unsplash.com/photo-1541961017774-22349e4a1262?w=400&h=300&fit=crop",
    description: "Modern abstract design with vibrant colors.",
    size: "11x14 inches",
    material: "Premium canvas, unframed",
    fullDescription: "This piece features bold geometric shapes and a spectrum of colors. Hand-painted and printed for a unique, artistic touch.",
    category: "Abstract"
  },
  {
    id: 3,
    name: "Cityscape Print",
    price: 2200,
    image: "https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=400&h=300&fit=crop",
    description: "Urban skyline captured in intricate detail.",
    size: "10x12 inches",
    material: "Matte paper, framed",
    fullDescription: "Detailed illustration of a bustling city at night. Perfect for office spaces or modern homes.",
    category: "Cityscapes"
  },
  {
    id: 4,
    name: "Ocean Wave Print",
    price: 1800,
    image: "https://images.unsplash.com/photo-1505142468610-359e7d316be0?w=400&h=300&fit=crop",
    description: "Serene ocean waves in calming blues.",
    size: "9x11 inches",
    material: "Glossy paper, unframed",
    fullDescription: "Gentle waves rolling onto the shore, captured in soft watercolor style. Ideal for bedrooms or relaxation spaces.",
    category: "Nature"
  }
];

export const categories = ["All", "Landscapes", "Abstract", "Cityscapes", "Nature"];