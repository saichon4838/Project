<template>
<div>

    <div>
        <b-card align="center" class="font2 " header="สกินแคร์">
            <!-- <b-card title="Liplover No.01" img-src="/Product01.png" img-alt="Image" img-top tag="article" style="max-width: 20rem;" class=" font1 ml-5 mr-5 mt-5"> -->
            <b-card :title="product.productName" :img-src="`${product.image}`" img-alt="Image" img-top tag="article" style="max-width: 20rem;" class=" font1 ml-5 mr-5 mt-5">
                <b-card-text>
                    {{product.price}}
                    <!-- Lip Lover ลิปแมทจิ๋ว ของแท้แบรนด์ไทย 10 สีสุดปัง ติดทนนานกันน้ำกันเหงื่อแท่งเล็กพกพาสะดวก -->
                </b-card-text>
                <div align="end">
                    <b-button block type="submit" variant="outline-primary" @click="$bvModal.show('modal-detail')">รายละเอียดสินค้า</b-button>
                    <!-- <b-button block type="submit" variant="outline-primary">เพิ่มใส่ตะกร้า</b-button> -->
                </div>
            </b-card>

            <div>
                <b-modal id="modal-detail" centered :title="product.productName">
                    <div>
                        <b-row no-gutters>
                            <b-col md="4">
                                <b-card-img :src="product.image" alt="Image" style="max-width:15rem;" class="rounded-0"></b-card-img>
                            </b-col>
                            <b-col md="8">
                                <b-card-text>
                                    {{product.productDetail}}
                                </b-card-text>
                                <v-divider></v-divider>
                                <b-card-text class="font">
                                    <b> {{product.price}}฿ </b>
                                </b-card-text>
                            </b-col>
                        </b-row>
                        <v-divider></v-divider>
                        <b-card-text>
                            <b-card-title primary-title>
                                <b> <span class="font"> รีวิวจากลูกค้า </span></b>
                            </b-card-title>
                            <div align="end">
                                <b-form-rating style="text-end " color="#ff8800" id="rating-inline" inline value="3" no-border></b-form-rating>
                            </div>
                            <b-row no-gutters>
                                <b-col md="2">
                                    <b-img v-bind="mainProps" src="/jk.jpg" style="max-width:5rem;" rounded="circle" alt="Circle image"></b-img>
                                </b-col>
                                <b-col md="8">
                                    <b-card-text class="font4 ml-3">
                                        <b> JK1997 </b>
                                    </b-card-text>
                                    <b-card-text class="font5 ml-3">
                                        ได้รับสินค้าแล้ว
                                    </b-card-text>
                                </b-col>
                            </b-row>
                        </b-card-text>
                    </div>
                    <template #modal-footer="{ok}">
                        <b-button size="sm" style="color:#fff" variant="info" @click="ok()">
                            หยิบใส่ตะกร้า
                        </b-button>
                    </template>
                </b-modal>
            </div>
        </b-card>

        <!-- <template>
            <div>
                <v-card class="my-12 ml-5 mr-5" max-width="300" min-width="300" max-height="580" min-height="580">
                    <a @click="getcomment(post.id)">
                        <div>
                            
                            <v-img height="350" :src="`${post.image}`"></v-img>
                            <nuxt-link :to="{ name: 'post-id', params: { id: post.secretid } }"></nuxt-link>
                            <v-card-text>
                                <div class="card-text font1"> {{ post.name }}</div>
                            </v-card-text>
                        </div>
                        <v-card-text>
                           
                            <b>
                                <div class="card-text font1"> ฿ {{ post.price }}</div>
                            </b>
                        </v-card-text>
                    </a>

                    <div class="d-flex justify-end ">
                        <form @submit.prevent="addcart()">
                            <div v-if="post.onstock == true">
                                <v-btn class="ma-3" fab color="pink lighten-1" elevation="2" type="submit">
                                    <v-icon dense style="color:white ">mdi-cart</v-icon>
                                </v-btn>
                            </div>
                            <div v-else>
                                สินค้าหมด
                            </div>
                        </form>
                    </div>
                </v-card>

                <v-dialog v-model="dialog" :overlay="false" max-width="600px" transition="dialog-transition">
                    <v-card>
                        <v-card-title primary-title>
                            {{post.name}}
                        </v-card-title>
                        <v-divider></v-divider>
                        <v-card-text>
                            <div class="d-flex justify-end">
                                <v-row>
                                    <v-img max-height="300" max-width="300" contain :src="`${post.image}`"></v-img>
                                </v-row>
                 
                                <v-divider></v-divider>
                                <div>
                                    <div v-if="post.pdetail === null">
                                      
                                        ไม่มีรายละเอียดสินค้า
                                    </div>
                                    <div v-else>
                                     
                                        <p style="text-indent: 2.5em;"> {{post.pdetail}} </p>
                                    </div>
                                    <v-divider></v-divider>
                                    <b>
                                        <div class="font"> ฿ {{ post.price }} </div>
                                    </b>
                                </div>
                            </div>
                            <div class="d-flex justify-end ">
                                <form @submit.prevent="addcart()">
                                    <div v-if="post.onstock == true">
                                        <v-btn class="ma-3" color="pink lighten-1" elevation="" type="submit">
                                     
                                            <span class="white--text font1">หยิบใส่ตะกร้า</span>
                                        </v-btn>
                                    </div>
                                    <div v-else>
                                        สินค้าหมด
                                    </div>
                                </form>
                            </div>
                        </v-card-text>
                        <v-divider></v-divider>
                        <v-card-text>
                            <v-card-title primary-title>
                                <b> <span class="font"> รีวิวจากลูกค้า </span></b>
                            </v-card-title>
                            <v-card-text>
                                <v-simple-table>
                                    <thead>
                                        <tr>
                                            <th>ชื่อลูกค้า</th>
                                            <th>รีวิวจากลูกค้า</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr v-for="index, i in commentlist" :key="i">
                                            <td>{{index.username}}</td>
                                            <td>{{index.comment}}</td>
                                        </tr>
                                    </tbody>
                                </v-simple-table>
                            </v-card-text>
                        </v-card-text>
                    </v-card>
                </v-dialog>

            </div>
        </template> -->

    </div>
</div>
</template>

<script>

export default {

    // name:'product',
    props:{
        product:{}
    },
    // data: () => {
    //     return {
    //         dialog: false,
    //         producttocart: {
    //             sid: {},
    //             pid: {},
    //             qty: 1,
    //         },
    //         productdata: {
    //             sid: null,
    //             name: "ProductName",
    //             price: null,
    //         },
    //         commentlist: []
    //     }
    // },
    // props: {
    //     post: Object,
    // },
    // async created() {
    //     // console.log(this.post.id)
    // },
    methods: {
        // async addcart() {
        //     this.producttocart.sid = this.post.id
        //     this.producttocart.pid = this.post.pid
        //     let cartstatus = await Core.post(`/cart/add`, this.producttocart);
        //     // console.log(cartstatus);
        //     let toast = this.$toasted.show("ท่านได้เพิ่มสินค้าลงตะกร้า", {
        //         type: "success",
        //         theme: "toasted-primary",
        //         position: "top-right",
        //         duration: 5000
        //     });
        // },
        async console(props) {
            console.log(props)
            // this.dialog = true
        },
        // async getcomment(x) {
        //     console.log(x)
        //     let commentraw = await Core.get(`/comment/product/` + x)
        //     // http://localhost:8080/comment/product/48
        //     // console.log(commentraw)
        //     this.commentlist = commentraw.comment
        //     this.dialog = true
        // }
    },
    created(){
        this.console()
    }
};
</script>

<style>

</style>
