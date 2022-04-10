<template>
<div>
    <b-card>
        <b-card-text class="mt-4">
            <b class="font2 ml-4" style="color:#F06292">
                หมวดหมู่สินค้า
            </b>
        </b-card-text>
        <div align="right">
            <b-button style="color:#fff" variant="info" v-b-modal.modal-center-category>เพิ่มหมวดหมู่สินค้า</b-button>
        </div>
        <b-modal id="modal-center-category" size="lg" centered title="เพิ่มหมวดหมู่สินค้า">
            <div align="center" class="mt-2">
                <b-card>
                    <b-card-text class="font2 mt-2">รายละเอียดหมวดหมู่สินค้า</b-card-text>
                    <b-form @submit="onSubmit" @reset="onReset">
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
                                <b-select v-model="form.status" style="color:#000 " variant="light" id="dropdown-1" text="สถานะหมวดหมู่">
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
                            <b-th class="black--text" style="text-align:center">ลำดับ</b-th>
                            <b-th class="black--text" style="text-align:center">ชื่อหมวดหมู่สินค้า</b-th>
                            <b-th class="black--text" style="text-align:center">ชื่อหมวดหมู่สินค้า (อังกฤษ)</b-th>
                            <b-th class="black--text" style="text-align:center">สถานะหมวดหมู่สินค้า</b-th>
                            <b-th class="black--text" style="text-align:center">ข้อมูลหมวดหมู่สินค้า</b-th>
                        </b-tr>
                    </b-thead>
                    <b-tbody align="center">
                        <template>
                            <b-td>
                                1
                            </b-td>
                            <b-td>
                                <b-card-text>
                                    สกินแคร์
                                </b-card-text>
                            </b-td>
                            <b-td>
                                <b-card-text>
                                    Skincare
                                </b-card-text>
                            </b-td>
                            <b-td>
                                <b-card-text>
                                    <b-select v-model="form.status" size="sm" style="color:#000 " variant="light" id="dropdown-2" text="สถานะการขาย">
                                        <b-select-option value="แสดง">แสดง</b-select-option>
                                        <b-select-option value="ไม่แสดง">ไม่แสดง</b-select-option>
                                    </b-select>
                                </b-card-text>
                            </b-td>

                            <b-td>
                                <b-button variant="outline-info" v-b-modal.modal-center-edit>ดูหมวดหมู่สินค้า</b-button>
                                <b-modal id="modal-center-edit" size="lg" centered title="รายละเอียดหมวดหมู่สินค้า">
                                    <div align="center" class="mt-2">
                                        <b-card>
                                            <b-form class="mt-3" @submit="onSubmit">
                                                <b-row class="my-1" style="color:#000">
                                                    <b-col sm="5">
                                                        <label for="input-small">ชื่อหมวดหมู่สินค้า</label>
                                                    </b-col>
                                                    <b-col sm="5">
                                                        <b-form-input v-model="form.productName" id="input-small" size="sm" placeholder="สกินแคร์"></b-form-input>
                                                    </b-col>
                                                    <b-col sm="5">
                                                        <label for="input-small">ชื่อหมวดหมู่สินค้า (อังกฤษ)</label>
                                                    </b-col>
                                                    <b-col sm="5">
                                                        <b-form-input v-model="form.productId" id="input-small" size="sm" placeholder="Skincare"></b-form-input>
                                                    </b-col>

                                                    <b-col sm="5">
                                                        <label for="input-small">สถานะหมวดหมู่สินค้า</label>
                                                    </b-col>
                                                    <b-col sm="5">
                                                        <b-select v-model="form.status" size="sm" style="color:#000 " variant="light" id="dropdown-2" text="สถานะการขาย">
                                                            <b-select-option value="แสดง">แสดง</b-select-option>
                                                            <b-select-option value="ไม่แสดง">ไม่แสดง</b-select-option>
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
                status: ''
            },

        }
    },
    methods: {
        onSubmit(event) {
            event.preventDefault()
            const value = { ...this.form }

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
