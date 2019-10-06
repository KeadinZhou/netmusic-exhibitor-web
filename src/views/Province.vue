<template>
    <div>
        <div style="margin: 100px"></div>
        <province-chart></province-chart>
        <div style="margin: 100px"></div>
        <map-chart class="center-box"></map-chart>
    </div>
</template>

<script>
    import ProvinceChart from '@/components/charts/province-chart'
    import MapChart from '@/components/charts/map-chart'
    export default {
        name: "Province",
        components: {
            'province-chart': ProvinceChart,
            'map-chart': MapChart
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