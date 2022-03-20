<template>
<div>
    <div align="center" class="mt-5 ml-1">
        <b-card style="max-width:60rem;" border-variant="info" class="text-Left mt-5">
            <div class="font">
                <h5 class="text-left font "> <b> ออเดอร์ของฉัน </b> </h5>
            </div>
            <div class="px-5 py-5 ">
                <b-table-simple small>
                    <template>
                        <b-thead>
                            <b-tr>

                                <b-th class="black--text" style="text-align:center">สั่งซื้อสินค้า</b-th>
                                <b-th class="black--text" style="text-align:center">สินค้า</b-th>
                                <b-th class="black--text" style="text-align:center">สถานะ</b-th>
                                <b-th class="black--text" style="text-align:center">แก้ไข</b-th>
                            </b-tr>
                        </b-thead>

                        <b-tbody align="center">
                            <template>
                                <b-td class="text-left">
                                    <p>เลขที่สั่งซื้อ : 16789542
                                        <br>
                                        ราคารวม : 59฿
                                        <br>
                                        2021-11-08
                                    </p>
                                </b-td>
                                <b-td>
                                    <b-img src="/Product01.png" style="width:45px;"></b-img>
                                </b-td>
                                <b-td>
                                    <p style="color:#EC407A">ยังไม่ชำระ</p>
                                </b-td>
                                <b-td>
                                    <div>
                                        <b-link style="color:#EC407A" href="#foo" @click="$bvModal.show('modal-payment')">แจ้งชำระเงิน</b-link>
                                        <br>
                                        <b-link style="color:#BDBDBD" href="#foo" @click="$bvModal.show('modal-order')">รายละเอียด</b-link>
                                        <br>
                                        <b-link style="color:#BDBDBD" href="#foo" @click="$bvModal.show('modal-cancel')">ยกเลิก</b-link>
                                    </div>
                                </b-td>
                            </template>
                        </b-tbody>

                        <b-tbody align="center">
                            <template>
                                <b-td class="text-left">
                                    <p>เลขที่สั่งซื้อ : 16789690
                                        <br>
                                        ราคารวม : 200฿
                                        <br>
                                        2021-11-25
                                    </p>
                                </b-td>
                                <b-td>
                                    <b-img src="/Product01.png" style="width:45px;"></b-img>
                                </b-td>
                                <b-td>
                                    <p style="color:#BDBDBD">เสร็จสมบูรณ์</p>
                                </b-td>
                                <b-td>
                                    <div>
                                        <b-link style="color:#BDBDBD" href="#foo" @click="$bvModal.show('modal-order')">รายละเอียด</b-link>
                                        <br>
                                        <b-link style="color:#BDBDBD" href="#foo" @click="$bvModal.show('modal-comment')">ให้คะแนน</b-link>
                                        <br>
                                        <b-button style="color:#BDBDBD" v-b-tooltip.hover.rightbottom title="วิธีการจัดส่ง: EMS หมายเลขติดตามพัสดุ: EB477508400TH" variant="transparent">
                                            เลขพัสดุ
                                        </b-button>
                                    </div>
                                </b-td>
                            </template>
                        </b-tbody>

                        <b-tbody align="center">
                            <template>
                                <b-td class="text-left">
                                    <p>เลขที่สั่งซื้อ : 16789888
                                        <br>
                                        ราคารวม : 290฿
                                        <br>
                                        2021-11-26
                                    </p>
                                </b-td>
                                <b-td>
                                    <b-img src="/Product13.jpg" style="width:45px;"></b-img>
                                    <b-img src="/Product01.png" style="width:45px;"></b-img>
                                </b-td>
                                <b-td>
                                    <p style="color:#BDBDBD">ยกเลิกเรียบร้อย</p>
                                </b-td>
                                <b-td>
                                    <div>
                                        <b-link style="color:#BDBDBD" href="#foo" @click="$bvModal.show('modal-order')">รายละเอียด</b-link>
                                    </div>
                                </b-td>
                            </template>
                        </b-tbody>
                    </template>
                </b-table-simple>
            </div>
        </b-card>
    </div>

    <div>
        <b-modal id="modal-payment" centered title="แจ้งชำระเงิน">
            <b-card style="max-width: 60rem;" border-variant="info" class="mt-3">
                <b-card-text>
                    <b-card-text class="text-left">
                        <!-- Plain mode -->
                        <b-row>
                            <b-col cols="6" class="mt-4">
                                <b-card-text class="text-left">
                                    เวลาที่โอนเงินตามหลักฐานการชำระเงิน
                                </b-card-text>
                                <b-time v-model="value" locale="en" @context="onContext"></b-time>
                            </b-col>

                            <b-col cols="6" class="mb-3">
                                <b-col class="mt-3">
                                    <b-card-text class="text-left">
                                        จำนวนเงินที่โอนตามหลักฐานการชำระเงิน
                                    </b-card-text>
                                    <b-form-input v-model="text" placeholder="กรุณากรอกจำนวนเงิน"></b-form-input>
                                </b-col>
                            </b-col>
                        </b-row>
                        <b-col class="mt-3">
                            <div>หลักฐานการชำระเงิน: {{ file2 ? file2.name : '' }}</div>
                            <b-form-file v-model="file2" class="mt-3" plain></b-form-file>
                        </b-col>
                    </b-card-text>
                </b-card-text>
            </b-card>
            <template #modal-footer="{  cancel,ok}">
                <!-- Emulate built in modal footer ok and cancel button actions -->
                <b-button size="sm" variant="outline-ligth" @click="cancel()">
                    ยกเลิก
                </b-button>
                <b-button size="sm" style="color:#fff" variant="info" @click="ok()">
                    ตกลง
                </b-button>
            </template>
        </b-modal>
    </div>

    <div>
        <b-modal size="lg" id="modal-order" centered title="รายละเอียดใบสั่งซื้อ">
            <!-- <b-card title class="text-center"> <b class="mt-5">
                    <span class="font3"> SU COSMETIC
                    </span>
                </b> -->
            <b-card border-variant="light" class="text-center mt-3">
                <b class="mt-5">
                    <span class="font3"> SU COSMETIC
                    </span>
                </b>
                <b-card-text>
                    <div class="text-center mt-3">
                        <span class="font2">ใบสั่งซื้อ</span>
                    </div>
                    <div class="text-left mt-5">
                        <v-row>
                            <v-col cols="4">
                                <!-- <div>ข้อมูลลูกค้า</div> -->
                                <div>ชื่อ : sasitorn</div>
                                <div>ที่อยู่ : 41 หมู่6 ต.วังสำโรง อ.บางมูลนาก จ.พิจิตร 66120</div>
                            </v-col>
                            <v-col cols="4">
                                <div>SU COSMETIC</div>
                                <div>8 หมู่ 6 ต.ประเวศน์เหนือ อ.บางมูลนาก</div>
                                <div>จ.พิจิตร 66120 โทร : 0971134008</div>
                                <div></div>
                            </v-col>
                            <v-col cols="4">
                                <div>หมายเลขใบสั่งซื้อ : 16789888 </div>
                                <div>วันที่สั่งซื้อ : 2021-11-26</div>
                            </v-col>
                            <v-divider></v-divider>
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
                            </b-table-simple>
                        </v-row>
                    </div>
                </b-card-text>
            </b-card>
            <!-- </b-card> -->
            <template #modal-footer="{ok}">
                <!-- Emulate built in modal footer ok and cancel button actions -->
                <b-button size="sm" style="color:#fff" variant="info" @click="ok()">
                    ตกลง
                </b-button>
            </template>
        </b-modal>
    </div>

    <div>
        <b-modal id="modal-cancel" title="ยกเลิกใบสั่งซื้อ">
            <p class="my-2"> &nbsp; &nbsp; &nbsp; &nbsp;สินค้าทุกชิ้นในคำสั่งซื้อนี้จะถูกยกเลิก โปรดทราบว่าคุณจะไม่สามารถแก้ไขคำขอยกเลิกได้หลังกดยืนยันแล้ว</p>
            <template #modal-footer="{  cancel,ok}">
                <!-- Emulate built in modal footer ok and cancel button actions -->
                <b-button size="sm" variant="outline-ligth" @click="cancel()">
                    ยังไม่ใช่ตอนนี้
                </b-button>
                <b-button size="sm" style="color:#fff" variant="info" @click="ok()">
                    ยกเลิกคำสั่งซื้อ
                </b-button>
            </template>
        </b-modal>
    </div>

    <div>
        <b-modal id="modal-comment" centered title="การให้คะแนนสินค้า">
            <div>
                <b-card class="text-Left">
                    
                    <b-img src="/Product01.png" style="width:45px;"></b-img>
                    <span>
                        Lip Lover ลิปแมทจิ๋ว ของแท้แบรนด์ไทย 10 สีสุดปัง ติดทนนานกันน้ำกันเหงื่อแท่งเล็กพกพาสะดวก
                    </span>
                    <template>
                        <div class="mt-3">
                            <b-form-rating no-border color="#ff8800" id="rating-inline" inline value="3"></b-form-rating>
                        </div>
                        <div class="mt-3">
                            <b-form-textarea id="textarea-rows" placeholder="บอกต่อความสวย" rows="5"></b-form-textarea>
                        </div>
                    </template>
                    <!-- <div class="mt-3 text-right ">
                        <b-button style="color:#fff" variant="info">ยืนยัน</b-button>
                    </div> -->
                </b-card>

            </div>
            <template #modal-footer="{cancel,ok}">
                <b-button size="sm" variant="outline-ligth" @click="cancel()">
                    ยังไม่ใช่ตอนนี้
                </b-button>
                <b-button size="sm" style="color:#fff" variant="info" @click="ok()">
                    ให้คะแนน
                </b-button>
            </template>
        </b-modal>
    </div>

</div>
</template>

<script>
export default {

}
</script>

<style>
.font3 {
    font-size: 2rem;
    line-height: 2.75rem;
    color: #E91E63;
}
</style>
