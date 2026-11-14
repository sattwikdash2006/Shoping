/**
 * ============================================================================
 * MEHER — HAND-PAINTED PUNJABI ATELIER
 * PRODUCT & STORE CONFIGURATION FILE (data.js)
 * ============================================================================
 *
 * HOW TO EDIT THIS FILE (No coding experience needed!):
 * 1. Always keep quotes (" ") around text values.
 * 2. Never put quotes around numbers (like price).
 * 3. Make sure every product block ends with a comma (,) except inside the
 *    very last curly brace if you prefer, though trailing commas are safe.
 * 4. For images: You can paste a web URL OR put your own photo in an "images"
 *    folder on GitHub and write: "images/my-suit.jpg"
 * ============================================================================
 */

const STORE_CONFIG = {
  brandName: "MEHER",
  tagline: "Hand-Painted Punjabi Atelier",
  city: "Patiala & Amritsar, Punjab",

  // IMPORTANT: Enter your WhatsApp number with country code, NO '+' or spaces.
  // Example for India (+91 98765 43210) -> "919876543210"
  whatsappNumber: "919876543210",

  currencySymbol: "₹",
  instagramHandle: "@meher.punjab",
  heroImage: "https://images.unsplash.com/photo-1772269756216-b1870172fb51?auto=format&fit=crop&w=900&q=75"
};

/**
 * PRODUCT CATALOG
 * To add a new product: Copy everything from { to }, and paste it below!
 *
 * Allowed stockStatus options:
 *   "In Stock" | "Made to Order" | "Limited Edition" | "Sold Out"
 */
const PRODUCTS = [
  {
    id: "MHR-101",
    title: "Amritsari Peony Silk Suit",
    price: 7450,
    category: "Hand-Painted Suits",
    image: "https://i.ibb.co/zV9j7S90/trashed-1789495017-1786902945221.png",
    description: "Pure mulberry silk kurta and salwar hand-painted freehand with blooming Amritsari peonies, antique gold zari outlines, and an airy organza dupatta.",
    stockStatus: "In Stock"
  },
  {
    id: "MHR-102",
    title: "Patiala Shahi Velvet Jutti",
    price: 2850,
    category: "Punjabi Juttis",
    image: "https://images.unsplash.com/photo-1777980653176-849502631cf6?auto=format&fit=crop&w=800&q=75",
    description: "Double-cushioned vegetable-tanned leather juttis wrapped in crimson velvet, adorned with hand-painted lotus motifs and subtle dabka work.",
    stockStatus: "In Stock"
  },
  {
    id: "MHR-103",
    title: "Sarson Blossom Organza Dupatta",
    price: 3900,
    category: "Artisan Dupattas",
    image: "https://images.unsplash.com/photo-1722635941018-a9e7de0a5b1b?auto=format&fit=crop&w=800&q=75",
    description: "2.5-meter featherlight silk organza dupatta featuring hand-brushed mustard fields and paranda-inspired border detailing by Patiala karigars.",
    stockStatus: "Limited Edition"
  },
  {
    id: "MHR-104",
    title: "Surajmukhi Festive Lehenga Set",
    price: 12900,
    category: "Hand-Painted Suits",
    image: "https://images.unsplash.com/photo-1781154110233-6d37b7ea7ffc?auto=format&fit=crop&w=800&q=75",
    description: "Sun-kissed chanderi silk ensemble painted with heritage peacock and marigold brushwork. Custom tailored to your measurements within 10 days.",
    stockStatus: "Made to Order"
  },
  {
    id: "MHR-105",
    title: "Noor-e-Phulkari Heritage Shawl",
    price: 5600,
    category: "Artisan Dupattas",
    image: "https://images.unsplash.com/photo-1771098206658-4bf2557e3699?auto=format&fit=crop&w=800&q=75",
    description: "Hand-painted geometric Bagh motifs reimagined on raw tussar silk with natural mineral pigments and hand-knotted tassels.",
    stockStatus: "In Stock"
  },
  {
    id: "MHR-106",
    title: "Mehfil Maroon Velvet Ensemble",
    price: 14500,
    category: "Bridal Trousseau",
    image: "https://images.unsplash.com/photo-1762201698238-bf412e297016?auto=format&fit=crop&w=800&q=75",
    description: "Heirloom micro-velvet Punjabi suit accented with metallic champagne brushstroke florals and gota-patti scalloped edging.",
    stockStatus: "Sold Out"
  }
];
