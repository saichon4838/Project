<template>
<div>
    <b-card>
        <b-card-text class="mt-4">
            <b class="font2 ml-4" style="color:#F06292">
                รายการสั่งซื้อ
            </b>
        </b-card-text>
        <div class="px-5 py-5 ">
            <b-table-simple xl>
                <template>
                    <b-thead>
                        <b-tr>
                            <b-th class="black--text" style="text-align:center">ลำดับ</b-th>
                            <b-th class="black--text" style="text-align:center">หมายเลขออเดอร์</b-th>
                            <b-th class="black--text" style="text-align:center">ชื่อลูกค้า</b-th>
                            <b-th class="black--text" style="text-align:center">รวมทั้งหมด</b-th>
                            <!-- <b-th class="black--text" style="text-align:center">สถานะ</b-th> -->
                            <b-th class="black--text" style="text-align:center">การชำระเงิน</b-th>
                            <b-th class="black--text" style="text-align:center">การจัดส่ง</b-th>
                            <b-th class="black--text" style="text-align:center">คำสั่งซื้อ</b-th>
                        </b-tr>
                    </b-thead>
                    <b-tbody align="center">
                        <template>
                            <b-td>
                                <p>1</p>
                            </b-td>
                            <b-td>
                                <p>2021110914089644</p>
                            </b-td>
                            <b-td>
                                <p>sasitorn</p>
                            </b-td>
                            <b-td>
                                <p>118฿</p>
                            </b-td>
                            <!-- <b-td>
                                <p>รอตรวจสอบ</p>
                            </b-td> -->
                            <b-td>
                                <div>
                                    <b-button style="color:#fff " pill variant="warning" v-b-modal.modal-lg-center-payment>รอตรวจสอบ</b-button>
                                    <b-modal id="modal-lg-center-payment" size="lg" centered title="รายการสั่งซื้อ">
                                        <b-table-simple>
                                            <template>
                                                <b-thead>
                                                    <b-tr>
                                                        <b-th class="black--text" style="text-align:center">สินค้า</b-th>
                                                        <b-th class="black--text" style="text-align:center"></b-th>
                                                        <b-th class="black--text" style="text-align:center">ราคา</b-th>
                                                        <b-th class="black--text" style="text-align:center">จำนวน</b-th>
                                                        <b-th class="black--text" style="text-align:center">ราคารวม</b-th>
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
                                                            <p>59.00฿</p>
                                                        </b-td>
                                                        <b-td>
                                                            <p>2</p>
                                                        </b-td>
                                                        <b-td>
                                                            <p>118.00฿</p>
                                                        </b-td>
                                                        <br>
                                                        <tr>
                                                            <td></td>
                                                            <td></td>
                                                            <td class="text-right" colspan="2">รวมทั้งสิ้น :</td>
                                                            <td class="font">118.00฿</td>
                                                        </tr>
                                                    </template>
                                                </b-tbody>
                                            </template>
                                        </b-table-simple>
                                        <b-card>
                                            <b-card-title>
                                                การชำระเงิน
                                            </b-card-title>
                                            <p><b>โอนเงิน</b></p>
                                            <p style="color:green">ธนาคารกสิกรไทย จำกัด (มหาชน) </p>
                                            <p>0183344781</p>
                                            <p>นางสาวสายชล จีปวก</p>
                                            <br>
                                            <b-img src="/ll.jpg" style="width:50%;" class="mb-3"></b-img>
                                            <br>
                                            <b class="font mt-3">118.00฿</b>
                                        </b-card>
                                        <template #modal-footer="{ok}">
                                            <b-button size="sm" style="color:#fff" variant="success" @click="ok()">
                                                โอนเงินถูกต้อง
                                            </b-button>
                                            <b-button size="sm" style="color:#fff " variant="danger" v-b-modal.modal-cancel>ยกเลิกใบสั่งซื้อ</b-button>
                                            <b-modal id="modal-cancel" title="ยกเลิกใบสั่งซื้อ">
                                                <b-card-text style="color:#757575" class="mt-2">ยกเลิกใบสั่งซื้อหมายเลข : 12254562</b-card-text>
                                                <template #modal-footer="{cancel,ok}">
                                                    <!-- Emulate built in modal footer ok and cancel button actions -->
                                                    <b-button size="sm" style="color:#fff" variant="danger" @click="cancel()">
                                                        ยกเลิกใบสั่งซื้อ
                                                    </b-button>
                                                    <b-button size="sm" variant="outline-dark" @click="ok()">
                                                        ยกเลิก
                                                    </b-button>
                                                </template>
                                            </b-modal>
                                        </template>
                                    </b-modal>
                                </div>

                            </b-td>
                            <!-- <b-td>
                                <b-button disabled style="color:#fff" pill variant="warning">แจ้งเลขพัสดุ</b-button>
                            </b-td> -->
                            <b-td>
                                <div>
                                    <b-button style="color:#fff" pill variant="warning" v-b-modal.modal-center-delivery>แจ้งเลขพัสดุ</b-button>
                                    <b-modal id="modal-center-delivery" centered title="แจ้งเลขพัสดุ">
                                        <b-card-text style="color:#757575" class="mt-2 font">หมายเลขพัสดุ</b-card-text>
                                        <b-form inline>
                                            <b-form-input id="inline-form-input-name" ></b-form-input>
                                        </b-form>
                                    </b-modal>
                                </div>
                            </b-td>

                            <div>
                                <b-td>
                                    <b-button style="color:#fff " pill variant="danger" v-b-modal.modal-center-order>รายละเอียดใบสั่งซื้อ</b-button>
                                    <b-modal id="modal-center-order" centered title="รายละเอียดใบสั่งซื้อ">
                                        <div>
                                            <p> <b> ที่อยู่การจัดส่ง</b></p>
                                            <b-card>
                                                <p><b>ที่อยู่ผู้รับ</b></p>
                                                ศศิธร คำควร
                                                <br> 111 ม.6 ต.วังสำโรง อ.บางมูลนาก จ.พิจิตร
                                                <br> 66120
                                                <br> 0594235588
                                            </b-card>
                                        </div>
                                        <br>
                                        <div>
                                            <p> <b> รายละเอียดการชำระเงิน</b></p>
                                            <b-card>
                                                <p><b>ช่องทางการชำระเงิน</b></p>
                                                <img src="@/static/kbank.png" style="width:5vw; margin-bottom:1px">&nbsp;กสิกรไทย เลขที่บัญชี 0183344781
                                                <br>
                                                <br>
                                                <p><b>วันที่ชำระเงิน</b></p>
                                                19 มี.ค. 2565 14:22 น.
                                                <br>
                                                <br>
                                                <p><b>จำนวน</b></p>
                                                314.00 บาท
                                                <br>
                                                <br>
                                                <template>
                                                    <b-thead>
                                                        <b-tr>
                                                            <b-th class="black--text" style="text-align:center">สินค้า</b-th>
                                                            <b-th class="black--text" style="text-align:center"></b-th>
                                                            <b-th class="black--text" style="text-align:center">ราคา</b-th>
                                                            <b-th class="black--text" style="text-align:center">จำนวน</b-th>
                                                            <b-th class="black--text" style="text-align:center">ราคารวม</b-th>
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
                                                                <p>2</p>
                                                            </b-td>
                                                            <b-td>
                                                                <p>118฿</p>
                                                            </b-td>
                                                            <br>
                                                            <tr>
                                                                <td></td>
                                                                <td></td>
                                                                <td class="text-right" colspan="2">ยอดที่ต้องชำระ :</td>
                                                                <td class="font">118฿</td>
                                                            </tr>
                                                        </template>
                                                    </b-tbody>
                                                </template>
                                            </b-card>
                                        </div>

                                        <template #modal-footer="{ok}">
                                            <b-button size="sm" style="color:#fff" variant="success" @click="ok()">
                                                ตกลง
                                            </b-button>
                                        </template>
                                    </b-modal>
                                </b-td>
                            </div>
                        </template>
                    </b-tbody>

                </template>

            </b-table-simple>
        </div>
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
