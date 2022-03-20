<template>
<div align="center" class="mt-5">
    <b-card style="max-width: 80rem;" bg-variant="info" border-variant="info">
        <b-card-text>
            <h5 class="text-left font3 "> ทำการสั่งซื้อ</h5>
        </b-card-text>
    </b-card>
    <b-card style="max-width: 80rem;" border-variant="info" class="mt-3">
        <b-card-text>
            <b-card-text>
                <h5 class="text-left font">ที่อยู่ในการจัดส่ง</h5>
            </b-card-text>
            <v-divider></v-divider>
            <b-card-text class="text-left">
                ร้านสุ คอสเมติกส์ เลขที่ 99/14 ถนน ประเทืองถิ่น อำเภอบางมูลนาก จังหวัดพิจิตร 66120
            </b-card-text>
        </b-card-text>
    </b-card>

    <b-card style="max-width: 80rem;" border-variant="info" class="mt-3">
        <b-card-text>
            <b-card-text>
                <h5 class="text-left font">รายการสินค้า</h5>
            </b-card-text>
            <b-card-text class="text-left">
                <b-table-simple>
                    <template>
                        <b-thead>
                            <b-tr>
                                <b-th></b-th>
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
                                    <b-img src="/Product01.png" style="width:55px;"></b-img>
                                </b-td>
                                <b-td>
                                    <p>Lip Lover</p>
                                </b-td>
                                <b-td>
                                    <p>59฿</p>
                                </b-td>
                                <b-td>
                                    <div class="d-inline-flex">
                                        <div>
                                            <b-button size="lg" variant="info" class="mb-1">
                                                <b-icon icon="plus"></b-icon>
                                            </b-button>
                                            &nbsp; &nbsp;
                                        </div>
                                        <div>
                                            <p>2</p>
                                        </div>
                                        &nbsp; &nbsp;
                                        <div>
                                            <b-button size="lg" variant="info" class="mb-1">
                                                <b-icon icon="trash-fill" variant="success"></b-icon>
                                            </b-button>
                                        </div>
                                    </div>
                                </b-td>
                                <b-td>
                                    <p>118฿</p>
                                </b-td>
                                <b-button size="lg" variant="info" class="mb-2 mt-2">
                                    <b-icon icon="trash-fill" variant="success"></b-icon>
                                </b-button>
                                <div class="d-flex  text-danger align-items-center px-3 py-2 mt-5">
                                    <strong class="mr-auto"></strong>
                                    <b-button variant="outline-danger" size="sm" >ยืนยันการสั่งซื้อสินค้า</b-button>
                                </div>
                            </template>
                        </b-tbody>
                    </template>
                </b-table-simple>
            </b-card-text>
        </b-card-text>
    </b-card>
</div>
</template>

<script>
export default {

}
</script>

<style>

</style>
