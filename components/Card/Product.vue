<template>
<div>

    <div>
        <b-card align="center" class="font2 " header="สกินแคร์">
            <b-card title="Liplover No.01" img-src="/Product01.png" img-alt="Image" img-top tag="article" style="max-width: 20rem;" class=" font1 ml-5 mr-5 mt-5">
                <b-card-text>
                    Lip Lover ลิปแมทจิ๋ว ของแท้แบรนด์ไทย 10 สีสุดปัง ติดทนนานกันน้ำกันเหงื่อแท่งเล็กพกพาสะดวก
                </b-card-text>
                <div align="end">
                    <b-button block type="submit" variant="outline-primary" @click="$bvModal.show('modal-detail')">เลือกสินค้า</b-button>
                    <!-- <b-button block type="submit" variant="outline-primary">เพิ่มใส่ตะกร้า</b-button> -->
                </div>
            </b-card>

            <div>
                <b-modal  id="modal-detail" centered title="Liplover No.01">
                    <div>
                        <b-row no-gutters>
                            <b-col md="4">
                                <b-card-img src="/Product14.png" alt="Image" style="max-width:15rem;" class="rounded-0"></b-card-img>
                            </b-col>
                            <b-col md="8">
                                <b-card-text>
                                    ครีมกันแดดน้ำผึ้งทองคำ กันแดดผสมรองพื้น เนื้อใยไหม บางเบา ไม่หนักหน้า ไม่อุดตัน ปกป้องรังสี UVA-UVB ยาวนาน 12 ชั่วโมงผลิตภัณฑ์คุณภาพดี ได้มาตรฐาน รับประกันความปลอดภัย มี อย. รับรอง
                                </b-card-text>
                                <v-divider></v-divider>
                                <b-card-text class="font">
                                    <b> 220฿ </b>
                                </b-card-text>
                            </b-col>
                        </b-row>
                        <v-divider></v-divider>
                        <b-card-text>
                            <b-card-title primary-title>
                                <b> <span class="font"> รีวิวจากลูกค้า </span></b>
                            </b-card-title>
                            <div align="end">
                                <b-form-rating style="text-end " color="#ff8800" id="rating-inline" inline value="3" no-border></b-form-rating>
                            </div>
                            <b-row no-gutters>
                                <b-col md="2">
                                    <b-img v-bind="mainProps" src="/jk.jpg" style="max-width:5rem;" rounded="circle" alt="Circle image"></b-img>
                                </b-col>
                                <b-col md="8">
                                    <b-card-text class="font4 ml-3">
                                        <b> JK1997 </b>
                                    </b-card-text>
                                    <b-card-text class="font5 ml-3">
                                        ได้รับสินค้าแล้ว
                                    </b-card-text>
                                </b-col>
                            </b-row>
                        </b-card-text>
                    </div>
                    <template #modal-footer="{ok}">
                        <b-button size="sm" style="color:#fff" variant="info" @click="ok()">
                            หยิบใส่ตะกร้า
                        </b-button>
                    </template>
                </b-modal>
            </div>
            </b-card>
    </div>
</div>
</template>

<script>
export default {

}
</script>

<style>

</style>
