<template>
  <div class="content" :style="{height: height + 'px'}">
    <div class="title">{{ title }}</div>
    <div v-for="(item, index) in content" :key="index">
      <p>{{ item }}</p>
    </div>
  </div>
</template>

<script>

export default {
  data() {
    return {
      title: '',
      chapter: '',
      content: [],
      listData: [
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
      ],
      height: 0,
    }
  },
  mounted () {
    window.console.log(this.$route)
    this.title = this.$route.query.title
    this.chapter = this.$route.query.chapter
    let temp = this.listData.filter(item => (item.title === this.$route.query.title && item.chapter === this.$route.query.chapter))
    this.content = temp[0].content
    this.height = document.documentElement.offsetHeight
  },
}
</script>

<style scoped>
.content {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
.title {
  margin-bottom: 20px;
}
.slide-fade-enter-active,
.slide-fade-leave-active {
  transition: left 3s;
}
.slide-fade-enter {
  left: 0%;
}
.slide-fade-enter-to {
  left: 100%;
}
.slide-fade-leave {
  left: 100%;
}
.slide-fade-leave-to {
  left: 0;
}
</style>
