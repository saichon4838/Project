<template>
<div>
    <div align="center">
        <b-card>
            <b-card-group deck style="max-width: 40rem;" class="mt-3">
                <b-card header="ยอดขายของร้าน">
                    <b-card-text>3000 ฿</b-card-text>
                </b-card>
                <b-card header="จำนวนออเดอร์">
                    <b-card-text>50</b-card-text>
                </b-card>
            </b-card-group>
            <b-card class="mt-5">
                <div align="center" class="mt-5">
                    <!-- <b-row>
                        <b-col cols="6"> -->
                    <b-card-text>
                        <b class="font2 ml-4" style="color:#F06292">
                            รายการสั่งซื้อ
                        </b>
                    </b-card-text>
                    <!-- </b-col> -->
                    <!-- <b-col cols="2"> -->
                    <div align="left">
                        <template>
                            <div style="max-width: 18rem;">
                                <b-form-datepicker placeholder="Choose a date" id="datepicker-dateformat2" :date-format-options="{ year: 'numeric', month: 'numeric', day: 'numeric' }" locale="en"></b-form-datepicker>
                            </div>
                        </template>
                    </div>
                    <!-- </b-col> -->

                    <!-- </b-row> -->
                    <b-card class="mt-5">
                        <div class="px-5 py-5 ">
                            <b-table-simple xl>
                                <template>
                                    <b-thead>
                                        <b-tr>
                                            <b-th class="black--text" style="text-align:center">ลำดับ</b-th>
                                            <b-th class="black--text" style="text-align:center">หมายเลขออเดอร์</b-th>
                                            <b-th class="black--text" style="text-align:center">ชื่อลูกค้า</b-th>
                                            <b-th class="black--text" style="text-align:center">รวมทั้งหมด</b-th>
                                            <b-th class="black--text" style="text-align:center">สถานะ</b-th>
                                        </b-tr>
                                    </b-thead>
                                    <b-tbody align="center">
                                        <template>
                                            <b-td>
                                                <p>1</p>
                                                <p>2</p>
                                            </b-td>
                                            <b-td>
                                                <p>2021110914089644</p>
                                                <p>2021110914089645</p>
                                            </b-td>
                                            <b-td>
                                                <p>sasitorn</p>
                                                <p>wirunnuch</p>
                                            </b-td>
                                            <b-td>
                                                <p>118฿</p>
                                                <p>250฿</p>
                                            </b-td>
                                            <b-td>
                                                <p>สำเร็จ</p>
                                                <p>รอตรวจสอบชำระเงิน</p>
                                            </b-td>
                                        </template>
                                    </b-tbody>
                                </template>
                            </b-table-simple>
                        </div>
                    </b-card>
                </div>
            </b-card>
        </b-card>
    </div>
</div>
</template>

<script>
export default {
    layout: 'admin',
    data() {
        return {
            value: ''
        }
    }
}
</script>

<style>

</style>
