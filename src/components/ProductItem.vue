<script lang="ts">
import type { Product } from "@/types";
import { defineComponent, type PropType } from "vue"
import { useCartStore } from "@/stores/cart";

const cartStore = useCartStore();

export default defineComponent({
  props: {
    product: { type: Object as PropType<Product>, required: true }
  },
  computed: {
    cartStore () {
      return cartStore;
    }
  }
});
</script>

<template>
  <div class="p-3 shadow-md bg-slate-800">
    <div class="flex flex-col">
      <span class="text-lg mr-auto">{{ product.name }}</span>
      <span>$ {{ product.price }}</span>
    </div>

    <div class="flex mt-2">
      <button
        class="bg-gray-700 border px-3 mx-auto"
        @click="cartStore.add(product)"
      >
        Add to Cart
      </button>
    </div>
  </div>
</template>
