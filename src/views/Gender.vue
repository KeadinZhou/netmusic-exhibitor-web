<template>
    <div>
        <div style="margin: 100px"></div>
        <gender-chart></gender-chart>
    </div>
</template>

<script>
    import GenderChart from '@/components/charts/gender-chart'
    export default {
        name: "Gender",
        components: {
            'gender-chart': GenderChart
        }
    }
</script>

<style scoped>
</style>