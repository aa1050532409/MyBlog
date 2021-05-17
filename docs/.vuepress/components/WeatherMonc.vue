<template>
  <div class="WeatherMonc">
    <ClientOnly>
      <div class="weatherSys">
        <h3>天气查询</h3>
        <label for="weatherInput">
          <input id="weatherInput" v-model="city" type="text" @change="inputPress" placeholder="请输入查询区域名如：北京">
          <button id="weatherButton" type="button" @click="weatherQuery">查询</button>
        </label>
        <div class="show">
          <h4 v-show="showFlage">当前城市：{{city}}</h4>
          <ul class="showUl" >
            <li class="showLi" v-for="(item, itemIndex) in data" :key="itemIndex">
              <h5>{{item.date}}</h5>
              <h6>{{item.type}}</h6>
              <p>风力: {{item.fengli}}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;风向: {{item.fengxiang}}</p>
              <p>{{item.low}} ~ {{item.high}}</p>
            </li>
          </ul>
        </div>
      </div>
    </ClientOnly>
  </div>
</template>

<script>
  import axios from "axios"
  export default {
    name: 'WeatherMonc',
    data() {
      return {
        city: "",
        data: [],
        showFlage: false,
      }
    },
    methods: {
      inputPress() {
        if (this.city) {
          this.weatherQuery()
        } else {
          this.showFlage = false
          this.data = []
        }
      },
      weatherQuery() {
        const weatherUrl = "http://wthrcdn.etouch.cn/weather_mini?city="
        const weatherRequest = (city) => {
          return axios({
            url: `${weatherUrl}${city}`
          })
        }
        weatherRequest(this.city).then(res=>{
          this.showFlage = true
          this.data = res.data.data.forecast
          this.data[0].date = "今天"
          this.data[1].date = "明天"
          this.data.map(item => {
            var parrtern = /\d+/g
            item.fengli = item.fengli.match(parrtern)[0]
          })
        })
      }
    }
  }
</script>

<style scoped>
  .WeatherMonc {
    width: 100%;
    margin: 0 auto;
  }
  .weatherSys {
    display: block;
    width: 850px;
    color: coral;
    text-align: center;
    font-size: 30px;
    margin: 0 auto;
  }
  #weatherInput {
    outline: none;
    width: 600px;
    height: 40px;
    font-size: 16px;
    border: 1px solid coral;
    border-radius: 6px;
  }
  #weatherInput:focus {
    border-color: hotpink;
  }
  #weatherInput:hover {
    border-color: hotpink;
  }
  #weatherButton {
    outline: none;
    width: 150px;
    height: 44px;
    border: 1px solid coral;
    border-radius: 6px;
    background-color: coral;
    color: white;
    font-size: 16px;
  }
  #weatherButton:hover {
    border-color: hotpink;
    background-color: hotpink;
  }
  .showUl {
    width: 100%;
    height: 500px;
    padding: 0;
    list-style-type: none;
    color: darkorange;
  }
  .show h4{
    height: 20px;
    font-size: 30px;
  }
  .showLi {
    width: 33%;
    height: 60%;
    float: left;
  }
  .showLi p{
    font-size: 20px;
  }
</style>
