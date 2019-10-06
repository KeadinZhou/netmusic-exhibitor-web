<template>
    <ve-pie
            :data="chartData"
            :settings="chartSettings"
            :legend-visible="false">
    </ve-pie>
</template>

<script>
    export default {
        name: "word-value-chart",
        props: {
            words: Array
        },
        data () {
            return {
                chartData: {
                    columns: ['word', 'value'],
                    rows: this.words
                },
                chartSettings: {
                    roseType: 'radius'
                }
            }
        }
    }
</script>

<style scoped>

</style>