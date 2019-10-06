<template>
    <div v-if="true" style="height: 100%">
        <ve-wordcloud
                class="center-box"
                :width="Math.min(clientWidth,clientHeight)+'px'"
                :height="Math.min(clientWidth,clientHeight)+'px'"
                :data="chartData"
                :extend="chartExtend"
                :settings="chartSettings"
                :events="chartEvents">
        </ve-wordcloud>
    </div>
</template>

<script>
    export default {
        name: "words-chart",
        data () {
            const that = this
            return {
                clientHeight: window.innerHeight - 100,
                clientWidth: window.innerWidth - 100,
                isRefresh: true,
                chartData: {
                    columns: ['word', 'cnt'],
                    rows: [{cnt: 31701030, word: "加载中"}]
                },
                chartExtend: {
                    series: {
                        width: '100%',
                        height: '100%'
                    }
                },
                chartSettings: {
                    sizeMin: 20,
                    sizeMax: 100,
                    shape: 'pentagon'
                },
                chartEvents: {
                    click: function (e) {
                        const word = e.name
                        that.$router.push('/words/' + word)
                    }
                }
            }
        },
        methods: {
            getData () {
                const that = this
                that.$http.get('http://10.66.2.161:5000/words')
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
        mounted() {
            const that = this
            window.onresize = () => {
                return (() => {
                    that.clientHeight = window.innerHeight - 100
                    that.clientWidth = window.innerWidth - 100
                })()
            }
        },
        created() {
            this.getData()
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