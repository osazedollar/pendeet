"use client";
import { STORAGE_CART_IDENTIFIER } from "@/utils/config";
import {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useReducer,
} from "react";

// Define types for cart items and context
interface CartState {
  cartItems: CartItem[];
}

interface CartContextType {
  cartItems: CartItem[];
  addToCart: (item: CartItem) => void;
  removeFromCart: (id: string) => void;
  incQuantity: (id: string) => void;
  decQuantity: (id: string) => void;
  clearCartItems: () => void;
}

// Save cart to local storage
const saveCartToLocalStorage = (state: CartState) => {
  localStorage.setItem(STORAGE_CART_IDENTIFIER, JSON.stringify(state));
};

// Initial state for the cart
const initialState: CartState = { cartItems: [] };

// Cart actions
type CartAction =
  | { type: "ADD_ITEM"; payload: CartItem }
  | { type: "REMOVE_ITEM"; payload: string }
  | { type: "INC_QUANTITY"; payload: string }
  | { type: "DEC_QUANTITY"; payload: string }
  | { type: "SET_CART_STORE"; payload: CartState }
  | { type: "CLEAR_ITEMS" };

// Cart reducer function
function cartReducer(state: CartState, action: CartAction): CartState {
  switch (action.type) {
    case "ADD_ITEM": {
      const existingItemIndex = state.cartItems.findIndex(
        (item) => item.id === action.payload.id
      );

      // If item exists, update the quantity
      if (existingItemIndex >= 0) {
        const updatedItems = state.cartItems.map((item, index) =>
          index === existingItemIndex
            ? { ...item, quantity: item.quantity + action.payload.quantity }
            : item
        );
        const newState = { ...state, cartItems: updatedItems };
        saveCartToLocalStorage(newState);
        return newState;
      }

      // If item doesn't exist, add it to the cart
      const newState = {
        ...state,
        cartItems: [...state.cartItems, action.payload],
      };
      saveCartToLocalStorage(newState);
      return newState;
    }

    case "REMOVE_ITEM": {
      const newState = {
        ...state,
        cartItems: state.cartItems.filter((item) => item.id !== action.payload),
      };
      saveCartToLocalStorage(newState);
      return newState;
    }

    case "INC_QUANTITY": {
      const existingItemIndex = state.cartItems.findIndex(
        (item) => item.id === action.payload
      );

      const updatedItems = state.cartItems.map((item, index) =>
        index === existingItemIndex
          ? {
              ...item,
              quantity: item.quantity + 1,
              // totalPrice: item.unitPrice * item.quantity,
            }
          : item
      );
      const newState = { ...state, cartItems: updatedItems };
      saveCartToLocalStorage(newState);
      return newState;
    }
    case "DEC_QUANTITY": {
      // Find the item
      const itemToDecrement = state.cartItems.find(
        (item) => item.id === action.payload
      );

      //If item is found and quantity is already 1 remove it
      if (itemToDecrement && itemToDecrement.quantity <= 1) {
        const newState = {
          ...state,
          cartItems: state.cartItems.filter(
            (item) => item.id !== action.payload
          ),
        };
        saveCartToLocalStorage(newState);
        return newState;
      }

      //If item is found and quantity is greater than 1  then decrement the item quantity
      if (itemToDecrement && itemToDecrement.quantity > 1) {
        const updatedItems = state.cartItems.map((item) =>
          item.id === action.payload
            ? {
                ...item,
                quantity: item.quantity - 1,
                // totalPrice: item.unitPrice * item.quantity,
              }
            : item
        );

        const newState = { ...state, cartItems: updatedItems };
        saveCartToLocalStorage(newState);
        return newState;
      }

      return state;
    }
    case "CLEAR_ITEMS": {
      const newState = { ...state, cartItems: [] };
      saveCartToLocalStorage(newState);
      return newState;
    }
    case "SET_CART_STORE": {
      return action.payload;
    }

    default:
      return state;
  }
}

//Create cart context
const CartContext = createContext<CartContextType | undefined>(undefined);

//Create cart provider
export function CartProvider({ children }: { children: React.ReactNode }) {
  const [state, dispatch] = useReducer(cartReducer, initialState);

  // Add item to cart
  const addToCart = (item: CartItem) => {
    dispatch({ type: "ADD_ITEM", payload: item });
  };

  // Remove item from cart
  const removeFromCart = (id: string) => {
    dispatch({ type: "REMOVE_ITEM", payload: id });
  };

  //clear items
  const clearCartItems = () => {
    dispatch({ type: "CLEAR_ITEMS" });
  };

  //increase item quantity
  const incQuantity = (id: string) => {
    dispatch({ type: "INC_QUANTITY", payload: id });
  };

  //increase item quantity
  const decQuantity = (id: string) => {
    dispatch({ type: "DEC_QUANTITY", payload: id });
  };

  useEffect(() => {
    const storedCart = localStorage.getItem(STORAGE_CART_IDENTIFIER);
    dispatch({
      type: "SET_CART_STORE",
      payload: storedCart ? JSON.parse(storedCart) : { cartItems: [] },
    });
  }, []);

  //Optimize values to avoid wasted renders
  const value = useMemo(() => {
    return {
      cartItems: state.cartItems,
      addToCart,
      removeFromCart,
      clearCartItems,
      incQuantity,
      decQuantity,
    };
  }, [state.cartItems]);

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

// Custom hook to use the cart context
export function useCart(): CartContextType {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
}
