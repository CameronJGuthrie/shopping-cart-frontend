<script lang="ts">
import type { Product } from "@/types";
import { defineComponent, type PropType } from "vue"

import ProductItem from "@/components/ProductItem.vue";

export default defineComponent({
  components: { ProductItem },
  props: {
    products: { type: Array as PropType<Product[]>, required: true }
  }
});
</script>

<template>
  <div>
    <h4 class="text-xl mb-4">The Shop</h4>
      <div class="grid grid-cols-12 gap-4">
      <product-item
        v-for="product in products"
        :product="product"
        :key="product.id"
        class="col-span-12 sm:col-span-6 md:col-span-4 lg:col-span-3"
      />
    </div>
  </div>
</template>
