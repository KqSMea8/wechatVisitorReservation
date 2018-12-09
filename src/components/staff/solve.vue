<template>
  <div class="box">
    <group>
      <div>
        <p>来访时间</p>
        <input class="form-control" type="text" placeholder="2018-09-10 08:30" readonly>
            </div>
        <div>
          <p>访客姓名</p>
          <input class="form-control" type="text" placeholder="访客刘" readonly>
            </div>
          <div>
            <p>访客手机</p>
            <input class="form-control" type="text" placeholder="12345678912" readonly>
            </div>
            <div>
              <p>来访人数</p>
              <input class="form-control" type="text" placeholder="1" readonly>
            </div>
              <div>
                <p>来访事由</p>
                <input class="form-control" type="text" placeholder="邀请参观" readonly>
            </div>
                <div>
                  <p>见面地址</p>
                  <input class="form-control" type="text" placeholder="2018-09-10 08:30" readonly>
            </div>
                  <div>
                    <p>车牌号码</p>
                    <input class="form-control" type="text" placeholder="闽A 45798" readonly>
            </div>
    </group>
    <div>
      <x-button type="primary"
                :text="submit1"
                :disabled="disable1"
                @click.native="processButton1"
                style="width:40%;display:inline-block;margin-right:17%;"></x-button>
      <x-button type="primary"
                :text="submit2"
                :disabled="disable2"
                @click.native="processButton2"
                style="width:40%;display:inline-block;"></x-button>
    </div>
    <router-link to="/">
      <x-button type="primary">返回</x-button>
    </router-link>
  </div>
</template>
<script>
import {
  Group,
  XButton,
  Flexbox,
  FlexboxItem
} from 'vux'
export default {
  components: {
    Group,
    XButton,
    Flexbox,
    FlexboxItem
  },
  data () {
    return {
      submit1: '拒绝预约',
      disable1: false,
      submit2: '同意预约',
      disable2: false
    }
  },
  methods: {
    change (value) {
      console.log('change:', value)
    },
    processButton1 () {
      this.submit2 = this.submit1 = '已拒绝'
      this.disable1 = this.disable2 = true
    },
    processButton2 () {
      this.submit2 = this.submit1 = '已同意'
      this.disable1 = this.disable2 = true
    }
  }
}
</script>
<style>
div {
  margin: 2% 0%;
}

p {
  text-align: left;
  padding: 10px 0px 0px 10px;
  display: inline-block;
}

input {
  padding: 1px 10px 1px;
  border: 0px;
}

.box {
  margin: 20px 20px 40px 20px;
  text-align: center;
}
</style>
