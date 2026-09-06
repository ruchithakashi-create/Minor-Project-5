export const categories = [
  "All",
  "Kitchen",
  "Apparel",
  "Home",
  "Office",
  "Bath",
  "Accessories"
];

export const products = [
  // ==================== KITCHEN ====================
  {
    id: 1,
    name: "Ceramic Pour-Over Set",
    category: "Kitchen",
    price: 34.99,
    oldPrice: 44.99,
    rating: 4.8,
    badge: "Sale",
    image: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=800&q=80",
    description: "A beautiful ceramic pour-over coffee set for your daily coffee ritual."
  },
  {
    id: 2,
    name: "Wooden Kitchen Utensils",
    category: "Kitchen",
    price: 24.99,
    rating: 4.7,
    image: "https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&w=800&q=80",
    description: "Natural wooden kitchen utensils designed for everyday cooking."
  },
  {
    id: 3,
    name: "Modern Dinner Set",
    category: "Kitchen",
    price: 49.99,
    oldPrice: 59.99,
    rating: 4.9,
    badge: "Bestseller",
    image: "https://images.unsplash.com/photo-1603199506016-b9a594b593c0?auto=format&fit=crop&w=800&q=80",
    description: "Elegant modern dinnerware set perfect for everyday meals and entertaining."
  },
  {
    id: 4,
    name: "Glass Storage Jars",
    category: "Kitchen",
    price: 27.50,
    rating: 4.6,
    image: "https://images.unsplash.com/photo-1583947215259-38e31be8751f?auto=format&fit=crop&w=800&q=80",
    description: "Clear glass storage jars for organizing spices, grains and kitchen essentials."
  },

  // ==================== APPAREL ====================
  {
    id: 5,
    name: "Everyday Linen Shirt",
    category: "Apparel",
    price: 48.00,
    rating: 4.7,
    image: "https://images.unsplash.com/photo-1603252110481-7ba873bf42ab?auto=format&fit=crop&w=800&q=80",
    description: "Breathable linen shirt with a relaxed fit for everyday wear."
  },
  {
    id: 6,
    name: "Classic Cotton T-Shirt",
    category: "Apparel",
    price: 22.00,
    rating: 4.8,
    image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=800&q=80",
    description: "Soft cotton T-shirt designed for comfortable everyday styling."
  },
  {
    id: 7,
    name: "Casual Denim Jacket",
    category: "Apparel",
    price: 64.99,
    oldPrice: 79.99,
    rating: 4.8,
    badge: "Sale",
    image: "https://images.unsplash.com/photo-1576871337632-b9aef4c17ab9?auto=format&fit=crop&w=800&q=80",
    description: "Classic denim jacket that works perfectly with casual outfits."
  },
  {
    id: 8,
    name: "Comfort Hoodie",
    category: "Apparel",
    price: 39.99,
    rating: 4.6,
    image: "https://images.unsplash.com/photo-1556821840-3a63f95609a7?auto=format&fit=crop&w=800&q=80",
    description: "Warm and comfortable hoodie for relaxed everyday wear."
  },

  // ==================== HOME ====================
  {
    id: 9,
    name: "Oak Storage Tray",
    category: "Home",
    price: 31.75,
    rating: 4.8,
    image: "https://images.unsplash.com/photo-1604014237800-1c9102c219da?auto=format&fit=crop&w=800&q=80",
    description: "Minimal wooden storage tray for organizing your living space."
  },
  {
    id: 10,
    name: "Woven Accent Cushion",
    category: "Home",
    price: 24.50,
    rating: 4.5,
    image: "https://images.unsplash.com/photo-1584100936595-c0654b55a2e2?auto=format&fit=crop&w=800&q=80",
    description: "Soft woven cushion that adds warmth and texture to your home."
  },
  {
    id: 11,
    name: "Decorative Plant Pot",
    category: "Home",
    price: 18.99,
    rating: 4.7,
    image: "https://images.unsplash.com/photo-1485955900006-10f4d324d411?auto=format&fit=crop&w=800&q=80",
    description: "Modern decorative plant pot for adding greenery to your room."
  },
  {
    id: 12,
    name: "Minimal Wall Clock",
    category: "Home",
    price: 35.99,
    oldPrice: 42.99,
    rating: 4.8,
    badge: "Sale",
    image: "https://images.unsplash.com/photo-1563861826100-9cb868fdbe1c?auto=format&fit=crop&w=800&q=80",
    description: "Simple modern wall clock designed for stylish interiors."
  },

  // ==================== OFFICE ====================
  {
    id: 13,
    name: "Minimal Desk Lamp",
    category: "Office",
    price: 59.99,
    rating: 4.9,
    badge: "Bestseller",
    image: "https://images.unsplash.com/photo-1507473885765-e6ed057f782c?auto=format&fit=crop&w=800&q=80",
    description: "Minimal desk lamp that provides warm lighting for focused work."
  },
  {
    id: 14,
    name: "Wooden Desk Organizer",
    category: "Office",
    price: 29.99,
    rating: 4.7,
    image: "https://images.unsplash.com/photo-1517842645767-c639042777db?auto=format&fit=crop&w=800&q=80",
    description: "Elegant wooden organizer for keeping your workspace neat."
  },
  {
    id: 15,
    name: "Premium Notebook",
    category: "Office",
    price: 15.99,
    rating: 4.8,
    image: "https://images.unsplash.com/photo-1531346878377-a5be20888e57?auto=format&fit=crop&w=800&q=80",
    description: "Premium notebook for notes, planning and creative ideas."
  },
  {
    id: 16,
    name: "Modern Office Chair",
    category: "Office",
    price: 149.99,
    oldPrice: 179.99,
    rating: 4.6,
    badge: "Sale",
    image: "https://images.unsplash.com/photo-1505843490701-5be5d1e8f5c7?auto=format&fit=crop&w=800&q=80",
    description: "Comfortable modern office chair designed for long working sessions."
  },

  // ==================== BATH ====================
  {
    id: 17,
    name: "Soft Cotton Towels",
    category: "Bath",
    price: 29.99,
    oldPrice: 36.00,
    rating: 4.6,
    badge: "Sale",
    image: "https://images.unsplash.com/photo-1600369671236-e74521d4b8f8?auto=format&fit=crop&w=800&q=80",
    description: "Soft and absorbent cotton towels for a comfortable bathroom experience."
  },
  {
    id: 18,
    name: "Bathrobe",
    category: "Bath",
    price: 44.99,
    rating: 4.8,
    image: "https://images.unsplash.com/photo-1584132967334-10e028bd69f7?auto=format&fit=crop&w=800&q=80",
    description: "Soft and comfortable bathrobe for relaxing after a shower."
  },
  {
    id: 19,
    name: "Bamboo Bath Mat",
    category: "Bath",
    price: 32.99,
    rating: 4.7,
    image: "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=800&q=80",
    description: "Natural bamboo bath mat with a clean and modern appearance."
  },
  {
    id: 20,
    name: "Bath Essentials Set",
    category: "Bath",
    price: 38.99,
    oldPrice: 45.99,
    rating: 4.8,
    badge: "Bestseller",
    image: "https://images.unsplash.com/photo-1556228720-195a672e8a03?auto=format&fit=crop&w=800&q=80",
    description: "Complete bath essentials set for a simple and relaxing routine."
  },

  // ==================== ACCESSORIES ====================
  {
    id: 21,
    name: "Leather Card Wallet",
    category: "Accessories",
    price: 39.95,
    rating: 4.9,
    badge: "Bestseller",
    image: "https://images.unsplash.com/photo-1627123424574-724758594e93?auto=format&fit=crop&w=800&q=80",
    description: "Compact leather wallet designed to carry your essential cards."
  },
  {
    id: 22,
    name: "Canvas Utility Tote",
    category: "Accessories",
    price: 27.90,
    rating: 4.6,
    image: "https://images.unsplash.com/photo-1544816155-12df9643f363?auto=format&fit=crop&w=800&q=80",
    description: "Roomy canvas tote for shopping, work and everyday travel."
  },
  {
    id: 23,
    name: "Classic Wrist Watch",
    category: "Accessories",
    price: 79.99,
    oldPrice: 99.99,
    rating: 4.8,
    badge: "Sale",
    image: "https://images.unsplash.com/photo-1524805444758-089113d48a6d?auto=format&fit=crop&w=800&q=80",
    description: "Classic wrist watch with a clean and timeless design."
  },
  {
    id: 24,
    name: "Leather Sunglasses Case",
    category: "Accessories",
    price: 21.99,
    rating: 4.7,
    image: "https://images.unsplash.com/photo-1577803645773-f96470509666?auto=format&fit=crop&w=800&q=80",
    description: "Protective leather case designed for everyday sunglasses storage."
  }
];