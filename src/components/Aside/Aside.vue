<template>
    <el-aside style="background-color:aqua;">
        <el-menu router :collapse="!isTure" active-text-color="#ffd04b" background-color="#545c64" class="el-menu-vertical-demo" :class="isTure=='true' ? 'widthOne':'widthTwe'"  default-active="2"
            text-color="#fff">
            <el-menu-item index="/dashboard">
                <span>Dashboard</span>
            </el-menu-item>
            <el-sub-menu index="2">
                <template #title>
                    <span>Example</span>
                </template>
                <el-menu-item index="/table">Table</el-menu-item>
                <el-menu-item index="/tree">Tree</el-menu-item>
            </el-sub-menu>
            <el-menu-item index="3">
                <span>Form</span>
            </el-menu-item>
            <el-sub-menu index="4">
                <template #title>
                    <span>Nested</span>
                </template>
                <el-menu-item index="1-1">Menu1</el-menu-item>
                <el-menu-item index="1-1">menu2</el-menu-item>
            </el-sub-menu>
            <el-menu-item index="5">
                <span>ExtemalLink</span>
            </el-menu-item>
            <el-menu-item index="6">
                <span>Donate</span>
            </el-menu-item>
        </el-menu>
    </el-aside>
</template>
<script setup lang='ts'>
const isTure=localStorage.getItem('isTure') || "true"
console.log(isTure)

</script>
<style lang='scss' scoped>
.el-aside {
    width: 200px !important;
    height: calc(100vh - 60px);
}
.widthOne{
    width: 200px !important;
}
.widthTwe{
    width: 60px !important;
}
</style>