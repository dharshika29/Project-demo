import React, { createContext, useContext, useState, useEffect } from 'react';
import { PRODUCTS } from '../data/products';

const CartContext = createContext();

const INITIAL_CART = [
  {
    ...PRODUCTS[0], // Mauve Pink Sequins Net Evening Gown
    qty: 1,
    selectedSize: 'M',
    selectedColor: 'Mauve Pink'
  },
  {
    ...PRODUCTS[1], // Blush Pink Sequins Net Pentagon Gown
    qty: 1,
    selectedSize: 'S',
    selectedColor: 'Light Blush Pink'
  }
];

export function CartProvider({ children }) {
  const [cartItems, setCartItems] = useState(() => {
    try {
      const saved = localStorage.getItem('aura_cart_items');
      if (saved) {
        const parsed = JSON.parse(saved);
        if (Array.isArray(parsed) && parsed.length > 0) return parsed;
      }
    } catch {
      // Fallback
    }
    return INITIAL_CART;
  });

  const [discountCode, setDiscountCode] = useState('');
  const [discountRate, setDiscountRate] = useState(0); // 0.15, 0.40, etc.
  const [discountError, setDiscountError] = useState('');
  const [discountSuccess, setDiscountSuccess] = useState('');
  const [lastOrder, setLastOrder] = useState(null);

  useEffect(() => {
    try {
      localStorage.setItem('aura_cart_items', JSON.stringify(cartItems));
    } catch {
      // Ignore
    }
  }, [cartItems]);

  const addToCart = (product, size = 'M', color = '', quantity = 1) => {
    setCartItems((prev) => {
      const existingIdx = prev.findIndex(
        (item) => item.id === product.id && item.selectedSize === size
      );

      if (existingIdx > -1) {
        const next = [...prev];
        next[existingIdx] = {
          ...next[existingIdx],
          qty: next[existingIdx].qty + quantity
        };
        return next;
      }

      const colorVal = color || (typeof product.colors?.[0] === 'object' ? product.colors[0].name : product.colors?.[0] || 'Default');

      return [
        ...prev,
        {
          ...product,
          qty: quantity,
          selectedSize: size,
          selectedColor: colorVal
        }
      ];
    });
  };

  const removeFromCart = (id, size) => {
    setCartItems((prev) =>
      prev.filter((item) => !(item.id === id && item.selectedSize === size))
    );
  };

  const updateQuantity = (id, size, delta) => {
    setCartItems((prev) =>
      prev
        .map((item) => {
          if (item.id === id && item.selectedSize === size) {
            const newQty = item.qty + delta;
            return newQty > 0 ? { ...item, qty: newQty } : null;
          }
          return item;
        })
        .filter(Boolean)
    );
  };

  const clearCart = () => {
    setCartItems([]);
    setDiscountCode('');
    setDiscountRate(0);
    setDiscountSuccess('');
  };

  const applyDiscount = (code) => {
    const clean = code.trim().toUpperCase();
    if (clean === 'AURA40') {
      setDiscountCode('AURA40');
      setDiscountRate(0.4);
      setDiscountSuccess('✦ Code AURA40 applied: 40% Spring Couture Discount!');
      setDiscountError('');
      return true;
    } else if (clean === 'AURA-FIRST-15' || clean === 'AURA15') {
      setDiscountCode('AURA-FIRST-15');
      setDiscountRate(0.15);
      setDiscountSuccess('✦ Code AURA15 applied: 15% VIP Salon Privilege!');
      setDiscountError('');
      return true;
    } else {
      setDiscountError('Invalid invitation code. Try AURA40 or AURA15');
      setDiscountSuccess('');
      return false;
    }
  };

  const removeDiscount = () => {
    setDiscountCode('');
    setDiscountRate(0);
    setDiscountSuccess('');
    setDiscountError('');
  };

  const cartCount = cartItems.reduce((acc, item) => acc + item.qty, 0);
  const cartSubtotal = cartItems.reduce((acc, item) => acc + item.price * item.qty, 0);
  const discountAmount = Math.round(cartSubtotal * discountRate);
  const shippingFee = 0; // Complimentary White-Glove Courier worldwide
  const cartTotal = Math.max(0, cartSubtotal - discountAmount + shippingFee);

  return (
    <CartContext.Provider
      value={{
        cartItems,
        cartCount,
        cartSubtotal,
        discountCode,
        discountRate,
        discountAmount,
        discountError,
        discountSuccess,
        shippingFee,
        cartTotal,
        addToCart,
        removeFromCart,
        updateQuantity,
        clearCart,
        applyDiscount,
        removeDiscount,
        lastOrder,
        setLastOrder
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
}
