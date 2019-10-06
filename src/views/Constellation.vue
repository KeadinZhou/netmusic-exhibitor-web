<template>
    <div>
        <div style="margin: 100px"></div>
        <constellation-chart></constellation-chart>
    </div>
</template>

<script>
    import Constellation from '@/components/charts/constellation-chart'
    export default {
        name: "Constellation",
        components: {
            'constellation-chart': Constellation
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