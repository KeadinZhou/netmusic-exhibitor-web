<template>
    <div>
        <div class="center-box" style="width: 600px; text-align: center">
            <h1 style="margin: 60px">歌曲评论数量预测</h1>
            <el-card shadow="hover" style="margin: 20px 0">
                <el-input
                        @change="hasRes=false"
                        type="textarea"
                        :autosize="{ minRows: 5, maxRows: 10}"
                        placeholder="输入 以回车分隔的关键词 或 完整的歌词"
                        v-model="words">
                </el-input>
            </el-card>
            <div>
                <div style="float: left">
                    <el-radio v-model="isKey" :label="true">关键词</el-radio>
                    <el-radio v-model="isKey" :label="false">完整歌词</el-radio>
                </div>
                <div style="float: right">
                    <el-button plain @click="getRes" size="mini" :icon="loading?'el-icon-loading':''">{{ loading?'':'开始预测' }}</el-button>
                </div>
            </div>
            <transition name="el-fade-in-linear">
                <template v-if="hasRes">
                    <el-card shadow="hover" style="margin: 100px 0">
                        <h2 style="margin: 20px">预测结果</h2>
                        <h5 style="margin: 10px">评论数可能为</h5>
                        <h1 style="font-size: 64px">{{ forecastRes.value }}</h1>
                        <h5 style="margin: 10px">各关键词贡献</h5>
                        <word-value-chart :words="forecastRes.words"></word-value-chart>
                        <p style="color: gray; font-size: 10px">* 预测结果仅供参考</p>
                    </el-card>
                </template>
            </transition>
        </div>
    </div>
</template>

<script>
    import WordValueChart from '@/components/charts/word-value-chart'
    export default {
        name: "Forecast",
        components: {
            'word-value-chart': WordValueChart
        },
        data () {
            return {
                words: '',
                isKey: true,
                hasRes: false,
                forecastRes: null,
                loading: false
            }
        },
        methods: {
            getRes () {
                this.loading = true
                const that = this
                var sendData
                if(that.isKey){
                    sendData = {
                        'words': that.words.split('\n')
                    }
                } else {
                    sendData = {
                        'lrc': that.words
                    }
                }
                that.$http.post('http://10.66.2.161:5000/forecast', sendData)
                    .then(data => {
                        that.forecastRes = data.data
                        that.hasRes = true
                        that.loading = false
                    })
                    .catch(function (error) {
                        if (error.response) {
                            alert(error.response)
                        }
                    })
            }
        },
        watch: {
            words: function () {
                this.hasRes = false
            },
            isKey: function () {
                this.hasRes = false
            }
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