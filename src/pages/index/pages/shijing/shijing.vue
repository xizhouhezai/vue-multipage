<template>
  <div class="shijing">
    <template>
      <div v-for="(item, index) in data" :key="index">
        <div class="box" @click="select(item)">
          <div class="left">
            <p class="title">{{ (index + 1) + "." + item.title }}</p>
            <div>
              <span>{{ item.chapter }} </span>
              <span>{{ item.section }}</span>
            </div>
          </div>
          <div class="right">
            <img src="@/assets/shijing.jpg">
            <span class="mask-title">{{ item.title }}</span>
          </div>
        </div>
      </div>
    </template>
    <div class="navigator">
      <Button type="primary" @click="$loc.open({page: 'article', path: '/article'})">文章页</Button>
    </div>
  </div>
</template>

<script>
// import shijing from "@/assets/shijing.json"
import { Button } from 'ant-design-vue'

export default {
  data() {
    return {
      data: [
        {
          "title": "关雎",
          "chapter": "国风",
          "section": "周南",
          "content": [
            "关关雎鸠，在河之洲。窈窕淑女，君子好逑。",
            "参差荇菜，左右流之。窈窕淑女，寤寐求之。",
            "求之不得，寤寐思服。悠哉悠哉，辗转反侧。",
            "参差荇菜，左右采之。窈窕淑女，琴瑟友之。",
            "参差荇菜，左右芼之。窈窕淑女，钟鼓乐之。"
          ]
        },
        {
          "title": "葛覃",
          "chapter": "国风",
          "section": "周南",
          "content": [
            "葛之覃兮，施于中谷，维叶萋萋。黄鸟于飞，集于灌木，其鸣喈喈。",
            "葛之覃兮，施于中谷，维叶莫莫。是刈是濩，为絺为绤，服之无斁。",
            "言告师氏，言告言归。薄污我私，薄浣我衣。害浣害否，归宁父母。"
          ]
        },
        {
          "title": "卷耳",
          "chapter": "国风",
          "section": "周南",
          "content": [
            "采采卷耳，不盈顷筐。嗟我怀人，置彼周行。",
            "陟彼崔嵬，我马虺隤。我姑酌彼金罍，维以不永怀。",
            "陟彼高冈，我马玄黄。我姑酌彼兕觥，维以不永伤。",
            "陟彼砠矣，我马瘏矣，我仆痡矣，云何吁矣。"
          ]
        },
        {
          "title": "樛木",
          "chapter": "国风",
          "section": "周南",
          "content": [
            "南有樛木，葛藟累之。乐只君子，福履绥之。",
            "南有樛木，葛藟荒之。乐只君子，福履将之。",
            "南有樛木，葛藟萦之。乐只君子，福履成之。"
          ]
        },
        {
          "title": "螽斯",
          "chapter": "国风",
          "section": "周南",
          "content": [
            "螽斯羽，诜诜兮。宜尔子孙，振振兮。",
            "螽斯羽，薨薨兮。宜尔子孙。绳绳兮。",
            "螽斯羽，揖揖兮。宜尔子孙，蛰蛰兮。"
          ]
        },
        {
          "title": "桃夭",
          "chapter": "国风",
          "section": "周南",
          "content": [
            "桃之夭夭，灼灼其华。之子于归，宜其室家。",
            "桃之夭夭，有蕡其实。之子于归，宜其家室。",
            "桃之夭夭，其叶蓁蓁。之子于归，宜其家人。"
          ]
        }
      ]
    }
  },
  methods: {
    select (item) {
      this.$router.push(`/shijing/article?title=${item.title}&chapter=${item.chapter}`)
    }
  },
  components: {
    Button
  }
}
</script>

<style scoped>
.shijing {
  position: relative;
  max-width: 720px;
  margin: 0 auto;
  background-color: #ffffff;
}
.box {
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 100%;
  padding: 5px 10px;
  border-bottom: 1px solid #eeeeee;
  cursor: pointer;
}
.left {
  flex: 1;
}
.title {
  font-size: 18px;
  font-weight: bold;
  padding-bottom: 5px;
}
.right {
  position: relative;
  width: 80px;
  height: 80px;
}
.right img {
  width: 100%;
}
.mask-title {
  position: absolute;
  top: 10px;
  left: 40px;
  font-size: 16px;
}
.navigator {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 80px;
}
</style>
