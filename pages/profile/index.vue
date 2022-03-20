<template>
<div>
        <div align="center" class="mt-5 ml-1">
            <b-card style="max-width: 70rem;" border-variant="info" class="text-Left">
                <div class="font">
                    <h5 class="text-left font "> <b> บัญชีของฉัน </b> </h5>
                </div>
                <v-divider></v-divider>
                <b-row>
                    <b-col cols="6">
                        <b-card-text class="text-left ml-5 mt-3">
                            ชื่อผู้ใช้งาน :
                        </b-card-text>
                    </b-col>
                    <b-col cols="6">
                        <b-card-text class="text-left  mt-3">
                            &nbsp; &nbsp; &nbsp; &nbsp; Email :
                        </b-card-text>
                    </b-col>
                </b-row>
                <b-row>
                    <b-col cols="6">
                        <b-form inline>
                            <label class="ml-5 mr-sm-2" for="inline-form-input-name">&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;ชื่อ :</label>
                            <b-form-input id="inline-form-input-name" class="mb-2 mr-sm-2 mb-sm-0" placeholder="Jane Doe"></b-form-input>
                        </b-form>
                    </b-col>
                    <b-col cols="6">
                        <b-form inline>
                            <label class=" mr-sm-2" for="inline-form-input-name"> &nbsp; &nbsp; นามสุกล :</label>
                            <b-form-input id="inline-form-input-name" class=" mb-2 mr-sm-2 mb-sm-0" placeholder="Jane Doe"></b-form-input>
                        </b-form>
                    </b-col>
                </b-row>
                <b-row>
                    <b-col cols="6">
                        <b-form inline>
                            <label class="ml-5 mt-1 mr-sm-2" for="inline-form-input-name"> เบอร์ติดต่อ :</label>
                            <b-form-input id="inline-form-input-name" class="mt-1 mb-2 mr-sm-2 mb-sm-0" placeholder="Jane Doe"></b-form-input>
                        </b-form>
                    </b-col>
                    <b-col cols="6">
                        <b-form inline>
                            <label class="mt-1 mr-sm-2" for="inline-form-input-name"> &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; ที่อยู่ :</label>
                            <b-form-input id="inline-form-input-name" class="mt-1 mb-2 mr-sm-3 mb-sm-0" placeholder="Jane Doe"></b-form-input>
                        </b-form>
                    </b-col>
                </b-row>
                <div class="mr-3 text-light">
                    <b-button class="mt-5" type="submit" variant="success">แก้ไขข้อมูลของฉัน</b-button>
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
