<template>
<div align="center" class="mt-5" >
    <b-card style="max-width: 30rem;"  border-variant="dark">
        <img src="@/static/login.png" style="width:25vw; margin-bottom:40px">

        <b-form @submit="onSubmit" @reset="onReset">

            <b-form-group id="input-group-1" label-for="input-1">
                <b-form-input id="input-1" v-model="form.username" type="text" placeholder="ชื่อผู้ใช้งาน" required></b-form-input>
            </b-form-group>

            <b-form-group id="input-group-2" label-for="input-2">
                <b-form-input id="input-2" v-model="form.password" type="password" placeholder="รหัสผ่าน" required></b-form-input>
            </b-form-group>

            <b-button type="submit" pill variant="outline-secondary">เข้าสู่ระบบ</b-button>
            <div class="mt-2">
                <b-link href="/auth/register">ลงทะเบียนที่นี่</b-link>
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
