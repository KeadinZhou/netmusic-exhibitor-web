<template>
    <div id="page-top">
        <el-menu :default-active="this.$route.path" class="page-nav" style="height:60px;width:100%;z-index:1000" mode="horizontal" router>
            <el-menu-item index="/" route="/">首页</el-menu-item>
            <el-submenu index="stat">
                <template slot="title">统计</template>
                <el-menu-item index="/words" route="/words">词频统计</el-menu-item>
                <el-menu-item index="/gender" route="/gender">性别受众</el-menu-item>
                <el-menu-item index="/province" route="/province">地区受众</el-menu-item>
                <el-menu-item index="/constellation" route="/constellation">星座受众</el-menu-item>
                <el-menu-item index="/ages" route="/ages">年代受众</el-menu-item>
                <el-menu-item index="/publish" route="/publish">发行趋势</el-menu-item>
                <el-menu-item index="/singer" route="/singer">歌手排行</el-menu-item>
            </el-submenu>
            <el-submenu index="forecast">
                <template slot="title">预测</template>
                <el-menu-item index="/forecast" route="/forecast">评论数预测</el-menu-item>
            </el-submenu>
        </el-menu>
    </div>
</template>

<script>
    export default {
        name: "page-nav"
    }
</script>

<style scoped>
</style>