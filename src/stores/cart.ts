import type { CartItem, Product } from '@/types'
import { defineStore } from 'pinia'

export const useCartStore = defineStore({
  id: 'cart',
  state: () => ({
    cart: [] as CartItem[]
  }),
  getters: {
    getCart: (state) => state.cart,
    getTotalCost: (state) => state.cart.reduce((sum, item) => { return sum + (item.price * item.quantity) }, 0)
  },
  actions: {
    /**
     * Adds a product to the cart
     * If the product is already in the cart, increases the quantity by 1
     */
    add (product: Product) {
      if (this.cart.find(item => item.id === product.id)) {
        this.increment(product);
      } else {
        this.cart.push({ ...product, quantity: 1 });
      }
    },

    /**
     * Increases the quantity of a cart item by 1
     */
    increment (product: Product) {
      const index = this.cart.findIndex((item) => item.id === product.id);

      if (!~index) { return; }

      this.cart[index].quantity++;
    },

    /**
     * Decreases the quantity of a cart item by 1
     * The item is removed from the cart if the quantity becomes 0
     */
    decrement (product: Product) {
      const index = this.cart.findIndex((item) => item.id === product.id);
      if (!~index) { return; }

      this.cart[index].quantity--;

      if (this.cart[index].quantity <= 0) {
        this.remove(product);
      }
    },
  
    /**
     * Removes the product from the cart
     */
    remove (product: Product) {
      this.cart = this.cart.filter((item) => item.id !== product.id);
    }
  }
})
