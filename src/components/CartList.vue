<script lang="ts">
import { useCartStore } from "@/stores/cart";
import { defineComponent } from "vue"
import CartItem from "./CartItem.vue";


const cartStore = useCartStore();

export default defineComponent({
  components: { CartItem },
  computed: {
    cart () {
      return cartStore.getCart;
    },
    cartStore () {
      return cartStore;
    }
  }
});
</script>

<template>
  <div>
    <h4 class="text-xl mb-4">Your Cart (${{ Number(cartStore.getTotalCost).toFixed(2) }})</h4>
    <div class="flex flex-col flex-nowrap bg-neutral-800 p-4">
      <template v-if="cart.length">
        <div class="flex flex-row flex-nowrap gap-2">
          <div class="grid grid-cols-12 grow">
            <div class="col-span-5 text-neutral-500">Name</div>
            <div class="col-span-2 text-neutral-500">Qty</div>
            <div class="col-span-5 text-neutral-500">Total</div>
          </div>
          <div class="w-[100px]"/>
        </div>
      </template>
      <span v-else>Your cart is empty! Start buying stuff!</span>

      <cart-item
        v-for="item in cart"
        :key="item.id"
        :item="item"
      />
    </div>
  </div>
</template>
