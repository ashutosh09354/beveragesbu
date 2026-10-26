import React from "react";

// Drop real photos in src/assets/photos using the names below and they replace these illustrations:
// hero-bg, about-worker, about-forklift, quality, seg-retail, seg-horeca, seg-institutions,
// seg-distributors, seg-events, seg-rural, handshake, cat-cola, cat-juice, cat-water, cat-energy, cat-mixers, cat-other
const custom = import.meta.glob("../assets/photos/*.{jpg,jpeg,png,webp}", { eager: true, import: "default" });
export const customPhoto = n => Object.entries(custom).find(([k]) => k.includes(`/${n}.`))?.[1];

export function Pic({ name, className = "", alt = "", children }) {
  const src = customPhoto(name);
  return src ? <img className={`pic ${className}`} src={src} alt={alt} loading="lazy" /> : <div className={`pic ${className}`} role={alt ? "img" : undefined} aria-label={alt || undefined} aria-hidden={alt ? undefined : true}>{children}</div>;
}

const Truck = ({ x, y, s = 1, flip }) => (
  <g transform={`translate(${x} ${y}) scale(${flip ? -s : s} ${s})`}>
    <ellipse cx="190" cy="152" rx="210" ry="12" fill="#0b1e44" opacity=".22" />
    <rect x="0" y="0" width="270" height="132" rx="8" fill="#fff" />
    <rect x="0" y="96" width="270" height="9" fill="#e11d2e" /><rect x="0" y="105" width="270" height="9" fill="#f58220" /><rect x="0" y="114" width="270" height="9" fill="#12974a" />
    <text x={flip ? -135 : 135} y="62" textAnchor="middle" transform={flip ? "scale(-1 1)" : undefined} fontFamily="Arial Black,Arial,sans-serif" fontWeight="900" fontSize="46" fill="#e11d2e">XYZ</text>
    <text x={flip ? -135 : 135} y="82" textAnchor="middle" transform={flip ? "scale(-1 1)" : undefined} fontFamily="Arial,sans-serif" fontWeight="700" fontSize="12" letterSpacing="5" fill="#14231d">BEVERAGES</text>
    <path d="M276 30h58l36 40v62H276z" fill="#f4f6fa" /><path d="M290 42h38l24 28h-62z" fill="#9fc4e8" />
    <rect x="276" y="104" width="94" height="10" fill="#1b2b52" /><rect x="268" y="128" width="108" height="8" fill="#222" />
    {[50, 120, 300, 340].map(c => <g key={c}><circle cx={c} cy="140" r="19" fill="#151a26" /><circle cx={c} cy="140" r="8" fill="#b9c0cc" /></g>)}
  </g>
);

const Building = ({ x, w, h, fill }) => (
  <g><rect x={x} y={470 - h} width={w} height={h} fill={fill} />
    {Array.from({ length: Math.floor(h / 36) }).map((_, r) => Array.from({ length: Math.floor(w / 34) }).map((__, c) => <rect key={`${r}-${c}`} x={x + 10 + c * 34} y={470 - h + 12 + r * 36} width="20" height="20" fill="#fff" opacity=".35" />))}
  </g>
);

export function HeroScene() {
  return (
    <svg className="h-hero-bg" viewBox="0 0 1440 640" preserveAspectRatio="xMidYMid slice" aria-hidden="true">
      <defs>
        <linearGradient id="sky" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stopColor="#bcdcf7" /><stop offset=".7" stopColor="#eaf4fd" /><stop offset="1" stopColor="#fff" /></linearGradient>
        <linearGradient id="road" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stopColor="#8d99ab" /><stop offset="1" stopColor="#c9d1de" /></linearGradient>
      </defs>
      <rect width="1440" height="640" fill="url(#sky)" />
      <g fill="#fff" opacity=".85"><ellipse cx="260" cy="90" rx="110" ry="26" /><ellipse cx="340" cy="76" rx="70" ry="24" /><ellipse cx="1130" cy="120" rx="130" ry="28" /><ellipse cx="1210" cy="102" rx="80" ry="24" /><ellipse cx="720" cy="60" rx="90" ry="20" /></g>
      <Building x={-20} w={240} h={230} fill="#aab6c8" /><Building x={200} w={170} h={170} fill="#c3ccda" />
      <Building x={1070} w={190} h={190} fill="#c3ccda" /><Building x={1240} w={240} h={250} fill="#aab6c8" />
      <rect y="470" width="1440" height="170" fill="url(#road)" />
      <path d="M0 560h1440" stroke="#fff" strokeWidth="5" strokeDasharray="70 50" opacity=".6" />
      <Truck x={40} y={330} s={1.05} />
      <Truck x={1400} y={330} s={1.05} flip />
    </svg>
  );
}

// People and places for the about / quality / segment images
const Racks = ({ w = 400, h = 300, y0 = 40 }) => (
  <g>
    {[0, 1, 2].map(r => <g key={r}>
      <rect x="0" y={y0 + 70 + r * 80} width={w} height="7" fill="#f58220" />
      {Array.from({ length: Math.floor(w / 52) }).map((_, i) => <rect key={i} x={8 + i * 52} y={y0 + 18 + r * 80} width="44" height="52" rx="2" fill={["#d9a35f", "#c98d45", "#e8c18a", "#e11d2e", "#0b57d0"][(i + r * 2) % 5]} />)}
    </g>)}
    {[0, w - 8].map(x => <rect key={x} x={x} y={y0 - 10} width="8" height={h} fill="#0b57d0" />)}
  </g>
);

export function WorkerArt() {
  return (
    <svg viewBox="0 0 400 420" preserveAspectRatio="xMidYMid slice" className="art-svg" aria-hidden="true">
      <rect width="400" height="420" fill="#2a3a5c" /><rect width="400" height="420" fill="#0b57d0" opacity=".18" />
      <Racks w={400} h={420} y0={20} />
      <path d="M90 420c0-90 30-140 110-140s110 50 110 140z" fill="#14246a" />
      <rect x="170" y="236" width="60" height="50" rx="20" fill="#c98a62" />
      <circle cx="200" cy="205" r="46" fill="#d9a07a" /><path d="M152 200c0-36 20-52 52-52s46 18 46 48z" fill="#14246a" /><rect x="152" y="192" width="106" height="10" rx="5" fill="#14246a" />
      <text x="200" y="352" textAnchor="middle" fontFamily="Arial Black,Arial,sans-serif" fontWeight="900" fontSize="26" fill="#fff">XYZ</text>
      <text x="200" y="372" textAnchor="middle" fontFamily="Arial,sans-serif" fontWeight="700" fontSize="10" letterSpacing="4" fill="#cfd8ff">BEVERAGES</text>
      <rect x="40" y="318" width="86" height="64" rx="3" fill="#d9a35f" /><rect x="40" y="318" width="86" height="12" fill="#b88543" />
    </svg>
  );
}

export function ForkliftArt() {
  return (
    <svg viewBox="0 0 300 380" preserveAspectRatio="xMidYMid slice" className="art-svg" aria-hidden="true">
      <rect width="300" height="380" fill="#3a465f" /><Racks w={300} h={380} y0={10} />
      <rect y="330" width="300" height="50" fill="#222b3d" />
      <rect x="168" y="120" width="12" height="210" fill="#2b2f3a" /><rect x="190" y="120" width="12" height="210" fill="#2b2f3a" />
      <rect x="40" y="226" width="130" height="14" fill="#2b2f3a" />
      {[0, 1].map(r => [0, 1, 2].map(c => <rect key={`${r}${c}`} x={48 + c * 40} y={170 - r * 0 + (r ? -50 : 0)} width="36" height="48" fill={["#e11d2e", "#d9a35f", "#e8c18a"][c]} stroke="#0003" />))}
      <rect x="170" y="190" width="100" height="100" rx="8" fill="#f2b21c" /><rect x="188" y="130" width="70" height="66" rx="6" fill="#2b2f3a" opacity=".12" />
      <path d="M180 190v-60h70v60" fill="none" stroke="#2b2f3a" strokeWidth="8" /><circle cx="210" cy="332" r="30" fill="#151a26" /><circle cx="210" cy="332" r="12" fill="#aab" /><circle cx="256" cy="320" r="22" fill="#151a26" /><circle cx="256" cy="320" r="9" fill="#aab" />
    </svg>
  );
}

export function ConveyorArt() {
  const bottle = (x, y, s) => (
    <g transform={`translate(${x} ${y}) scale(${s})`}>
      <rect x="-9" y="0" width="18" height="12" rx="2" fill="#e11d2e" />
      <path d="M-9 12h18c0 18 18 22 18 48v150c0 12-8 20-18 20h-18c-10 0-18-8-18-20V60c0-26 18-30 18-48z" fill="#3a0f0c" />
      <rect x="-27" y="92" width="54" height="64" fill="#e11d2e" />
      <text x="0" y="132" textAnchor="middle" fontFamily="'Dancing Script',cursive" fontWeight="700" fontSize="20" fill="#fff">Coca-Cola</text>
      <path d="M-14 70v130" stroke="#fff" strokeOpacity=".28" strokeWidth="5" strokeLinecap="round" />
    </g>
  );
  return (
    <svg viewBox="0 0 800 400" preserveAspectRatio="xMidYMid slice" className="art-svg" aria-hidden="true">
      <defs><linearGradient id="cv" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stopColor="#7d1018" /><stop offset=".6" stopColor="#3b1a2a" /><stop offset="1" stopColor="#1a2c52" /></linearGradient></defs>
      <rect width="800" height="400" fill="url(#cv)" />
      <g opacity=".55">{Array.from({ length: 14 }).map((_, i) => <circle key={i} cx={30 + i * 58} cy={40 + (i % 3) * 18} r="18" fill="#ffd45a" opacity=".22" />)}</g>
      <rect y="330" width="800" height="70" fill="#1e2433" /><rect y="326" width="800" height="8" fill="#6f7a92" />
      {[0, 1, 2, 3, 4, 5, 6].map(i => bottle(60 + i * 118, 130 + (i % 2) * 14, 0.9 + (i % 3) * 0.03))}
    </svg>
  );
}

const Store = () => <g><rect x="40" y="120" width="220" height="110" fill="#f4e9d8" /><path d="M30 120h240l-16-44H46z" fill="#e11d2e" /><path d="M46 76h42l-6 44h-42zM130 76h42l-6 44h-42zM214 76h40l10 44h-44z" fill="#fff" opacity=".85" /><rect x="60" y="150" width="70" height="80" fill="#9fc4e8" /><rect x="150" y="160" width="86" height="70" fill="#f58220" opacity=".5" /><rect x="140" y="130" width="100" height="16" fill="#0b57d0" /></g>;
const Hotel = () => <g><rect x="50" y="90" width="200" height="140" fill="#6b4a37" />{[0, 1, 2, 3, 4].map(i => <rect key={i} x={64 + i * 38} y="104" width="24" height="30" fill="#ffd87a" />)}<rect x="50" y="150" width="200" height="14" fill="#3e2b20" /><rect x="110" y="178" width="80" height="52" fill="#2a1d16" /><rect x="116" y="184" width="68" height="46" fill="#ffd87a" opacity=".8" /></g>;
const Inst = () => <g><rect x="50" y="70" width="200" height="160" fill="#dfe7f3" />{[0, 1, 2, 3].map(r => [0, 1, 2, 3, 4].map(c => <rect key={`${r}${c}`} x={62 + c * 36} y={82 + r * 34} width="22" height="22" fill="#6aa4dd" />))}<rect x="130" y="196" width="40" height="34" fill="#1b2b52" /></g>;
const Dist = () => <g><rect x="30" y="130" width="240" height="100" fill="#cfd7e6" /><rect x="30" y="120" width="240" height="14" fill="#0b57d0" />{[0, 1, 2, 3].map(i => <g key={i}><rect x={44 + i * 58} y="150" width="44" height="80" fill="#8c98b2" /><rect x={50 + i * 58} y="158" width="32" height="6" fill="#fff" opacity=".6" /></g>)}</g>;
const Events = () => <g><rect width="300" height="260" fill="#241048" /><g opacity=".8">{[0, 1, 2, 3, 4].map(i => <path key={i} d={`M${30 + i * 60} 0 L${i * 60 - 20 + 60} 260 L${i * 60 + 100} 260 Z`} fill={["#e11d2e", "#0b57d0", "#f58220", "#7a3fb5", "#12974a"][i]} opacity=".25" />)}</g><rect x="60" y="170" width="180" height="14" fill="#0e0820" />{Array.from({ length: 12 }).map((_, i) => <circle key={i} cx={30 + i * 22} cy={225 + (i % 2) * 6} r="9" fill="#0e0820" />)}</g>;
const Rural = () => <g><rect width="300" height="260" fill="#cfe6f6" /><path d="M0 210l70-90 50 50 60-100 120 140v50H0z" fill="#4b7d6d" /><path d="M0 235l80-50 70 34 80-44 70 30v55H0z" fill="#2f5a46" /><path d="M170 70l30 40h-60z" fill="#fff" opacity=".8" /></g>;

export function SegmentArt({ kind }) {
  const Map = { retail: Store, horeca: Hotel, inst: Inst, dist: Dist, events: Events, rural: Rural }[kind];
  const bg = { retail: "#ffe9d6", horeca: "#e8ddcf", inst: "#e3ecf9", dist: "#e3e9f5", events: "#241048", rural: "#cfe6f6" }[kind];
  return <svg viewBox="0 0 300 260" preserveAspectRatio="xMidYMid slice" className="art-svg" aria-hidden="true"><rect width="300" height="260" fill={bg} /><Map /><rect y="230" width="300" height="30" fill="#000" opacity=".1" /></svg>;
}

export function HandshakeArt() {
  return (
    <svg viewBox="0 0 300 200" preserveAspectRatio="xMidYMid slice" className="art-svg" aria-hidden="true">
      <rect width="300" height="200" fill="#dbe8f7" />
      <path d="M-10 120l100-20 50 30-30 40H-10z" fill="#14246a" /><path d="M310 120l-100-20-50 30 30 40h120z" fill="#2a3a5c" />
      <path d="M80 104l60-22 78 20 8 34-70 40-70-24z" fill="#d9a07a" />
      <g stroke="#b97f58" strokeWidth="3" strokeLinecap="round" fill="none"><path d="M120 128l36 14M132 118l36 14M146 110l30 12" /></g>
      <rect x="52" y="112" width="30" height="46" fill="#fff" transform="rotate(-16 67 135)" /><rect x="218" y="112" width="30" height="46" fill="#fff" transform="rotate(16 233 135)" />
    </svg>
  );
}
