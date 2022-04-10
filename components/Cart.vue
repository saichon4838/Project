<template>
<div class="mr-3 text-light">
    <b-button variant="outline-light" v-b-toggle.sidebar-right>ตะกร้าของฉัน</b-button>
    <b-sidebar id="sidebar-right" title="ตะกร้าของฉัน" right shadow width="600px">
        <template #footer="{ checkout }">
            <div class="d-flex  text-danger align-items-center px-3 py-2">
                <strong class="mr-auto"></strong>
                <b-button variant="outline-danger" size="sm" @click="checkout">สั่งสินค้า</b-button>
            </div>
        </template>

        <div class="px-5 py-5 ">
            <b-table-simple small>
                <template>
                    <b-thead>
                        <b-tr>
                           
                            <b-th class="black--text" style="text-align:center">สินค้า</b-th>
                            <b-th class="black--text" style="text-align:center">ราคาต่อหน่วย</b-th>
                            <b-th class="black--text" style="text-align:center">จำนวน</b-th>
                            <b-th class="black--text" style="text-align:center">ราคารวม</b-th>
                            <b-th class="black--text" style="text-align:center">แก้ไข</b-th>
                        </b-tr>
                    </b-thead>

                    <b-tbody align="center">
                        <template>
                            <b-td>
                                <b-img src="/Product01.png" style="width:30px;"></b-img>
                               Lip Lover
                            </b-td>
                            <b-td>
                                <p>59฿</p>
                            </b-td>
                            <b-td>
                                <template>
                                    <div>
                                        <label for="sb-sm"></label>
                                        <b-form-spinbutton id="sb-sm" size="sm" v-model="value" inline></b-form-spinbutton>
                                    </div>
                                </template>
                            </b-td>
                            <b-td>
                                <p>118฿</p>
                            </b-td>
                            <b-button size="lg" variant="outline-primary" class="mb-2 mt-2">
                                <b-icon-trash-fill></b-icon-trash-fill>
                            </b-button>
                        </template>
                    </b-tbody>

                </template>
            </b-table-simple>
        </div>
    </b-sidebar>
</div>
</template>

<script>
export default {

}
</script>

<style>

</style>
