<template>
<div align="center" class="mt-5">
    <b-card style="max-width: 45rem;" bg-variant="info" border-variant="info">
        <b-card-text>
            <h5 class="text-left font3 ">การชำระเงิน</h5>
        </b-card-text>
    </b-card>

    <b-card style="max-width: 45rem;" border-variant="info" class="mt-3">
        <b-card-text>
            <b-card-text>
                <h5 class="text-left font">หลักฐานการชำระเงิน</h5>
            </b-card-text>
            <v-divider></v-divider>
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
                            <b-form-input  v-model="text" placeholder="กรุณากรอกจำนวนเงิน"></b-form-input>
                            </b-col>
                        </b-col>
                    </b-row>
                    <b-col class="mt-3">
                        <div >หลักฐานการชำระเงิน: {{ file2 ? file2.name : '' }}</div>
                        <b-form-file v-model="file2" class="mt-3" plain></b-form-file>
                    </b-col>
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
