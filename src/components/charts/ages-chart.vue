<template>
    <ve-bar
            :legend-visible="false"
            height="600px"
            :data="chartData">
    </ve-bar>
</template>

<script>
    export default {
        name: "ages-chart",
        data () {
            return {
                chartData: {
                    columns: ['ages', 'cnt'],
                    rows: []
                }
            }
        },
        methods: {
            getData () {
                const that = this
                that.$http.get('http://10.66.2.161:5000/ages')
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