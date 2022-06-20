<script lang="ts">
import { defineComponent } from "vue"
import MockProducts from '@/mock/Products.json';
import type { Product } from "@/types";
import ProductList from "@/components/ProductList.vue";
import CartList from "@/components/CartList.vue";

export default defineComponent({
  components: { ProductList, CartList },
  data () {
    return {
      products: MockProducts as Product[]
    }
  }
});
</script>

<template>
  <div>
    <div class="grid grid-cols-12 gap-4">
      <product-list :products="products" class="col-span-7" />
      <cart-list class="col-span-5" />
    </div>
  </div>
</template>
