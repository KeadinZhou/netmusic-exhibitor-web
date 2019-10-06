<template>
    <div>
        <div class="center-box" style="width: 600px; text-align: center">
            <h1 style="margin: 60px">{{ word }} </h1>
            <el-card v-for="(item,index) in sentenceData" :key="index"  shadow="hover" style="margin: 20px 0">
                <p style="font-size: 32px; margin-bottom: 5px">{{ item.lrc1 }}<b>{{ word }}</b>{{ item.lrc2 }}</p>
                <p>{{ item.singer }}《{{ item.name }}》</p>
            </el-card>
            <div style="margin: 60px 0">
                <el-button icon="el-icon-refresh" circle @click="getData"></el-button>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "sentence-table",
        props: {
            word: String
        },
        data () {
            return {
                sentenceData: []
            }
        },
        methods: {
            sentenceBreak () {
                for(const index in this.sentenceData) {
                    var lrc = this.sentenceData[index].lrc
                    const pos = lrc.indexOf(this.word)
                    lrc = lrc.replace(/，/g,' ').replace(/。/g,' ').replace(/、/g,' ').trim()
                    this.sentenceData[index].lrc1 = lrc.substring(0,pos)
                    this.sentenceData[index].lrc2 = lrc.substring(pos+this.word.length)
                }
            },
            getData () {
                const that = this
                that.$http.get('http://10.66.2.161:5000/words/' + that.word)
                    .then(data => {
                        that.sentenceData = data.data.data
                        that.sentenceBreak()
                    })
                    .catch(function (error) {
                        if (error.response) {
                            alert(error.response)
                        }
                    })
            }
        },
        created () {
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