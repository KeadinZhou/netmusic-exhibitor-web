<template>
    <ve-map
            width="500px"
            :data="chartData"
            :settings="chartSettings">
    </ve-map>
</template>

<script>
    export default {
        name: "map-chart",
        data () {
            return {
                chartSettings: {
                    label: false
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
                        for(var item of data.data.data) {
                            item.province = item.province.replace('省','')
                            that.chartData.rows.push(item)
                        }
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