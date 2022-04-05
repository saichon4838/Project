<template>
<div>
    <b-card>
        <b-card-text class="mt-4">
            <b class="font2 ml-4" style="color:#F06292">
                รีวิวสินค้า
            </b>
        </b-card-text>
        <div>
            <b-table-simple>
                <template>
                    <b-thead>
                        <b-tr>
                            <!-- <b-th class="black--text" style="text-align:center">วันที่</b-th> -->
                            <b-th class="black--text" style="text-align:center">ลำดับ</b-th>
                            <b-th class="black--text" style="text-align:center">ชื่อสินค้า</b-th>
                            <b-th class="black--text" style="text-align:center">เนื้อความ</b-th>
                            <b-th class="black--text" style="text-align:center">คะแนนรีวิว</b-th>
                            <b-th class="black--text" style="text-align:center">สถานะ</b-th>
                        </b-tr>
                    </b-thead>
                    <b-tbody align="center">
                        <template>
                            <b-td>
                                <b-card-text>
                                    1
                                </b-card-text>
                            </b-td>
                            <b-td>
                                <b-card-text>
                                    Liplover No.01
                                </b-card-text>
                            </b-td>
                            <b-td>
                                <b-card-text>
                                    ลิปมีขนาดเล็กกระทัดรัดสีเด่นชัด สีติดทนนาน
                                </b-card-text>
                            </b-td>
                            <b-td>
                                <b-card-text>
                                    <b-form-rating style="text-end " color="#ff8800" id="rating-inline" inline value="3" no-border></b-form-rating>
                                </b-card-text>
                            </b-td>
                            <b-td>
                                
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
export default {
    layout: 'admin',
}
</script>

<style>

</style>
