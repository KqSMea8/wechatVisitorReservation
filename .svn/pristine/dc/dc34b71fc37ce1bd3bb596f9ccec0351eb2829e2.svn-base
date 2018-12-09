<template>
  <div class="box">
    <group>
      <!-- <cell title="详细信息"></cell> -->
      <x-table>
        <thead>
          <tr>
            <th>目录</th>
            <th>详细信息</th>
          </tr>
        </thead>
        <tbody>
          <!-- <tr>
            <td>员工姓名</td>
            <td>{{resTrueName}}</td>
          </tr> -->
          <tr>
            <td>访客姓名</td>
            <td>{{visTrueName}}</td>
          </tr>
          <tr>
            <td>员工电话</td>
            <td>{{resTelephone}}</td>
          </tr>
          <tr>
            <td>访客电话</td>
            <td>{{visTelephone}}</td>
          </tr>
          <tr>
            <td>来访时间</td>
            <td>{{entryTime}}</td>
          </tr>
          <tr>
            <td>访问事由</td>
            <td>{{visitorType}}</td>
          </tr>

          <tr>
            <td>访问人数</td>
            <td>{{visNum}}</td>
          </tr>
          <tr>
            <td>车牌号</td>
            <td>{{carNumber}}</td>
          </tr>
          <tr>
            <td>身份证号</td>
            <td>{{identifyNo}}</td>
          </tr>
          <tr>
            <td>审批状态</td>
            <td>{{recordState === 'wait' ? '待审核' : recordState === 'agree' ? '同意' : recordState === 'disagree' ? '不同意' : ''}}</td>
          </tr>
        </tbody>
      </x-table>
    </group>
    <div>
      <x-button type="warn"
                :disabled="disable1"
                @click.native="disagreeButton"
                style="width:40% !important;display:inline-block;margin-right:17%;">拒绝预约</x-button>
      <x-button type="primary"
                :disabled="disable2"
                @click.native="agreeButton"
                style="width:40% !important;display:inline-block;">同意预约</x-button>
    </div>
    <confirm v-model="showAgree"
             :title="'是否同意预约'"
             @on-cancel="agreeOnCancel"
             @on-confirm="agreeOnConfirm">
      <p style="text-align:center;">{{ ('确定吗?') }}</p>
    </confirm>
    <confirm v-model="showDisagree"
             :title="'是否拒绝预约'"
             @on-cancel="disOnCancel"
             @on-confirm="disOnConfirm">
      <p style="text-align:center;">{{ ('确定吗?') }}</p>
    </confirm>
    <!-- <router-link to="/">
      <x-button type="primary">返回</x-button>
    </router-link> -->
    <toast v-model="showPositionValue"
           type="text"
           :time="800"
           is-show-mask
           :position="position">{{ toastText }}</toast>
    <loading :show="loadingShow"
             :text="loadingText"></loading>
  </div>
</template>
<script>
import { getVisRecordDetails, setrecordState } from '../../api/api.js'
import { getQueryString } from '../../utils/common.js'
import {
  XTable,
  Flexbox,
  FlexboxItem,
  Group,
  Cell,
  XInput,
  XTextarea,
  XButton,
  XNumber,
  PopupRadio,
  CellFormPreview,
  Qrcode,
  Divider,
  Datetime,
  PopupPicker,
  Confirm,
  Toast,
  Loading

} from 'vux'
// import { userInfo } from 'os'
export default {
  components: {
    XTable,
    Flexbox,
    FlexboxItem,
    Group,
    Cell,
    XInput,
    XTextarea,
    XButton,
    XNumber,
    PopupRadio,
    CellFormPreview,
    Qrcode,
    Divider,
    Datetime,
    PopupPicker,
    Confirm,
    Toast,
    Loading

  },
  data () {
    return {
      loadingShow: false,
      loadingText: '审批中...',
      disable1: true,
      disable2: true,
      qrUrl: '',
      recordState: '',
      // resTrueName: '',
      visTrueName: '',
      resTelephone: '',
      visTelephone: '',
      entryTime: '',
      visNum: '',
      visitorType: '',
      carNumber: '',
      identifyNo: '',
      showDisagree: false,
      showAgree: false,
      showPositionValue: false,
      position: 'middle',
      toastText: ''
    }
  },
  methods: {
    showPosition () {
      this.showPositionValue = true
    },
    agreeOnCancel () {
    },
    agreeOnConfirm () {
      this.loadingShow = true
      this.loadingText = '审批中...'
      let recordId = getQueryString('recordId')
      let recordOpenId = getQueryString('recordOpenId')
      console.log('同意 recordId ============= ', recordId)
      console.log('同意 recordOpenId ============= ', recordOpenId)
      let recordState = 'agree'
      setrecordState(recordState, recordId, recordOpenId).then((res) => {
        console.log(res)
        this.loadingShow = false
        if (res.data.data === 1) {
          this.toastText = '审批成功'
          this.recordState = 'agree'
        } else if (res.data.data === -1) {
          this.toastText = '审批失败'
          this.recordState = 'wait'
        }
        this.showPositionValue = true
        this.disable1 = this.disable2 = true
        // this.skip()
      })
    },
    disOnCancel () {
    },
    disOnConfirm () {
      this.loadingShow = true
      this.loadingText = '审批中...'
      let recordId = getQueryString('recordId')
      let recordOpenId = getQueryString('recordOpenId')
      console.log('不同意 recordId ============= ', recordId)
      console.log('不同意 recordOpenId ============= ', recordOpenId)
      let recordState = 'disagree'
      setrecordState(recordState, recordId, recordOpenId).then((res) => {
        console.log(res)
        this.loadingShow = false
        if (res.data.data === 1) {
          this.toastText = '审批成功'
          this.recordState = 'disagree'
        } else if (res.data.data === -1) {
          this.toastText = '审批失败'
          this.recordState = 'wait'
        }
        this.showPositionValue = true
        this.disable1 = this.disable2 = true
        // this.skip()
      })
    },
    change (value) {
      console.log('change:', value)
    },
    disagreeButton () {
      this.showDisagree = true
    },
    agreeButton () {
      this.showAgree = true
    },
    Render () {
      let recordId = getQueryString('recordId')
      console.log('recordId ============= ', recordId)
      let recordOpenId = getQueryString('recordOpenId')
      console.log('同意 recordOpenId ============= ', recordOpenId)
      getVisRecordDetails(recordId).then((res) => {
        console.log(res)
        this.resTelephone = res.data.data.resTelephone
        this.visTelephone = res.data.data.visTelephone
        this.visitorType = res.data.data.visitorType
        // this.resTrueName = res.data.data.resTrueName
        this.visTrueName = res.data.data.visTrueName
        this.entryTime = res.data.data.entryTime
        this.visNum = res.data.data.visNum
        this.carNumber = res.data.data.carNumber
        this.identifyNo = res.data.data.identifyNo
        this.qrUrl = res.data.data.qrUrl
        let state = res.data.data.recordState
        this.recordState = state
        if (state === 'wait') {
          this.disable1 = this.disable2 = false
        }
      })
    },
    skip () {
      this.$router.push({
        path: '/'
      })
    }

  },
  created () {
    this.Render()
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
