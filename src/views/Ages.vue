<template>
    <div>
        <div style="margin: 100px"></div>
        <ages-chart></ages-chart>
    </div>
</template>

<script>
    import AgesChart from '@/components/charts/ages-chart'
    export default {
        name: "Ages",
        components: {
            'ages-chart': AgesChart
        }
    }
</script>

<style scoped>
    .center-box{
        position: relative;
        left: 50%;
        transform: translate(-50%,0);
    }
</style>