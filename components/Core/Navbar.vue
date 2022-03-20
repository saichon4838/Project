<template>
<div>
    <b-navbar type="dark" variant="info">
        <b-navbar-brand href="/">
            <img src="@/static/Logosu1.png" style="width:10vw; margin-bottom:1px">
        </b-navbar-brand>

        <b-collapse id="nav-collapse" is-nav>
            <div align="center">
                <b-navbar-nav>
                    <b-nav-item href="/">หน้าแรก</b-nav-item>
                    <!-- <b-nav-item href="#">สินค้า</b-nav-item> -->
                    <b-nav-item-dropdown text="สินค้า" right>
                        <b-dropdown-item href="/product">สกินแคร์</b-dropdown-item>
                        <b-dropdown-item href="/product">เครื่องสำอางค์</b-dropdown-item>
                        <b-dropdown-item href="/product">อุปกรณ์สำหรับผม</b-dropdown-item>
                        <b-dropdown-item href="/product">ผิวกาย&ของใช้ส่วนตัว</b-dropdown-item>
                        <!-- <b-dropdown-item href="#">สินค้าทั้งหมด</b-dropdown-item> -->
                    </b-nav-item-dropdown>
                    <b-nav-item href="/review">รีวิว</b-nav-item>
                    <b-nav-item href="/contact">ติดต่อเรา</b-nav-item>
                </b-navbar-nav>
            </div>

            <v-spacer></v-spacer>
            <div class="ml-5
             ">
                <Cart />
            </div>

            <!-- Right aligned nav items -->
            <b-navbar  class="ml-auto" style="color:white">
                <!-- <b-button href="/auth/login" variant="outline-light">เข้าสู่ระบบ</b-button> -->
                <b-dropdown variant="outline-light"  right >
                    <template  #button-content>
                        <span>ชื่อลูกค้า</span>
                    </template>
                    <b-dropdown-item href="/profile">ข้อมูลส่วนตัว</b-dropdown-item>
                    <b-dropdown-item href="/profile/Receipt">ออเดอร์ของฉัน</b-dropdown-item>
                    <b-dropdown-item href="#">ออกจากระบบ</b-dropdown-item>
                </b-dropdown>
            </b-navbar>
        </b-collapse>
    </b-navbar>

</div>
</template>

<script>
export default {

}
</script>

<style>

</style>
