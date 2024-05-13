<template>
    <el-header style="background-color:aquamarine;">
        <div>
            <el-icon @click="clickIcon" :size="20" v-show="!isTure">
                <Expand />
            </el-icon>
            <el-icon @click="clickIcon" :size="20" v-show="isTure">
                <Fold />
            </el-icon>
            <el-breadcrumb separator="/">
                <el-breadcrumb-item v-for="(item,index) in route.matched" :key="index">
                    {{ item.meta.title }}
                </el-breadcrumb-item>
            </el-breadcrumb>
        </div>
        <div style="display: flex;">
            <el-icon :size="20" @click="FullScreenFn" v-show="!fang">
                <FullScreen />
            </el-icon>
            <el-icon :size="20" @click="AimFn" v-show="fang">
                <Aim />
            </el-icon>

            <el-col :span="8">
                <el-dropdown trigger="click">
                    <span class="el-dropdown-link">
                        Dropdown List<el-icon class="el-icon--right"><arrow-down /></el-icon>
                    </span>
                    <template #dropdown>
                        <el-dropdown-menu>
                            <el-dropdown-item>Home</el-dropdown-item>
                            <el-dropdown-item>
                                Github
                            </el-dropdown-item>
                            <el-dropdown-item>Docs</el-dropdown-item>
                            <el-dropdown-item divided>Log Out</el-dropdown-item>
                        </el-dropdown-menu>
                    </template>
                </el-dropdown>
            </el-col>
        </div>
    </el-header>
</template>

<script setup lang='ts'>
import {useRoute} from "vue-router"
const route = useRoute()
console.log(route.matched);

import { Expand, Fold, FullScreen, Aim } from '@element-plus/icons-vue'
import { ref } from 'vue';
import { ArrowDown } from '@element-plus/icons-vue'
import {useCounterStore} from "@/store/counter"

const isTure = ref(true)

const clickIcon = () => {
    isTure.value = !isTure.value
    // localStorage.setItem('isTure',isTure.value)
    // console.log(isTure.value)
}

const fang = ref<boolean>(false)
const FullScreenFn = () => {
    document.documentElement.requestFullscreen();
    fang.value = !fang.value
}

const AimFn = () => {
    document.exitFullscreen();
    fang.value = !fang.value;
}





</script>
<style lang='scss' scoped>
.el-header {
    display: flex;
    align-items: center;
    justify-content: space-between;

}
</style>