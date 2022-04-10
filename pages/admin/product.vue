<template>
<div>
    <b-card>
        <b-card-text class="mt-3">
            <b class="font2 ml-4" style="color:#F06292">
                สินค้า
            </b>
        </b-card-text>
        <div align="right">
            <b-button style="color:#fff" variant="info" v-b-modal.modal-center-product>เพิ่มสินค้า</b-button>
        </div>
        <b-modal id="modal-center-product" size="lg" centered title="เพิ่มสินค้า">
            <div align="center" class="mt-2">
                <b-card>
                    <b-card-text class="font2 mt-2">รายละเอียดสินค้า</b-card-text>
                    <b-form class="mt-3" @submit="onSubmit">
                        <b-row class="my-1" style="color:#000">
                            <b-col sm="5">
                                <label for="input-small">ชื่อสินค้า</label>
                            </b-col>
                            <b-col sm="5">
                                <b-form-input v-model="form.productName" id="input-small" size="sm" placeholder="กรุณาระบุชื่อสินค้า"></b-form-input>
                            </b-col>
                            <b-col sm="5">
                                <label for="input-small">รหัสสินค้า</label>
                            </b-col>
                            <b-col sm="5">
                                <b-form-input v-model="form.productId" id="input-small" size="sm" placeholder="กรุณาระบุรหัสสินค้า"></b-form-input>
                            </b-col>
                            <b-col sm="5">
                                <label for="input-small">รายละเอียดสินค้า</label>
                            </b-col>
                            <b-col sm="5">
                                <b-form-textarea v-model="form.productDetail" id="textarea-rows" placeholder="Insert text here..." rows="8"></b-form-textarea>
                            </b-col>
                            <b-col sm="5">
                                <div class="mt-3">ภาพสินค้า</div>
                            </b-col>
                            <b-col sm="5">
                                <b-form-file ref="file" v-model="image" class="mt-3" plain></b-form-file>
                            </b-col>
                            <b-col sm="5">
                                <label for="input-small">ราคาสินค้าสินค้า</label>
                            </b-col>
                            <b-col sm="5">
                                <b-input-group size="sm" prepend="฿" append=".00">
                                    <b-form-input v-model="form.price" />
                                </b-input-group>
                            </b-col>
                            <b-col sm="5">
                                <label for="input-small">มีสินค้า</label>
                            </b-col>
                            <b-col sm="5">
                                <b-form-input id="input-small" v-model="form.stock" size="sm" placeholder="กรุณาระบุใส่จำนวนสินค้า"></b-form-input>
                            </b-col>
                            <b-col sm="5">
                                <label for="input-small">หมวดหมู่สินค้า</label>
                            </b-col>
                            <b-col sm="5">
                                <b-select style="color:#808080" v-model="form.type" variant="light" id="dropdown-1" text="กรุณาเลือก">
                                    <b-select-option value="สกินแคร์">สกินแคร์</b-select-option>
                                    <b-select-option value="เครื่องสำอางค์">เครื่องสำอางค์</b-select-option>
                                    <b-select-option value="อุปกรณ์สำหรับผม">อุปกรณ์สำหรับผม</b-select-option>
                                    <b-select-option value="ผิวกาย&ของใช้ส่วนตัว">ผิวกาย&ของใช้ส่วนตัว</b-select-option>
                                </b-select>
                            </b-col>
                        </b-row>

                        <b-button class="mt-2" size="sm" style="color:#fff" variant="primary" type="submit">
                            บันทึก
                        </b-button>
                        
                    </b-form>
                </b-card>
            </div>
            <!-- ปิดปุ่มที่มากับ Modal -->
            <template #modal-footer="{cancel,ok}">
                <b-button-cancel-disabled size="sm" style="color:#fff" variant="danger" @click="cancel()">
                    ยกเลิก
                </b-button-cancel-disabled>
                <b-button-ok-disabled size="sm" style="color:#fff" variant="primary" @click="ok()">
                    บันทึก
                </b-button-ok-disabled>
            </template>
        </b-modal>

        <div class="px-5 py-5 ">
            <b-table-simple>
                <template>
                    <b-thead>
                        <b-tr>
                            <!-- <b-th class="black--text" style="text-align:center">รูปสินค้า</b-th> -->
                            <b-th class="black--text" style="text-align:center">ลำดับ</b-th>
                            <b-th class="black--text" style="text-align:center">ชื่อสินค้า</b-th>
                            <b-th class="black--text" style="text-align:center">หมวดหมู่สินค้า</b-th>
                            <b-th class="black--text" style="text-align:center">ราคา</b-th>
                            <b-th class="black--text" style="text-align:center">สถานะการขาย</b-th>
                            <b-th class="black--text" style="text-align:center">ข้อมูลสินค้า</b-th>
                        </b-tr>
                    </b-thead>
                    <b-tbody align="center">
                        <template>
                            <b-td>
                                <b-card-text>
                                    1
                                </b-card-text>
                            </b-td>
                            <b-td>
                                <b-card-text>
                                    <b-img src="/Product01.png" width="38" height="38" alt="placeholder"></b-img>
                                    Liplover No.01
                                </b-card-text>
                            </b-td>
                            <b-td>
                                <b-card-text>
                                    เครื่องสำอางค์
                                </b-card-text>
                            </b-td>
                            <b-td>
                                <b-card-text>
                                    59฿
                                </b-card-text>
                            </b-td>
                            <b-td>
                                <b-card-text>
                                    <b-select v-model="form.status" size="sm" style="color:#000 " variant="light" id="dropdown-2" text="สถานะการขาย">
                                        <b-select-option value="แสดง">วางขาย</b-select-option>
                                        <b-select-option value="ไม่แสดง">ไม่วางขาย</b-select-option>
                                    </b-select>
                                </b-card-text>
                            </b-td> 
                            <b-td>
                                <b-button variant="outline-info" v-b-modal.modal-center-edit>ดูสินค้า</b-button>
                                <b-modal id="modal-center-edit" size="lg" centered title="รายละเอียดสินค้า">
                                    <div align="center" class="mt-2">
                                        <b-card>
                                            <b-form class="mt-3" @submit="onSubmit">
                                                <b-row class="my-1" style="color:#000">
                                                    <b-col sm="5">
                                                        <label for="input-small">ชื่อสินค้า</label>
                                                    </b-col>
                                                    <b-col sm="5">
                                                        <b-form-input v-model="form.productName" id="input-small" size="sm" placeholder="Liplover No.01"></b-form-input>
                                                    </b-col>
                                                    <b-col sm="5">
                                                        <label for="input-small">รหัสสินค้า</label>
                                                    </b-col>
                                                    <b-col sm="5">
                                                        <b-form-input v-model="form.productId" id="input-small" size="sm" placeholder="L001"></b-form-input>
                                                    </b-col>
                                                    <b-col sm="5">
                                                        <label for="input-small">รายละเอียดสินค้า</label>
                                                    </b-col>
                                                    <b-col sm="5">
                                                        <b-form-textarea v-model="form.productDetail" id="textarea-rows" placeholder="Lip Lover ลิปแมทจิ๋ว ของแท้แบรนด์ไทย 10 สีสุดปัง ติดทนนานกันน้ำกันเหงื่อแท่งเล็กพกพาสะดวก" rows="8"></b-form-textarea>
                                                    </b-col>
                                                    <b-col sm="5">
                                                        <!-- <div class="mt-3">ภาพสินค้า {{ image ? image.name : '' }}</div> -->
                                                        <div class="mt-3">ภาพสินค้า</div>
                                                    </b-col>
                                                    <b-col sm="5" align="left">
                                                      <b-img src="/Product01.png" width="100" height="100" alt="placeholder"></b-img>
                                                    </b-col>
                                                    <b-col sm="5">
                                                        <label for="input-small">ราคาสินค้าสินค้า</label>
                                                    </b-col>
                                                    <b-col sm="5">
                                                        <b-input-group size="sm" prepend="฿" append=".00">
                                                            <b-form-input  placeholder="59"> </b-form-input>
                                                        </b-input-group>
                                                    </b-col>
                                                    <b-col sm="5">
                                                        <label for="input-small">มีสินค้า</label>
                                                    </b-col>
                                                    <b-col sm="5">
                                                         <b-form-input  placeholder="10"> </b-form-input>
                                                    </b-col>
                                                    <b-col sm="5">
                                                        <label for="input-small">หมวดหมู่สินค้า</label>
                                                    </b-col>
                                                    <b-col sm="5">
                                                        <b-select style="color:#808080" v-model="form.type" variant="light" id="dropdown-1" text="กรุณาเลือก">
                                                            <b-select-option value="สกินแคร์">สกินแคร์</b-select-option>
                                                            <b-select-option value="เครื่องสำอางค์">เครื่องสำอางค์</b-select-option>
                                                            <b-select-option value="อุปกรณ์สำหรับผม">อุปกรณ์สำหรับผม</b-select-option>
                                                            <b-select-option value="ผิวกาย&ของใช้ส่วนตัว">ผิวกาย&ของใช้ส่วนตัว</b-select-option>
                                                        </b-select>
                                                    </b-col>
                                                </b-row>

                                                <b-button class="mt-2" size="sm" style="color:#fff" variant="primary" type="submit">
                                                    บันทึก
                                                </b-button>
                                                <b-button class="mt-2" size="sm" style="color:#fff" variant="danger" type="edit">
                                                    แก้ไข
                                                </b-button>
                                            </b-form>
                                        </b-card>
                                    </div>
                                    <!-- ปิดปุ่มที่มากับ Modal -->
                                    <template #modal-footer="{cancel,ok}">
                                        <b-button-cancel-disabled size="sm" style="color:#fff" variant="danger" @click="cancel()">
                                            ยกเลิก
                                        </b-button-cancel-disabled>
                                        <b-button-ok-disabled size="sm" style="color:#fff" variant="primary" @click="ok()">
                                            บันทึก
                                        </b-button-ok-disabled>
                                    </template>
                                </b-modal>
                            </b-td>
                        </template>
                    </b-tbody>
                </template>
            </b-table-simple>
        </div>

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
    data() {
        return {
            form: {
                productId: '',
                productName: '',
                productDetail: '',
                price: 0,
                stock: 0,
                type: '',
                image: ''
            },
            image: ''
        }
    },
    methods: {
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
        async onSubmit(event) {
            event.preventDefault()

            const db = getFirestore()
            const storage = getStorage()
            const ProductRef = collection(db, "Products")
            const value = { ...this.form }

            addDoc(ProductRef, value).then((response) => {
                console.log(response)
                const id = response.id
                const ProductDoc = doc(db, "Products", id)
                const ImageRef = ref(storage, `product/image/${id}/${this.image.name}`)
                uploadBytes(ImageRef, this.image).then(async () => {
                    const downloadURL = await getDownloadURL(ImageRef)
                    await updateDoc(ProductDoc, { image: downloadURL })
                })
            })

        }
    },
}
</script>

<style>

</style>
