<template>
<div>
    <b-card>
        <b-card-text class="mt-4">
            <b class="font2 ml-4" style="color:#F06292">
                หมวดหมู่สินค้า
            </b>
            <div align="right">
                <b-button style="color:#fff " variant="info" v-b-modal.modal-center-category>เพิ่มหมวดหมู่สินค้า</b-button>
                <b-modal id="modal-center-category" centered title="เพิ่มหมวดหมู่สินค้า">
                    <b-row class="my-1">
                        <b-col sm="6">
                            <label for="input-small">ชื่อหมวดหมู่สินค้า :</label>
                        </b-col>
                        <b-col sm="6">
                            <b-form-input id="input-small" size="sm" placeholder="Enter your name"></b-form-input>
                        </b-col>
                        <b-col sm="6">
                            <label for="input-small">ชื่อหมวดหมู่สินค้า(อังกฤษ) :</label>
                        </b-col>
                        <b-col sm="6">
                            <b-form-input id="input-small" size="sm" placeholder="Enter your name"></b-form-input>
                        </b-col>
                        <b-dropdown style="color:#000 " variant="light" id="dropdown-1" text="สถานะหมวดหมู่" class="m-md-2">
                            <b-dropdown-item>แสดง</b-dropdown-item>
                            <b-dropdown-item>ไม่แสดง</b-dropdown-item>
                        </b-dropdown>
                    </b-row>
                    <template #modal-footer="{cancel,ok}">
                        <!-- Emulate built in modal footer ok and cancel button actions -->
                        <b-button size="sm" style="color:#fff" variant="danger" @click="cancel()">
                            ยกเลิก
                        </b-button>
                        <b-button size="sm" style="color:#fff" variant="primary" @click="ok()">
                            บันทึก
                        </b-button>
                    </template>
                </b-modal>
            </div>
            <b-card class="mt-3">
               
            </b-card>
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
