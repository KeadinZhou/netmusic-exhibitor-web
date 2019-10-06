<template>
    <div>
        <div style="margin: 100px"></div>
        <publish-chart></publish-chart>
    </div>
</template>

<script>
    import PublishChart from '@/components/charts/publish-chart'
    export default {
        name: "Publish",
        components: {
            'publish-chart': PublishChart
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