<script lang="ts">
import {defineComponent} from 'vue'
import { useCartStore } from '../stores/projectParams';

export default defineComponent({
  name: "Cart",
  computed: {
    cart() {
      const cartStore = useCartStore();
      return cartStore.getCart;
    },
    totalCost() {
      const cartStore = useCartStore();
      return cartStore.getTotal();
    }
  },
  methods: {
    removeFromCart(productId: number): void {
      const productIndex = this.cart.findIndex(item => item.id === productId);
      if (productIndex !== -1) {
        this.cart.splice(productIndex, 1);
      }
    },
  }
})
</script>

<template>
  <div class="cart">
    <h2>Shopping Cart</h2>
    <div v-if="cart.length > 0" class="cart-items">
      <div v-for="item in cart" :key="item.id" class="cart-item">
        <img src="../assets/images/1.png" alt="product image" class="cart-item-image" />
        <div class="cart-item-details">
          <p>{{ item.name }} x {{ item.quantity }}</p>
          <p>${{ item.price * item.quantity }}</p>
        </div>
        <button @click="removeFromCart(item.id)" class="remove-btn">Remove</button>
      </div>
      <h3>Total: ${{ totalCost }}</h3>
    </div>
    <div v-else>
      <p>Your cart is empty.</p>
    </div>
  </div>
</template>

<style scoped>
.cart {
  padding: 20px;
  max-width: 1200px;
  margin: auto;
}

h2 {
  text-align: center;
  margin-bottom: 30px;
}

.cart-items {
  display: flex;
  flex-direction: column;
  gap: 15px;
}

.cart-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px;
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.cart-item:hover {
  transform: translateY(-5px);
  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.15);
}

.cart-item-image {
  width: 80px;
  height: 80px;
  object-fit: cover;
  border-radius: 10px;
}

.cart-item-details {
  flex-grow: 1;
  padding-left: 15px;
}

.remove-btn {
  padding: 8px 15px;
  background-color: #dc3545;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.remove-btn:hover {
  background-color: #c82333;
}
</style>