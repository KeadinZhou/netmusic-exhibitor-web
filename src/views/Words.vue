<template>
    <words-chart></words-chart>
</template>

<script>
    import WordsChart from '@/components/charts/words-chart.vue'

    export default {
        name: 'words',
        components: {
            'words-chart': WordsChart
        }
    }
</script>
