<template>
<div>
    <b-card>
        <b-card-text class="mt-4">
            <b class="font2 ml-4" style="color:#F06292">
                เพิ่มหมวดหมู่สินค้า
            </b>
            <div align="center" class="mt-2">
                <b-card>
                    <b-card-text class="font2 mt-2">รายละเอียดหมวดหมู่สินค้า</b-card-text>
                    <b-form  @submit="onSubmit" @reset="onReset">
                        <b-row class="my-1">
                            <b-col sm="5">
                                <label for="input-small">ชื่อหมวดหมู่สินค้า</label>
                            </b-col>
                            <b-col sm="5">
                                <b-form-input id="input-small-1" v-model="form.categoryTh" size="sm" placeholder="กรุณาระบุชื่อหมวดหมู่สินค้า"></b-form-input>
                            </b-col>
                            <b-col sm="5">
                                <label for="input-small">ชื่อหมวดหมู่สินค้า (อังกฤษ)</label>
                            </b-col>
                            <b-col sm="5">
                                <b-form-input id="input-small-2" v-model="form.categoryEn" size="sm" placeholder="กรุณาระบุชื่อหมวดหมู่สินค้า (อังกฤษ)"></b-form-input>
                            </b-col>
                            <b-col sm="5">
                                <label for="input-small">สถานะหมวดหมู่</label>
                            </b-col>
                            <b-col sm="5">
                            <b-select v-model="form.status" style="color:#000 " variant="light" id="dropdown-1" text="สถานะหมวดหมู่" >
                                <b-select-option value="แสดง">แสดง</b-select-option>
                                <b-select-option value="ไม่แสดง">ไม่แสดง</b-select-option>
                            </b-select>
                              </b-col> 
                        </b-row>
                        <b-button size="sm" style="color:#fff" variant="primary" type="submit">
                                บันทึก
                        </b-button>
                    </b-form>
                 </b-card>
            </div>
            <b-card class="mt-3">
               
            </b-card>
        </b-card-text>
    </b-card>
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
    layout: 'admin',
    data() {
        return {
            dialog: true,
            form: {
                categoryTh: '',
                categoryEn: '',
                status:''
            },

        }
    },
    methods: {
        onSubmit(event) {
            event.preventDefault()
            const value = { ...this.form}

            const db = getFirestore()
            const CategoryRef = collection(db, "Category")
            addDoc(CategoryRef, value)

        },
        onReset(event) {
            event.preventDefault()
            
        }
    }
}
</script>

<style>

</style>
