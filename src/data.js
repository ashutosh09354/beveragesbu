export const categories = [
  { name: "Carbonated Soft Drinks", short: "Carbonated Soft Drinks", shapes: ["bottle", "can", "bottle"], colors: ["#d62a22", "#1f5bd6", "#2e9b45"] },
  { name: "Fruit Juices & Fruit Drinks", short: "Fruit Juices & Fruit Drinks", shapes: ["bottle", "tall", "bottle"], colors: ["#f28a1c", "#f2b21c", "#e8561c"] },
  { name: "Packaged Drinking Water", short: "Packaged Drinking Water", shapes: ["water", "water", "water"], colors: ["#2b8fd6", "#3aa5e6", "#2b8fd6"] },
  { name: "Energy Drinks", short: "Energy Drinks", shapes: ["can", "can", "can"], colors: ["#1f3b8f", "#c4202a", "#23242b"] },
  { name: "Sodas & Mixers", short: "Sodas & Mixers", shapes: ["bottle", "tall", "bottle"], colors: ["#2e9b45", "#e8a81c", "#d62a22"] },
  { name: "Other Beverages", short: "Other Beverages", shapes: ["tall", "bottle", "can"], colors: ["#7a3fb5", "#e8561c", "#1d7a4d"] }
];

const P = (name, category, sizes, color, shape, abbr, brand = name) => ({ slug: name.toLowerCase().replace(/[^a-z0-9]+/g, "-"), name, brand, category, sizes, color, shape, abbr });

export const products = [
  P("Coca-Cola", "Carbonated Soft Drinks", "300ml, 500ml, 1L, 2L", "#d62a22", "bottle", "Cola"),
  P("Pepsi", "Carbonated Soft Drinks", "300ml, 500ml, 1L, 2L", "#1f5bd6", "can", "Pepsi"),
  P("Sprite", "Carbonated Soft Drinks", "300ml, 500ml, 1L, 2L", "#2e9b45", "bottle", "Sprite"),
  P("Fanta", "Carbonated Soft Drinks", "300ml, 500ml, 1L, 2L", "#f28a1c", "bottle", "Fanta"),
  P("Tropicana", "Fruit Juices & Fruit Drinks", "200ml, 500ml, 1L", "#f2a31c", "tall", "Trop"),
  P("Bisleri", "Packaged Drinking Water", "300ml, 500ml, 1L, 2L", "#2b8fd6", "water", "Aqua"),
  P("Red Bull", "Energy Drinks", "250ml, 500ml", "#1f3b8f", "can", "RB"),
  P("Mountain Dew", "Carbonated Soft Drinks", "300ml, 500ml, 1L, 2L", "#7bb82a", "bottle", "Dew"),
  P("Thums Up", "Carbonated Soft Drinks", "300ml, 500ml, 1L, 2L", "#1c1c24", "bottle", "Thums"),
  P("Coca-Cola Zero", "Carbonated Soft Drinks", "300ml, 500ml, 1L", "#23242b", "bottle", "Zero"),
  P("Schweppes Tonic", "Sodas & Mixers", "200ml, 300ml, 750ml", "#3d6fa5", "tall", "Tonic"),
  P("Mixed Fruit Drink", "Other Beverages", "200ml, 1L", "#7a3fb5", "tall", "Fruit")
];

export const brands = [...new Set(products.map(p => p.brand))];

export const stats = [
  ["₹10+ Cr", "Annual revenue (approx.)"],
  ["28+", "States served (pan-India)"],
  ["100+", "Distribution partners"],
  ["15+", "Warehouse locations"]
];
