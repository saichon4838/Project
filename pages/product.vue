<template>
  <div b-show="ProductTab === 0">
        <Card-Product
          v-for="(product, index) in productData"
          :key="index"
          :product="product"
        />
    </div>
</template>

<script>
import firebase from '@/plugins/firebase'
import {
  getFirestore,
  getDocs,
  collection
} from 'firebase/firestore'
export default {
    data() {
        return {
            productData:[],
        }
    },
    async created(){
        await this.getProduct()
    },
    methods:{
        async getProduct() {
            const db = getFirestore()
            const ProductRef = collection(db, "Products")
            const ProductDoc = await getDocs(ProductRef)
            let Product = ProductDoc.docs.map((doc) => ({
                id:doc?.id,
                ...doc?.data()
            }))
            this.productData = Product
        }
    },
}
</script>

<style>

</style>