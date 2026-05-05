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
  },
  {
    id: 5,
    name: "Forest Path Print",
    price: 1900,
    image: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=400&h=300&fit=crop",
    description: "Mystical forest path leading into the unknown.",
    size: "10x12 inches",
    material: "Matte paper, framed",
    fullDescription: "A captivating forest scene with dappled sunlight filtering through ancient trees. Perfect for creating a sense of tranquility and wonder.",
    category: "Landscapes"
  },
  {
    id: 6,
    name: "Geometric Abstract Print",
    price: 2700,
    image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=300&fit=crop",
    description: "Bold geometric patterns in striking contrast.",
    size: "12x16 inches",
    material: "Premium canvas, unframed",
    fullDescription: "Modern geometric abstraction featuring clean lines and bold color contrasts. A statement piece for contemporary spaces.",
    category: "Abstract"
  },
  {
    id: 7,
    name: "Tokyo Night Cityscape",
    price: 2400,
    image: "https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?w=400&h=300&fit=crop",
    description: "Vibrant Tokyo skyline illuminated at night.",
    size: "11x14 inches",
    material: "Glossy paper, framed",
    fullDescription: "Capturing the energy and lights of Tokyo's famous skyline. A perfect blend of traditional and modern architecture.",
    category: "Cityscapes"
  },
  {
    id: 8,
    name: "Wildflower Meadow Print",
    price: 1600,
    image: "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=400&h=300&fit=crop",
    description: "Colorful wildflowers in a lush meadow.",
    size: "8x12 inches",
    material: "High-quality paper, unframed",
    fullDescription: "A vibrant display of wildflowers swaying in a gentle breeze. Brings the beauty of nature indoors.",
    category: "Nature"
  },
  {
    id: 9,
    name: "Desert Dunes Print",
    price: 2100,
    image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=300&fit=crop",
    description: "Golden desert dunes under a vast sky.",
    size: "9x12 inches",
    material: "Matte paper, framed",
    fullDescription: "The timeless beauty of desert landscapes, where golden sands meet endless blue skies. A reminder of nature's grandeur.",
    category: "Landscapes"
  },
  {
    id: 10,
    name: "Minimalist Abstract Print",
    price: 2300,
    image: "https://images.unsplash.com/photo-1578321272176-b7bbc0679853?w=400&h=300&fit=crop",
    description: "Clean, minimalist design with subtle elegance.",
    size: "10x10 inches",
    material: "Premium canvas, unframed",
    fullDescription: "Less is more with this minimalist abstract piece. Clean lines and subtle color gradients create a sophisticated atmosphere.",
    category: "Abstract"
  },
  {
    id: 11,
    name: "Paris Street Scene",
    price: 2600,
    image: "https://images.unsplash.com/photo-1502602898536-47ad22581b52?w=400&h=300&fit=crop",
    description: "Charming Paris streets with classic architecture.",
    size: "12x15 inches",
    material: "Glossy paper, framed",
    fullDescription: "The romantic charm of Paris streets, featuring iconic architecture and the timeless beauty of the City of Light.",
    category: "Cityscapes"
  },
  {
    id: 12,
    name: "Autumn Forest Print",
    price: 1950,
    image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=300&fit=crop",
    description: "Vibrant autumn colors in a forest setting.",
    size: "10x13 inches",
    material: "High-quality paper, unframed",
    fullDescription: "The magic of autumn comes alive with golden leaves and warm hues. A celebration of seasonal change and natural beauty.",
    category: "Nature"
  },
  {
    id: 13,
    name: "Mountain Lake Reflection",
    price: 2250,
    image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=300&fit=crop",
    description: "Peaceful mountain lake with perfect reflections.",
    size: "11x14 inches",
    material: "Matte paper, framed",
    fullDescription: "A serene mountain lake reflecting the surrounding peaks. Perfect for meditation and creating a sense of inner peace.",
    category: "Landscapes"
  },
  {
    id: 14,
    name: "Color Field Abstract",
    price: 2800,
    image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=300&fit=crop",
    description: "Large fields of color in harmonious composition.",
    size: "14x18 inches",
    material: "Premium canvas, unframed",
    fullDescription: "Inspired by color field painting, this piece explores the emotional impact of pure color relationships.",
    category: "Abstract"
  },
  {
    id: 15,
    name: "New York Skyline Print",
    price: 2500,
    image: "https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?w=400&h=300&fit=crop",
    description: "Iconic New York City skyline at dusk.",
    size: "13x16 inches",
    material: "Glossy paper, framed",
    fullDescription: "The unmistakable silhouette of New York City against a dramatic sky. A symbol of ambition and urban energy.",
    category: "Cityscapes"
  },
  {
    id: 16,
    name: "Cherry Blossom Print",
    price: 1700,
    image: "https://images.unsplash.com/photo-1522383225653-ed111181a951?w=400&h=300&fit=crop",
    description: "Delicate cherry blossoms in full bloom.",
    size: "9x12 inches",
    material: "High-quality paper, unframed",
    fullDescription: "The ephemeral beauty of cherry blossoms, celebrating the fleeting nature of life's most beautiful moments.",
    category: "Nature"
  }
];

export const categories = ["All", "Landscapes", "Abstract", "Cityscapes", "Nature"];