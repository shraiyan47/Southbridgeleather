export const categories = [
  { slug: "bags", title: "Everyday Carry", short: "Bags", description: "Companions for the long way around.", image: "photo-1553062407-98eeb64c6a62" },
  { slug: "small-goods", title: "Small Goods", short: "Small Goods", description: "The little things, made to last.", image: "photo-1622560480654-d96214fdc887" },
  { slug: "belts", title: "Belts & Straps", short: "Belts", description: "A considered finishing touch.", image: "photo-1624222247344-550fb8c7a8f7" },
  { slug: "desk", title: "For the Desk", short: "Desk Goods", description: "A calmer place to work.", image: "photo-1498050108023-c5249f4df085" },
];
export const products = [
  { name: "The Weekender", category: "bags", price: 385, image: "photo-1553062407-98eeb64c6a62", tag: "Best seller" }, { name: "Field Notes Wallet", category: "small-goods", price: 95, image: "photo-1622560480654-d96214fdc887", tag: "" }, { name: "No. 04 Belt", category: "belts", price: 145, image: "photo-1624222247344-550fb8c7a8f7", tag: "Made to order" }, { name: "Market Tote", category: "bags", price: 265, image: "photo-1590874103328-eac38a683ce7", tag: "" }, { name: "Card Sleeve", category: "small-goods", price: 65, image: "photo-1627123424574-724758594e93", tag: "" }, { name: "Desk Pad", category: "desk", price: 180, image: "photo-1498050108023-c5249f4df085", tag: "" }, { name: "Camera Strap", category: "belts", price: 110, image: "photo-1516035069371-29a1b244cc32", tag: "" }, { name: "The Studio Tote", category: "bags", price: 320, image: "photo-1590874103328-eac38a683ce7", tag: "" }, { name: "Catchall Tray", category: "desk", price: 85, image: "photo-1498050108023-c5249f4df085", tag: "" }, { name: "Passport Folio", category: "small-goods", price: 125, image: "photo-1622560480654-d96214fdc887", tag: "" },
];
export const photo = (id: string, width = 1000) => `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${width}&q=85`;
