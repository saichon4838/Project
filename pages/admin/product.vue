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
                    <b-row class="my-1" style="color:#000">
                        <b-col sm="6">
                            <label for="input-small">ชื่อสินค้า</label>
                        </b-col>
                        <b-col sm="6">
                            <b-form-input id="input-small" size="sm" placeholder="กรุณาระบุชื่อสินค้า"></b-form-input>
                        </b-col>
                        <b-col sm="6">
                            <label for="input-small">รหัสสินค้า</label>
                        </b-col>
                        <b-col sm="6">
                            <b-form-input id="input-small" size="sm" placeholder="กรุณาระบุรหัสสินค้า"></b-form-input>
                        </b-col>
                        <b-col sm="6">
                            <label for="input-small">รายละเอียดสินค้า</label>
                        </b-col>
                        <b-col sm="6">
                            <b-form-textarea id="textarea-rows" placeholder="Insert text here..." rows="8"></b-form-textarea>
                        </b-col>
                        <b-col sm="6">
                            <div class="mt-3">ภาพสินค้า {{ file2 ? file2.name : '' }}</div>
                        </b-col>
                        <b-col sm="6">
                            <b-form-file v-model="file2" class="mt-3" plain></b-form-file>
                        </b-col>
                        <b-col sm="6">
                            <label for="input-small">ราคาสินค้าสินค้า</label>
                        </b-col>
                        <b-col sm="6">
                            <b-input-group size="sm" prepend="฿" append=".00">
                                <b-form-input></b-form-input>
                            </b-input-group>
                        </b-col>
                        <b-col sm="6">
                            <label for="input-small">มีสินค้า</label>
                        </b-col>
                        <b-col sm="6">
                            <b-form-input id="input-small" size="sm" placeholder="กรุณาระบุใส่จำนวนสินค้า"></b-form-input>
                        </b-col>
                        <b-col sm="6">
                            <label for="input-small">หมวดหมู่สินค้า</label>
                        </b-col>
                        <b-col sm="6">
                            <b-dropdown style="color:#808080" variant="light" id="dropdown-1" text="กรุณาเลือก">
                                <b-dropdown-item>สกินแคร์</b-dropdown-item>
                                <b-dropdown-item>เครื่องสำอางค์</b-dropdown-item>
                                <b-dropdown-item>อุปกรณ์สำหรับผม</b-dropdown-item>
                                <b-dropdown-item>ผิวกาย&ของใช้ส่วนตัว</b-dropdown-item>
                            </b-dropdown>
                        </b-col>
                    </b-row>
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
export default {
    layout: 'admin',
}
</script>

<style>

</style>
