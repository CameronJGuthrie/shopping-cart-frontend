<script lang="ts">
import { useCartStore } from "@/stores/cart";
import type { CartItem } from "@/types";
import { defineComponent, type PropType } from "vue"

const cartStore = useCartStore();

export default defineComponent({
  props: {
    item: { type: Object as PropType<CartItem>, required: true }
  },
  computed: {
    cartStore () {
      return cartStore;
    },
    itemCostTotal () {
      return this.item.price * this.item.quantity;
    }
  }
});
</script>

<template>
  <div class="flex flex-row flex-nowrap gap-2">
    <div class="grid grid-cols-12 grow">
      <div class="col-span-5">{{ item.name }}</div>
      <div class="col-span-2">{{ item.quantity }}</div>
      <div class="col-span-5">${{ itemCostTotal }} ({{ item.price }}ea)</div>
    </div>

    <div class="flex flex-row gap-2 w-[100px]">
      <button class="cart-button dec" @click="cartStore.decrement(item)">-</button>
      <button class="cart-button inc mr-auto" @click="cartStore.increment(item)">+</button>
      <button class="cart-button del" @click="cartStore.remove(item)">x</button>
    </div>
  </div>
</template>

<style scoped>
.cart-button {
  min-width: 0px;
  width: 24px;
  height: 24px;
  line-height: 0;
  font-size: 16px;
  border: 1px solid white;
}
.cart-button.inc {
  background-color: rgba(135, 135, 135, 0.2);
}

.cart-button.dec {
  background-color: rgba(135, 135, 135, 0.2);
}

.cart-button.del {
  background-color: rgba(128, 0, 0, 0.5);
}
</style>