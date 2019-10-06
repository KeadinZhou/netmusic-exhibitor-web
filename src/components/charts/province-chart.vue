<template>
    <ve-pie
            :data="chartData"
            :settings="chartSettings">
    </ve-pie>
</template>

<script>
    export default {
        name: "province-chart",
        data () {
            return {
                chartSettings: {
                    radius: 150,
                    offsetY: 200
                },
                chartData: {
                    columns: ['province', 'cnt'],
                    rows: []
                }
            }
        },
        methods: {
            getData () {
                const that = this
                that.$http.get('http://10.66.2.161:5000/province')
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