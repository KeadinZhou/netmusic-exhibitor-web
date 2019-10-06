<template>
    <ve-pie
            :legend-visible="false"
            :data="chartData"
            :settings="chartSettings">
    </ve-pie>
</template>

<script>
    export default {
        name: "constellation-chart",
        data () {
            return {
                chartSettings: {
                    roseType: 'radius',
                    radius: 150,
                    offsetY: 200
                },
                chartData: {
                    columns: ['constellation', 'cnt'],
                    rows: []
                }
            }
        },
        methods: {
            getData () {
                const that = this
                that.$http.get('http://10.66.2.161:5000/constellation')
                    .then(data => {
                        that.chartData.rows = data.data.data
                    })
                    .catch(function (error) {
                        if (error.response) {
                            alert(error.response)
                        }
                    })
            }
        },
        created() {
            this.getData()
        }
    }
</script>

<style scoped>

</style>