<script lang="ts">
import {defineComponent} from 'vue'
import { useCartStore } from '../stores/projectParams';

type Product = {
  id: number;
  name: string;
  price: number;
};

export default defineComponent({
  name: "ProductList",
  computed: {
    products() {
      const cartStore = useCartStore();
      return cartStore.getProducts;
    }
  },
  methods: {
    addToCart(product: Product) {
      const cartStore = useCartStore();
      cartStore.addToCart(product);
    }
  }
})
</script>

<template>
  <div class="product-list">
    <h2>Product List</h2>
    <div class="products">
      <div v-for="product in products" :key="product.id" class="product-card">
<!--        <img :src="product.imageURL" alt="product image" class="product-image" />-->
        <img src="../assets/images/1.png" alt="product image" class="product-image" />
        <div class="product-details">
          <h3>{{ product.name }}</h3>
          <p class="price">${{ product.price }}</p>
          <button @click="addToCart(product)" class="add-to-cart-btn">Add to Cart</button>
        </div>
      </div>
    </div>
  </div>
</template>


<style scoped>
.product-list {
  padding: 20px;
  max-width: 1200px;
  margin: auto;
}

h2 {
  text-align: center;
  margin-bottom: 30px;
}

.products {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 20px;
}

.product-card {
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.product-card:hover {
  transform: translateY(-10px);
  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.2);
}

.product-image {
  width: 100%;
  height: 200px;
  object-fit: cover;
}

.product-details {
  padding: 20px;
  text-align: center;
}

.product-details h3 {
  font-size: 1.2rem;
  font-weight: bold;
  margin: 10px 0;
}

.price {
  font-size: 1.1rem;
  color: #333;
}

.add-to-cart-btn {
  padding: 10px 20px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.add-to-cart-btn:hover {
  background-color: #0056b3;
}
</style>