<template>
<div>
    <b-card>
        <b-card-text class="mt-4">
            <b class="font2 ml-4" style="color:#F06292">
                สินค้า
            </b>
            <div align="right">
                <b-button style="color:#fff " variant="info" v-b-modal.modal-center-category>เพิ่มสินค้าใหม่</b-button>
                <b-modal id="modal-center-category" centered title="รายละเอียดสินค้า">
                    <b-form @submit="onSubmit">
                        <b-row class="my-1" style="color:#000">
                            <b-col sm="6">
                                <label for="input-small">ชื่อสินค้า</label>
                            </b-col>
                            <b-col sm="6">
                                <b-form-input v-model="form.productName" id="input-small" size="sm" placeholder="กรุณาระบุชื่อสินค้า"></b-form-input>
                            </b-col>
                            <b-col sm="6">
                                <label for="input-small">รหัสสินค้า</label>
                            </b-col>
                            <b-col sm="6">
                                <b-form-input v-model="form.productId" id="input-small" size="sm" placeholder="กรุณาระบุรหัสสินค้า"></b-form-input>
                            </b-col>
                            <b-col sm="6">
                                <label for="input-small">รายละเอียดสินค้า</label>
                            </b-col>
                            <b-col sm="6">
                                <b-form-textarea v-model="form.productDetail" id="textarea-rows" placeholder="Insert text here..." rows="8"></b-form-textarea>
                            </b-col>
                            <b-col sm="6">
                                <div class="mt-3">ภาพสินค้า {{ image ? image.name : '' }}</div>
                            </b-col>
                            <b-col sm="6">
                                <b-form-file ref="file" v-model="image" class="mt-3" plain></b-form-file>
                            </b-col>
                            <b-col sm="6">
                                <label for="input-small">ราคาสินค้าสินค้า</label>
                            </b-col>
                            <b-col sm="6">
                                <b-input-group size="sm" prepend="฿" append=".00">
                                    <b-form-input v-model="form.price" />
                                </b-input-group>
                            </b-col>
                            <b-col sm="6">
                                <label for="input-small">มีสินค้า</label>
                            </b-col>
                            <b-col sm="6">
                                <b-form-input id="input-small" v-model="form.stock" size="sm" placeholder="กรุณาระบุใส่จำนวนสินค้า"></b-form-input>
                            </b-col>
                            <b-col sm="6">
                                <label for="input-small">หมวดหมู่สินค้า</label>
                            </b-col>
                            <b-col sm="6">
                                <b-select style="color:#808080" v-model="form.type" variant="light" id="dropdown-1" text="กรุณาเลือก">
                                    <b-select-option value="สกินแคร์">สกินแคร์</b-select-option>
                                    <b-select-option value="เครื่องสำอางค์">เครื่องสำอางค์</b-select-option>
                                    <b-select-option value="อุปกรณ์สำหรับผม">อุปกรณ์สำหรับผม</b-select-option>
                                    <b-select-option value="ผิวกาย&ของใช้ส่วนตัว">ผิวกาย&ของใช้ส่วนตัว</b-select-option>
                                </b-select>
                            </b-col>
                        </b-row>
                        
                        <b-button size="sm" style="color:#fff" variant="primary" type="submit">
                                บันทึก
                        </b-button>
                    </b-form>
                    <template #modal-footer="{cancel,ok}">

                        <b-button size="sm" style="color:black" variant="outline-secondary" @click="cancel()">
                            ยกเลิก
                        </b-button>
                        <b-button size="sm" style="color:#fff" variant="primary" @click="ok()">
                            บันทึก
                        </b-button>
                    </template>
                </b-modal>
            </div>
        </b-card-text>
    </b-card>
</div>
</template>

<script>

import firebase from '@/plugins/firebase'
import {
    addDoc,
    collection,
    doc,
    getFirestore,
    updateDoc
} from 'firebase/firestore'
import {
    getDownloadURL,
    ref,
    uploadBytes,
    getStorage
} from 'firebase/storage'

export default {
    layout: 'admin',
    data(){
        return{
            form:{
                productId:'',
                productName:'',
                productDetail:'',
                price:0,
                stock:0,
                type:'',
                image:''
            },
            image: ''
        }
    },
    methods:{
        // async handleFileUpload(){
        //     this.file = this.$refs.file.files[0]
        //     console.log(this.file)
        // },
        // async onFileChange(e){
        //     var files = e.target.files || e.dataTransfer.files;
        //     if (!files.length)
        //         return;
        //     this.createImage(files[0]);
        // },
        // createImage(file) {
        // var image = new Image();
        // var reader = new FileReader();
        // var vm = this;

        // reader.onload = (e) => {
        //     vm.image = e.target.result;
        // };
        // reader.readAsDataURL(file);
        // },
        async onSubmit(event){
            event.preventDefault()

            const db = getFirestore()
            const storage = getStorage()
            const ProductRef = collection( db, "Products" )
            const value = {...this.form}
            
            addDoc(ProductRef, value).then((response) => {
                console.log(response)
                const id = response.id
                const ProductDoc = doc(db, "Products", id)
                const ImageRef = ref(storage,`product/image/${id}/${this.image.name}`)
                uploadBytes(ImageRef, this.image).then( async() =>{
                    const downloadURL = await getDownloadURL(ImageRef)
                    await updateDoc(ProductDoc,{image:downloadURL})
                })
            })

        }
    },
}
</script>

<style>

</style>
