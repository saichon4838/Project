<template>
<div>
    <b-carousel id="carousel-1" v-model="slide" :interval="4000" controls indicators background="#ababab" contain style="text-shadow: 1px 1px 2px #333;" @sliding-start="onSlideStart" @sliding-end="onSlideEnd">

        <b-carousel-slide img-src="/Banner_Slide1.jpg" style="width:1905px; height:920px"></b-carousel-slide>
        <b-carousel-slide img-src="/Banner_Slide2.jpg" style="width:1905px; height:920px"></b-carousel-slide>
        <b-carousel-slide img-src="/Banner_Slide3.jpg" style="width:1905px; height:920px"></b-carousel-slide>
        <b-carousel-slide img-src="/Banner_Slide1-2.jpg" style="width:1905px; height:920px"></b-carousel-slide>

    </b-carousel>

    <div class="mt-5 ml-5 mr-5 ">
        <b-card-group deck>
            <b-card align="center" class="font2" header="สินค้ามาใหม่">
                <b-card-text>
                    <div align="start">
                        <b-card title="Liplover No.01" img-src="/Product01.png" img-alt="Image" img-top tag="article" style="max-width: 20rem;" class="font1 ml-5 mr-5 mt-5">
                            <b-card-text>
                                &nbsp;&nbsp;&nbsp;&nbsp; Lip Lover ลิปแมทจิ๋ว ของแท้แบรนด์ไทย 10 สีสุดปัง ติดทนนานกันน้ำกันเหงื่อแท่งเล็กพกพาสะดวก
                            </b-card-text>
                            <b-card-text align="end" class="font">
                                59฿
                            </b-card-text>
                            <div align="end">
                                <b-button block type="submit" variant="outline-primary">เพิ่มใส่ตะกร้า</b-button>
                            </div>
                        </b-card>
                    </div>
                </b-card-text>
            </b-card>
        </b-card-group>
    </div>

    <div class="mt-5 ml-5 mr-5 ">
        <b-card-group deck>
            <b-card align="center" class="font2" header="สินค้าขายดี">
                <b-card-text>
                    <div align="start">
                        <b-card title="JOJU Collagen" img-src="/Product13.jpg" img-alt="Image" img-top tag="article" style="max-width: 20rem;" class="font1 ml-5 mr-5 mt-5">
                            <b-card-text>
                                &nbsp;&nbsp;&nbsp;&nbsp; JOJUCOLLAGEN ลดสิวผิวขาวใส ที่เหมาะสมกับใครหลายๆคน ทั้งหญิงหรือชาย สามารถทานได้หมด
                                ทานง่าย เคี้ยวได้ ไม่ขม ไม่คาว ทานยายากก็ทานได้
                            </b-card-text>
                            <b-card-text align="end" class="font">
                                290฿
                            </b-card-text>
                            <div align="end">
                                <b-button block type="submit" variant="outline-primary">เพิ่มใส่ตะกร้า</b-button>
                            </div>
                        </b-card>
                    </div>
                </b-card-text>
            </b-card>
        </b-card-group>
        <pre>{{categorydata}}</pre>
    </div>

</div>
</template>

<script>
import firebase from '@/plugins/firebase'
import { 
    getFirestore,
    collection,
    getDocs,
    getDoc,
    addDoc,
    updateDoc,
    deleteDoc,
    doc
 } from 'firebase/firestore';
export default {
    data() {
        return {
            categorydata: {},
        }
    },
    methods:{
        async getCategory() {
            const db = getFirestore()
            const CategoryRef = collection(db, "Category")
            const CategoryDoc = await getDocs(CategoryRef)
            console.log(CategoryDoc)
            // this.categorydata = CategoryDoc.data()
        }
        // async onSubmit() {
        //     const db = getFirestore()
        //     const querySnapshot = await getDocs(collection(db, "Category"));
        //     console.log(querySnapshot.data())

        // },
    },
    async created(){
        await this.getCategory()
    }
}
</script>

<style>

</style>
