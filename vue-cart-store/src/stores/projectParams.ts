import {defineStore} from 'pinia'

type Product = {
    id: number;
    name: string;
    price: number;
    imageURL: string;
};

type CartItem = Product & { quantity: number };

export const useCartStore = defineStore('cart', {
    state: () => ({
        products: [
            {id: 1, name: 'Violin', price: 85, imageURL: "../assets/img/1.png"},
            {id: 2, name: 'Lego set - Castle', price: 26, imageURL: "../assets/img/2.png"},
            {id: 3, name: 'Drone DJI Mavic 3 mini', price: 800, imageURL: "../assets/img/3.png"},
        ] as Product[],
        cart: [] as CartItem[],
    }),

    actions: {
        addToCart(product: Product) {
            const existingProduct = this.cart.find(item => item.id === product.id);
            if (existingProduct) {
                existingProduct.quantity += 1;
            } else {
                this.cart.push({...product, quantity: 1});
            }
        },

        removeFromCart(productId: number) {
            const productIndex = this.cart.findIndex(item => item.id === productId);
            if (productIndex !== -1) {
                this.cart.splice(productIndex, 1);
            }
        },

        getTotal() {
            return this.cart.reduce((total, item) => total + item.price * item.quantity, 0);
        }
    },

    getters: {
        getProducts(state) {
            return state.products;
        },

        getCart(state) {
            return state.cart;
        }
    }
});
