<template>
    <ve-ring
            :data="chartData"
            :settings="chartSettings">
    </ve-ring>
</template>

<script>
    export default {
        name: "gender-chart",
        data () {
            return {
                chartSettings: {
                    radius: [130, 150],
                    offsetY: 200
                },
                chartData: {
                    columns: ['gender', 'cnt'],
                    rows: []
                }
            }
        },
        methods: {
            getData () {
                const that = this
                that.$http.get('http://10.66.2.161:5000/gender')
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