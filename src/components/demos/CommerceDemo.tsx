import { useState } from "react";
import { Backpack, BookOpen, Coffee, Headphones, Keyboard, LampDesk, Minus, Plus, Search, ShoppingBag, X } from "lucide-react";

const products = [
  { id: "headphones", name: "Everyday headphones", price: 89, category: "Audio", icon: Headphones, tone: "sage" },
  { id: "keyboard", name: "Studio keyboard", price: 79, category: "Workspace", icon: Keyboard, tone: "stone" },
  { id: "lamp", name: "Arc desk lamp", price: 49, category: "Workspace", icon: LampDesk, tone: "sand" },
  { id: "backpack", name: "Essential backpack", price: 65, category: "Everyday", icon: Backpack, tone: "sand" },
  { id: "notebook", name: "Canvas notebook", price: 15, category: "Workspace", icon: BookOpen, tone: "sage" },
  { id: "mug", name: "Sunday ceramic mug", price: 24, category: "Everyday", icon: Coffee, tone: "stone" },
];
const price = (value: number) => new Intl.NumberFormat("en-US", { style: "currency", currency: "USD" }).format(value);

export function CommerceDemo() {
  const [query, setQuery] = useState("");
  const [cart, setCart] = useState<Record<string, number>>({});
  const [cartOpen, setCartOpen] = useState(false);
  const [notice, setNotice] = useState("");
  const filteredProducts = products.filter((product) => `${product.name} ${product.category}`.toLowerCase().includes(query.toLowerCase()));
  const cartCount = Object.values(cart).reduce((sum, quantity) => sum + quantity, 0);
  const subtotal = products.reduce((sum, product) => sum + product.price * (cart[product.id] || 0), 0);
  const changeQuantity = (id: string, difference: number) => {
    setCart((previous) => ({ ...previous, [id]: Math.max(0, (previous[id] || 0) + difference) }));
    const name = products.find((product) => product.id === id)?.name;
    setNotice(`${name}: ${difference > 0 ? "added to" : "removed from"} cart.`);
  };

  return (
    <div className="demo-surface demo-commerce">
      <div className="demo-topbar"><span className="demo-shop-brand">cartify<span>.</span></span><button type="button" className="demo-cart-button" aria-expanded={cartOpen} aria-controls={cartOpen ? "demo-cart" : undefined} onClick={() => setCartOpen(!cartOpen)}><ShoppingBag size={17} /> Cart ({cartCount})</button></div>
      <div className="shop-intro"><p className="demo-kicker">LESS, BUT BETTER</p><h3>Good things. Everyday essentials.</h3><p>Thoughtfully chosen for your desk, and beyond.</p></div>
      {cartOpen && <section className="demo-cart" id="demo-cart" aria-label="Shopping cart"><div className="demo-topbar"><h4>Your cart</h4><button type="button" className="icon-button" aria-label="Close cart" onClick={() => setCartOpen(false)}><X size={18} /></button></div>{cartCount === 0 ? <p className="demo-empty">Your cart is empty. Find something you love below.</p> : <>{products.filter((product) => cart[product.id] > 0).map((product) => <div className="cart-item" key={product.id}><span>{product.name}<small>{price(product.price)}</small></span><div className="quantity-control"><button type="button" aria-label={`Remove one ${product.name}`} onClick={() => changeQuantity(product.id, -1)}><Minus size={13} /></button><span>{cart[product.id]}</span><button type="button" aria-label={`Add one ${product.name}`} onClick={() => changeQuantity(product.id, 1)}><Plus size={13} /></button></div></div>)}<div className="cart-total"><span>Subtotal</span><strong>{price(subtotal)}</strong></div><p className="demo-fine-print">Sample catalog. Checkout and payments are not connected.</p></>}</section>}
      <div className="demo-search"><Search size={16} /><label className="sr-only" htmlFor="product-search">Search sample products</label><input id="product-search" value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Find your next everyday essential..." /></div>
      <div className="demo-products">{filteredProducts.map((product) => <article className="demo-product" key={product.id}><div className={`product-illustration ${product.tone}`}><product.icon size={65} strokeWidth={1.15} aria-hidden="true" /></div><span className="demo-product-category">{product.category}</span><h4>{product.name}</h4><div className="demo-product-bottom"><span>{price(product.price)}</span><button type="button" aria-label={`Add ${product.name} to cart`} onClick={() => changeQuantity(product.id, 1)}><Plus size={15} /> Add{cart[product.id] > 0 ? ` (${cart[product.id]})` : ""}</button></div></article>)}</div>
      {filteredProducts.length === 0 && <p className="demo-empty">No products match "{query}". Try headphones, workspace, or everyday.</p>}
      <p className="sr-only" role="status">{notice}</p>
    </div>
  );
}