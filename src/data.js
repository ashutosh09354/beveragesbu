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
  ["₹200 Cr", "Annual revenue (approx.)"],
  ["28+", "States served (pan-India)"],
  ["100+", "Distribution partners"],
  ["15+", "Warehouse locations"]
];



const BODY = "M42 22h16v22c0 14 20 18 20 42v128a16 16 0 0 1-16 16H38a16 16 0 0 1-16-16V86c0-24 20-28 20-42z";
const B = (x, s, c) => `<g transform="translate(${x} ${760 - 246 * s}) scale(${s})"><ellipse cx="50" cy="246" rx="44" ry="8" fill="#000" opacity=".22"/><rect x="39" y="8" width="22" height="16" rx="3" fill="#1c1c24"/><path d="${BODY}" fill="${c}"/><rect x="22" y="118" width="56" height="62" fill="#fff" opacity=".93"/><rect x="33" y="136" width="34" height="9" rx="4" fill="${c}"/><rect x="38" y="152" width="24" height="6" rx="3" fill="${c}" opacity=".5"/><path d="M33 92v118" stroke="#fff" stroke-opacity=".4" stroke-width="6" stroke-linecap="round"/></g>`;
const scene = (c1, c2, body) => "data:image/svg+xml;utf8," + encodeURIComponent(`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 800" preserveAspectRatio="xMidYMid slice"><defs><linearGradient id="g" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="${c1}"/><stop offset="1" stop-color="${c2}"/></linearGradient></defs><rect width="1200" height="800" fill="url(#g)"/>${body}</svg>`);
const bubbles = [[120,120,60],[1040,90,90],[220,560,40],[1080,520,70],[640,60,34]].map(([x, y, r]) => `<circle cx="${x}" cy="${y}" r="${r}" fill="#fff" opacity=".1"/>`).join("");
const cluster = (c1, c2, cols) => scene(c1, c2, bubbles + `<rect y="752" width="1200" height="48" fill="#000" opacity=".12"/>` + [[120, 2], [300, 2.3], [530, 2.6], [770, 2.3], [960, 2]].map(([x, s], i) => B(x, s, cols[i % cols.length])).join(""));
let rack = "";
for (let r = 0; r < 3; r++) { const y = 230 + r * 200; rack += `<rect x="50" y="${y}" width="1100" height="14" fill="#f58220"/>`; for (let i = 0; i < 9; i++) rack += `<rect x="${72 + i * 120}" y="${y - 150}" width="104" height="150" rx="4" fill="${["#d9a35f", "#c98d45", "#e11d2e", "#e8c18a", "#12974a"][(i + r * 2) % 5]}"/><rect x="${72 + i * 120}" y="${y - 150}" width="104" height="26" fill="#000" opacity=".12"/>`; }
rack += `<rect x="50" y="90" width="14" height="660" fill="#f58220"/><rect x="1136" y="90" width="14" height="660" fill="#f58220"/><rect y="760" width="1200" height="40" fill="#000" opacity=".25"/>`;
const truck = `<g fill="#0a3d24" opacity=".14"><rect x="40" y="380" width="120" height="260"/><rect x="180" y="300" width="150" height="340"/><rect x="860" y="340" width="130" height="300"/><rect x="1020" y="410" width="140" height="230"/></g><rect y="640" width="1200" height="160" fill="#2b3a33"/><path d="M0 720h1200" stroke="#fff" stroke-width="6" stroke-dasharray="60 40" opacity=".5"/><rect x="380" y="610" width="770" height="22" fill="#222"/><rect x="380" y="330" width="560" height="290" rx="14" fill="#fff"/><rect x="380" y="540" width="560" height="14" fill="#e11d2e"/><rect x="380" y="558" width="560" height="14" fill="#f58220"/><rect x="380" y="576" width="560" height="14" fill="#12974a"/><text x="660" y="470" text-anchor="middle" font-family="Arial Black,Arial,sans-serif" font-weight="900" font-size="120"><tspan fill="#e11d2e">S</tspan><tspan fill="#e11d2e">L</tspan><tspan fill="#f58220">M</tspan><tspan fill="#12974a">G</tspan></text><text x="660" y="515" text-anchor="middle" font-family="Arial,sans-serif" font-weight="700" font-size="30" letter-spacing="14" fill="#14231d">BEVERAGES</text><polygon points="950,420 1060,420 1140,520 1140,620 950,620" fill="#12974a"/><polygon points="985,440 1050,440 1105,515 985,515" fill="#d4ecf7"/>` + [480, 580, 1040, 1100].map(x => `<circle cx="${x}" cy="640" r="46" fill="#111"/><circle cx="${x}" cy="640" r="18" fill="#bbb"/>`).join("");
const custom = import.meta.glob("./assets/photos/*.{jpg,jpeg,png,webp}", { eager: true, import: "default" });
const mine = n => Object.entries(custom).find(([k]) => k.includes(`/${n}.`))?.[1];
const art = {
  warehouse: scene("#0a3d24", "#12974a", `<rect width="1200" height="800" fill="#000" opacity=".15"/>` + rack),
  logistics: scene("#eaf6ef", "#bfe0cc", truck),
  cola: cluster("#7a0f18", "#e11d2e", ["#e11d2e", "#1c1c24", "#12974a"]),
  water: cluster("#0a5f8a", "#3aa5e6", ["#2b8fd6", "#6fc3ee", "#1d6fb0"]),
  juice: cluster("#b8500a", "#f58220", ["#f58220", "#f2b21c", "#e11d2e"]),
  energy: cluster("#0a1d3a", "#1f3b8f", ["#1f3b8f", "#e11d2e", "#23242b"])
};
art.hero = art.logistics; art.mixers = art.juice; art.other = art.water;
const U = id => `https://images.unsplash.com/${id}?auto=format&fit=crop&w=1400&q=80`;
const remote = { hero: U("photo-1601584115197-04ecc0da31d7"), logistics: U("photo-1586528116311-ad8dd3c8310d"), warehouse: U("photo-1601584115197-04ecc0da31d7"), cola: U("photo-1554866585-cd94860890b7"), water: "https://lracking.com/wp-content/uploads/2024/11/Beverage-Warehousing.jpg", juice: "https://static.vecteezy.com/system/resources/previews/054/314/865/non_2x/sprite-plastic-bottle-free-png.png", energy: U("photo-1622543925917-763c34d1a86e"), mixers: U("photo-1551024709-8f23befc6f87"), other: U("photo-1544145945-f90425340c7e") };
export const photoSrc = k => mine(k) || remote[k];
// CSS background value: real photo first, drawn illustration as automatic fallback if the link fails.
export const photos = Object.fromEntries(Object.keys(remote).map(k => [k, `url("${photoSrc(k)}"), url("${art[k]}")`]));

export const why = [
  ["Wide brand access", "One partner for carbonated drinks, juices, water, energy drinks and mixers, so you consolidate suppliers."],
  ["Reliable availability", "Buffer stock across regional warehouses keeps fast-moving packs on the shelf through peak season."],
  ["Cold-chain aware handling", "Temperature-sensitive products are stored and moved with care to protect taste and shelf life."],
  ["Batch traceability", "Every dispatch is recorded by batch and date, so any issue can be traced and resolved quickly."],
  ["Transparent pricing", "Clear price lists, scheme details and invoicing with no surprises at billing."],
  ["Dedicated account support", "A named relationship manager for each business account, reachable on call and email."]
];
export const channels = [
  ["Retail & kirana", "Regular replenishment for neighbourhood stores and general trade."],
  ["Modern trade", "Supermarkets and hypermarkets supplied to planogram and delivery windows."],
  ["Hotels, restaurants & cafés", "Bulk and mixed-pack supply for HoReCa kitchens, bars and banquets."],
  ["Institutions & corporates", "Offices, campuses, hospitals and canteens on scheduled contracts."],
  ["Events & weddings", "Short-notice volume supply with delivery to the venue."],
  ["Quick commerce & e-commerce", "Case-level supply to dark stores and online sellers."]
];
export const process = [
  ["Source", "We buy directly from manufacturers and authorised channels."],
  ["Inspect & store", "Goods are checked on arrival and stored first-in, first-out."],
  ["Plan & dispatch", "Orders are routed to the nearest warehouse and loaded by route."],
  ["Deliver & support", "Proof of delivery, returns handling and account follow-up."]
];
export const quality = [
  ["Inbound checks", "Seal, batch and expiry verified on every consignment."],
  ["FIFO stock rotation", "Older stock ships first to keep inventory fresh."],
  ["Clean, dry storage", "Pallet racking away from sunlight, moisture and strong odours."],
  ["Safe transport", "Covered, load-secured vehicles for glass and PET packs."]
];
export const regionsHome = [["North India", "Delhi NCR, Punjab, Haryana, Uttar Pradesh"], ["West India", "Maharashtra, Gujarat, Rajasthan, Goa"], ["South India", "Karnataka, Tamil Nadu, Kerala, Telangana"], ["East & Central", "West Bengal, Odisha, Bihar, Madhya Pradesh"]];
export const faqs = [
  ["Who can become a distribution partner?", "Registered wholesalers, distributors, retailers and institutional buyers can apply. Share your business details through the enquiry form and our team will review them."],
  ["What is the minimum order quantity?", "It depends on the product, pack size and your location. Our team will confirm minimums when they respond to your enquiry."],
  ["Which areas do you deliver to?", "We serve many states across India through regional warehouses. Contact us with your city and we will confirm coverage."],
  ["Can I order mixed packs?", "Yes. Most accounts can combine brands and pack sizes in one order, subject to pallet and route planning."],
  ["How do I get a quote?", "Open any product and choose Request a Quote, or send a business enquiry with your products, volumes and delivery location."]
];
export const brandStrip = ["Coca-Cola", "Pepsi", "Sprite", "Fanta", "Tropicana", "Bisleri", "Red Bull", "Mountain Dew", "Thums Up"];

export const articles = [
  ["How to plan summer beverage stock", "Demand", "Peak-season demand can rise sharply. Review last year’s sales by pack size, add a buffer for fast movers, and agree delivery slots early.", photos.cola],
  ["Storing packaged drinks the right way", "Handling", "Keep cases off the floor, away from sunlight, and rotate first-in, first-out. Heat and light shorten shelf life and change taste.", photos.warehouse],
  ["Choosing the right pack mix for your outlet", "Retail", "Single-serve PET suits impulse buying, while family packs suit planned purchases. Match your range to who walks in.", photos.juice],
  ["Why packaged water needs separate storage", "Handling", "Water absorbs strong odours through plastic. Store it away from chemicals, fuel and cleaning supplies.", photos.water],
  ["Preparing for wedding and event orders", "Events", "Confirm headcount, venue access and chilling needs at least a week ahead so volume arrives on time.", photos.logistics],
  ["Energy drinks: what retailers should know", "Retail", "Display chilled, keep a clear age-appropriate shelf position, and follow the label guidance on sale.", photos.energy]
];
export const cases = [
  ["Regional supermarket chain", "Modern trade", "Scenario: a multi-store chain struggled with stock-outs on weekends.", "Approach: weekly forecast by store, route-based replenishment, fixed delivery windows.", photos.logistics],
  ["Hotel and banquet group", "HoReCa", "Scenario: several venues bought from different suppliers with uneven pricing.", "Approach: one consolidated account with mixed-pack orders and a single invoice.", photos.juice],
  ["Corporate campus canteen", "Institutional", "Scenario: a large campus needed steady daily supply without storage space.", "Approach: scheduled small-batch drops matched to consumption.", photos.water]
];
export const jobs = [
  ["Territory Sales Executive", "Field sales", "Multiple cities", "Full-time"], ["Warehouse Supervisor", "Operations", "Regional hubs", "Full-time"],
  ["Logistics Planner", "Supply chain", "Head office", "Full-time"], ["Key Account Manager", "Sales", "Metro cities", "Full-time"], ["Accounts Executive", "Finance", "Head office", "Full-time"]
];
export const docs = [["Company profile", "Overview of XYZ Beverages, capabilities and network"], ["Product catalogue", "Brands, categories and pack sizes"], ["Distributor application pack", "Eligibility, documents and onboarding steps"], ["Price list request", "Current price list shared on enquiry"]];
export const depots = [["Delhi NCR", "North"], ["Chandigarh", "North"], ["Lucknow", "North"], ["Mumbai", "West"], ["Pune", "West"], ["Ahmedabad", "West"], ["Jaipur", "West"], ["Bengaluru", "South"], ["Chennai", "South"], ["Hyderabad", "South"], ["Kolkata", "East"], ["Bhubaneswar", "East"], ["Patna", "East"], ["Bhopal", "Central"], ["Nagpur", "Central"]];

// ---- reference homepage content ----
export const popular = ["Coca-Cola", "Pepsi", "Sprite", "Fanta", "Thums Up", "Mountain Dew"].map(n => ({ ...products.find(p => p.name === n), shape: "bottle", sizes: "300ml, 500ml, 1L, 2L", category: "Carbonated Soft Drink" }));
export const partnerBrands = [
  ["Coca-Cola", "wm-coke"], ["pepsi", "wm-pepsi"], ["Sprite", "wm-sprite"], ["Fanta", "wm-fanta"], ["Thums Up", "wm-thums"], ["Mountain Dew", "wm-dew"], ["Kinley", "wm-kinley"]
];
export const aboutPoints = [["Trust", "ShieldCheck"], ["Wide Reach", "Network"], ["Efficient Supply Chain", "Settings"], ["Strong Partnerships", "ShieldCheck"]];
export const homeWhy = [
  ["Wide brand access", "Leading beverage brands under one distribution network."],
  ["Reliable availability", "Consistent stock supply to meet market demand."],
  ["End-to-end channel handling", "From manufacturers to retailers and institutions."],
  ["Dedicated account support", "A responsive team for enquiries and ongoing support."]
];
export const homeProcess = [
  ["Source", "Partnering with leading manufacturers for authentic products."],
  ["Import & Store", "Efficient warehousing with proper inventory management."],
  ["Distribute", "Pan-India logistics with reliable transport partners."],
  ["Retail & Support", "Serving retailers and institutions with continuous support."]
];
export const homeRegions = [
  ["North India", "Strong presence in key markets."], ["West India", "Expanding reach across urban and rural areas."],
  ["East India", "Growing distribution network."], ["South India", "Reliable supply and increasing market coverage."]
];
export const careList = ["Secure warehousing with proper storage conditions", "Product rotation for freshness", "Safe and reliable transportation", "Strict handling and quality control processes"];
export const segments = [
  ["Retail Stores", "Kirana stores, modern retail and supermarkets.", "retail", "seg-retail"],
  ["HoReCa", "Hotels, restaurants, cafes and catering.", "horeca", "seg-horeca"],
  ["Institutions", "Schools, colleges, hospitals and corporate offices.", "inst", "seg-institutions"],
  ["Distributors", "Regional distributors and wholesalers.", "dist", "seg-distributors"],
  ["Events & Venues", "Concerts, sports events, large gatherings.", "events", "seg-events"],
  ["Rural & Semi-Urban", "Expanding reach to emerging markets.", "rural", "seg-rural"]
];
export const homeFaqs = [
  ["Which brands do you distribute?", "We distribute leading carbonated soft drinks, juices, packaged water, energy drinks and mixers. Contact us for the current brand list in your area."],
  ["How can I become a distributor or partner?", "Send a business enquiry with your company details, location and the products you are interested in. Our team will review it and respond."],
  ["What areas do you currently serve?", "We serve many states across India through regional warehouses. Share your city and we will confirm coverage."],
  ["Do you supply to institutions and businesses?", "Yes. We supply schools, hospitals, corporate offices, hotels, restaurants and event organisers on scheduled or one-time orders."],
  ["How can I place an enquiry?", "Use the Business Enquiry button on any page, or write to enquiry@xyzbeverages.in. We reply with pack sizes, pricing and delivery details."]
];
export const mapPins = [
  [36, 14, "b"], [38, 22, "r"], [29, 30, "b"], [48, 29, "b"], [58, 34, "b"], [21, 43, "b"], [38, 44, "r"], [68, 43, "b"], [63, 52, "b"],
  [24, 58, "r"], [28, 63, "b"], [42, 63, "b"], [38, 77, "b"], [49, 78, "b"]
];
