"use client";
import { STORAGE_WISHLIST_IDENTIFIER } from "@/utils/config";
import { createContext, useContext, useEffect, useReducer } from "react";

interface WishlistState {
  wishlistItems: WishlistItem[];
}

interface WishlistContextType {
  addToWishlist: (item: WishlistItem) => void;
  wishlistItems: WishlistItem[];
}

//Sace wishlist to local storage
const saveWishlistToLocalStorage = (state: WishlistState) => {
  localStorage.setItem(STORAGE_WISHLIST_IDENTIFIER, JSON.stringify(state));
};

// Initial state for the wishlist
const initialState: WishlistState = { wishlistItems: [] };

// Wishlist actions
type WishlistAction =
  | { type: "ADD_ITEM_TO_WISHLIST"; payload: WishlistItem }
  | { type: "SET_WISHLIST_STORE"; payload: WishlistState }
  | { type: "CLEAR_ITEMS" };

function wishlistReducer(
  state: WishlistState,
  action: WishlistAction
): WishlistState {
  switch (action.type) {
    case "ADD_ITEM_TO_WISHLIST": {
      const existingItemIndex = state.wishlistItems.findIndex(
        (item) => item.id === action.payload.id
      );

      // If item already exists, remove item
      if (existingItemIndex >= 0) {
        const updatedItems = {
          ...state,
          wishlistItems: state.wishlistItems.filter(
            (item) => item.id !== action.payload.id
          ),
        };
        saveWishlistToLocalStorage(updatedItems);
        return updatedItems;
      }

      // If item doesn't exist, add it to the wishlist
      const newState = {
        ...state,
        wishlistItems: [...state.wishlistItems, action.payload],
      };
      saveWishlistToLocalStorage(newState);
      return newState;
    }
    case "CLEAR_ITEMS": {
      const newState = { ...state, wishlistItems: [] };
      saveWishlistToLocalStorage(newState);
      return newState;
    }
    case "SET_WISHLIST_STORE": {
      return action.payload;
    }
    default:
      return state;
  }
}

//Create wishlist context
const WishlistContext = createContext<WishlistContextType | undefined>(
  undefined
);

//Create wishlist provider
export function WishlistProvider({ children }: { children: React.ReactNode }) {
  const [state, dispatch] = useReducer(wishlistReducer, initialState);

  // Add item to wishlist
  const addToWishlist = (item: WishlistItem) => {
    dispatch({ type: "ADD_ITEM_TO_WISHLIST", payload: item });
  };

  useEffect(() => {
    const storedWishlist = localStorage.getItem(STORAGE_WISHLIST_IDENTIFIER);
    dispatch({
      type: "SET_WISHLIST_STORE",
      payload: storedWishlist
        ? JSON.parse(storedWishlist)
        : { wishlistItems: [] },
    });
  }, []);

  return (
    <WishlistContext.Provider
      value={{
        wishlistItems: state.wishlistItems,
        addToWishlist,
      }}
    >
      {children}
    </WishlistContext.Provider>
  );
}

// Custom hook to use the wishlist context
export function useWishlist(): WishlistContextType {
  const context = useContext(WishlistContext);
  if (!context) {
    throw new Error("useWishlist must be used within a WishlistProvider");
  }
  return context;
}
