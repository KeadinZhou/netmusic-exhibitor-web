<template>
    <div>
        <ve-line
                :legend-visible="false"
                height="600px"
                :data="chartData"
                :settings="chartSettings">
        </ve-line>
    </div>
</template>

<script>
    export default {
        name: "publish-chart",
        data () {
            return {
                chartData: {
                    columns: ['year', 'cnt'],
                    rows: []
                },
                chartSettings:{
                    area: true
                }
            }
        },
        methods: {
            getData () {
                const that = this
                that.$http.get('http://10.66.2.161:5000/publish')
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