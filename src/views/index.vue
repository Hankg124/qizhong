<template>
<el-container>
      <Aside></Aside>
      <el-container class="er-container">
        <Header></Header>
        <Main></Main>
      </el-container>
    </el-container>
</template>
<script setup lang='ts'>
import Aside from '@/components/Aside/Aside.vue'
import Header from '@/components/Header/Header.vue'
import Main from '@/components/Main/Main.vue'


</script>
<style lang='scss' scoped>
.er-container{
    display: flex;
    flex-direction: column;
}
</style>