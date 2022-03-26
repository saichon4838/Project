<template>
<div>
    <b-navbar type="dark" variant="info">
        <b-navbar-brand href="/admin/dashboard">
            <img src="@/static/Logosu1.png" style="width:10vw; margin-bottom:1px">
        </b-navbar-brand>

        <b-collapse id="nav-collapse" is-nav>
            <div align="center">
                <b-navbar-nav>
                    <!-- <b-nav-item href="/admin/dashboard">แดชบอร์ด</b-nav-item> -->
                    <b-nav-item href="/admin/receipt">รายการสั่งซื้อ</b-nav-item>
                    <b-nav-item href="/admin/category">หมวดหมู่สินค้า</b-nav-item>
                    <b-nav-item href="/admin/product">สินค้า</b-nav-item>
                    <b-nav-item href="/admin/review">รีวิว</b-nav-item>
                </b-navbar-nav>
            </div>
            <!-- R ight aligned nav items -->
            <b-navbar-nav class="ml-auto" style="color:white">
                <!-- <b-button variant="outline-light">เข้าสู่ระบบ</b-button> -->
                <b-nav-item right>
                    <template >
                        <span>ชื่อแอดมิน</span>
                    </template>
                </b-nav-item>
            </b-navbar-nav>
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
