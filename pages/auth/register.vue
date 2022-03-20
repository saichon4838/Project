<template>
<div align="center" class="mt-5">
    <b-card style="max-width: 40rem;" class="mb-2 mt-40" border-variant="dark">
        <img src="@/static/regis1.png" style="width:25vw; margin-bottom:40px">

        <b-form @submit="onSubmit" @reset="onReset" >
            <b-row>
                <b-col cols="6">
                    <b-form-group  id="input-group-1" label-for="input-1">
                        <b-form-input id="input-1" v-model="form.username" type="text"  placeholder="ชื่อผู้ใช้งาน" required></b-form-input>
                    </b-form-group>
                </b-col>
                <b-col cols="6">
                    <b-form-group id="input-group-2" label-for="input-2">
                        <b-form-input id="input-2" v-model="form.email" type="email" placeholder="อีเมล" required></b-form-input>
                    </b-form-group>
                </b-col>
            </b-row>

            <b-row>
                <b-col cols="6">
                    <b-form-group id="input-group-3" label-for="input-3">
                        <b-form-input id="input-3" v-model="form.password" type="password" placeholder="รหัสผ่าน" required></b-form-input>
                    </b-form-group>
                </b-col>
                <b-col cols="6">
                    <b-form-group id="input-group-4" label-for="input-4">
                        <b-form-input id="input-4" v-model="form.name" type="text" placeholder="ชื่อ" required></b-form-input>
                    </b-form-group>
                </b-col>
            </b-row>

            <b-row>
                <b-col cols="6">
                    <b-form-group id="input-group-5" label-for="input-5">
                        <b-form-input id="input-5" v-model="form.re_password" type="password" placeholder="ยืนยันรหัสผ่าน" required></b-form-input>
                    </b-form-group>
                </b-col>
                <b-col cols="6">
                    <b-form-group id="input-group-6" label-for="input-6">
                        <b-form-input id="input-6" v-model="form.last_name" type="text" placeholder="นามสุกล" required></b-form-input>
                    </b-form-group>
                </b-col>
            </b-row>

             <b-row>
                <b-col cols="6">
                    <b-form-group id="input-group-7" label-for="input-7">
                        <b-form-input id="input-7" v-model="form.address" type="text" placeholder="ที่อยู๋" required></b-form-input>
                    </b-form-group>
                </b-col>
                <b-col cols="6">
                    <b-form-group id="input-group-8" label-for="input-8">
                        <b-form-input id="input-8" v-model="form.phone" type="text" placeholder="เบอร์ติดต่อ" required></b-form-input>
                    </b-form-group>
                </b-col>
            </b-row>
            
            <b-button type="submit" pill variant="outline-secondary">สมัครสมาชิก</b-button>
            <div class="mt-2">
                <b-link href="/auth/login">เข้าสู่ระบบ</b-link>
            </div>
         
        </b-form>
    </b-card>
</div>
</template>

<script>
export default {
    data() {
        return {
            dialog: true,
            form: {
                email: '',
                name: ''

            },

        }
    },
    methods: {
        onSubmit(event) {
            event.preventDefault()
            alert(JSON.stringify(this.form))
        },
        onReset(event) {
            event.preventDefault()
            // Reset our form values
            this.form.email = ''
            this.form.name = ''
            this.form.checked = []
            // Trick to reset/clear native browser form validation state
            this.show = false
            this.$nextTick(() => {
                this.show = true
            })
        }
    }
}
</script>
