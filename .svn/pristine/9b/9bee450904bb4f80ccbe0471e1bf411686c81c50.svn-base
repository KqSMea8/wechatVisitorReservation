<template>
  <div class="appointmentBox">
    <flexbox>
      <flexbox-item>
        <p class="theme">请填写邀请信息</p>
        <form>
          <fieldset>
            <legend>贵宾姓名</legend>
            <x-input type="text"
                     v-model="userInfo.visTrueName"
                     required
                     style="position:static"></x-input>
          </fieldset>
        </form>
        <form>
          <fieldset>
            <legend>对方手机</legend>
            <x-input type="text"
                     mask="99999999999"
                     v-model="userInfo.visTelephone"
                     is-type="china-mobile"
                     required
                     style="position:static"></x-input>
          </fieldset>
        </form>
        <form>
          <fieldset>
            <legend>您的手机</legend>
            <x-input type="text"
                     mask="99999999999"
                     v-model="userInfo.resTelephone"
                     is-type="china-mobile"
                     required
                     style="position:static"></x-input>
          </fieldset>
        </form>
        <form>
          <fieldset>
            <legend>来访时间</legend>
            <datetime-range title=""
                            :start-date="startDate"
                            :end-date="endDate"
                            :format="'YYYY年MM月DD日'"
                            v-model="userInfo.startTime"
                            @on-change="changeStartTime"
                            class="test"></datetime-range>
          </fieldset>
        </form>
        <form>
          <form>
            <fieldset>
              <legend>截至时间</legend>
              <datetime-range title=""
                              :start-date="startDate1"
                              :end-date="endDate1"
                              :format="'YYYY年MM月DD日'"
                              v-model="userInfo.endTime"
                              @on-change="changeendTime"
                              class="test"></datetime-range>
            </fieldset>
          </form>
          <fieldset>
            <legend>到访人数</legend>
            <popup-picker title=""
                          :data="list1"
                          placeholder="请选择人数"
                          @on-show="onShow"
                          @on-hide="onHide"
                          class="test"
                          v-model="dataNum"
                          @on-change="changeVisitorNum"
                          required
                          style="position:static"></popup-picker>
          </fieldset>
        </form>
        <form>
          <fieldset>
            <legend>到访事由</legend>
            <popup-picker title=""
                          placeholder="预约参观"
                          :data="list2"
                          v-model="userInfo.visitorType"
                          @on-show="onShow"
                          @on-hide="onHide"
                          @on-change="changeVisitorType"
                          class="test"
                          style="position:static"></popup-picker>
          </fieldset>
          <fieldset>
            <legend>车牌号码</legend>
            <x-input type="text"
                     placeholder="(选填)"
                     v-model="userInfo.carNumber"
                     @on-focus="onFocus"
                     @on-blur="onBlur"
                     style="position:static"></x-input>
          </fieldset>
        </form>
      </flexbox-item>
    </flexbox>
    <flexbox>
      <flexbox-item>
        <x-button @click.native="showPosition('middle')"
                  type="primary">提交</x-button>
      </flexbox-item>
      <toast v-model="showPositionValue"
             type="text"
             :time="800"
             is-show-mask
             :position="position">{{ toastText }}</toast>
      <loading :show="loadingShow"
               :text="loadingText"></loading>
    </flexbox>
  </div>
</template>
<script>
import { setInviteInfo } from '../../api/api.js'
import { isResType } from '../../utils/common.js'
import { getDate } from '../../utils/getday.js'
import { upDate } from '../../utils/upday.js'
import {
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
  DatetimeRange,
  Toast,
  Loading

} from 'vux'

export default {
  components: {
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
    DatetimeRange,
    Toast,
    Loading

  },
  data () {
    return {
      loadingShow: false,
      loadingText: '邀请中...',
      toastText: '',
      userInfo: {
        visTrueName: '',
        resTelephone: '',
        visTelephone: '',
        carNumber: '',
        endTime: [],
        visitorNum: ''
      },
      fillUrl: '',
      visitorType: ['预约参观'],
      dataNum: ['1'],
      endTime: [],
      startTime: [],
      startDate: [],
      endDate: [],
      startDate1: [],
      endDate1: [],
      msg: '',
      list1: [['1', '2', '3', '4', '5', '6', '7', '8', '9', '10人及其以上']],
      list2: [['预约参观', '邀请访问']],
      position: 'default',
      showPositionValue: false
    }
  },

  methods: {
    isVehicleNo (str) {
      return /^(([\u4E00-\u9FA5][A-Z](([0-9]{5}[DF])|([DF]([A-HJ-NP-Z0-9])[0-9]{4})))|([\u4E00-\u9FA5][A-Z][A-HJ-NP-Z0-9]{4}[A-HJ-NP-Z0-9挂学警港澳使领]))$/.test(
        str
      )
    },
    onFocus (val) {
    },
    onBlur (val) {
      if (val) {
        if (!this.isVehicleNo(val) === true) {
          event.target.parentNode.parentNode.classList.add('weui-cell_warn')
        } else {
          if (
            event.target.parentNode.parentNode.classList.contains(
              'weui-cell_warn'
            )
          ) {
            event.target.parentNode.parentNode.classList.remove(
              'weui-cell_warn'
            )
          }
        }
      }
    },
    changeStartTime (val) {
      this.startTime = val[0].toString() + ' ' + val[1].toString() + ':' + val[2].toString()
    },
    StartTime () {
      let date = new Date()
      let startYear = date.getFullYear() + '-'
      let startMonth = (date.getMonth() + 1 < 10 ? '0' + (date.getMonth() + 1) : date.getMonth() + 1) + '-'
      let startDate = (date.getDate() < 10 ? '0' + (date.getDate()) : date.getDate()) + ' '
      let startHours = date.getHours() < 10 ? '0' + (date.getHours()) : date.getHours()
      let startMInutes = date.getMinutes() < 10 ? '0' + (date.getMinutes()) : date.getMinutes()
      let exactDate = startYear + startMonth + startDate
      this.userInfo.startTime = [exactDate, startHours, startMInutes]
    },
    EndTime () {
      let date = new Date()
      let endYear = date.getFullYear() + '-'
      let endMonth = (date.getMonth() + 1 < 10 ? '0' + (date.getMonth() + 1) : date.getMonth() + 1) + '-'
      let endDate = (date.getDate() < 10 ? '0' + (date.getDate()) : date.getDate()) + ' '
      let endHours = (date.getHours() + 4) < 10 ? '0' + (date.getHours() + 4) : date.getHours() + 4
      if (endHours > 24) {
        endDate++
        endHours -= 24
      }
      let endMinutes = date.getMinutes() < 10 ? '0' + (date.getMinutes()) : date.getMinutes()
      let exactDate1 = endYear + endMonth + endDate
      this.userInfo.endTime = [exactDate1, endHours, endMinutes]
    },
    changeendTime (val) {
      this.endTime = val[0].toString() + ' ' + val[1].toString() + ':' + val[2].toString()
    },
    changeVisitorNum (val) {
      this.data = val
    },
    changeVisitorType (val) {
      this.visitorType = val
    },
    onShow () {
    },
    onHide (type) {
    },
    setDate () {
      let arr = getDate()
      this.startDate = arr[0]
      this.endDate = arr[1]
    },
    upDate () {
      let arr = upDate()
      this.startDate1 = arr[0]
      this.endDate1 = arr[1]
    },
    back () {
      this.$router.back(-1)
    },
    showPosition (position) {
      let vm = this
      vm.position = position
      vm.loadingShow = true
      let inviteVistorInfo = new FormData()
      inviteVistorInfo.append('trueName', this.userInfo.visTrueName)
      inviteVistorInfo.append('telephone', this.userInfo.visTelephone)
      inviteVistorInfo.append('resTelephone', this.userInfo.resTelephone)
      vm.startTime = this._timeFormat(this.userInfo.startTime)
      vm.endTime = this._timeFormat(this.userInfo.endTime)
      inviteVistorInfo.append('startTime', this.startTime)
      inviteVistorInfo.append('endTime', this.endTime)
      let str = this.dataNum[0]
      console.log('visitorNum 人数', str.toString())
      inviteVistorInfo.append('visitorNum', str.toString())
      let visTypeStr = this._visTypeFormat(this.visitorType)
      inviteVistorInfo.append('visitorType', visTypeStr)
      inviteVistorInfo.append('carNumber', this.userInfo.carNumber)
      setInviteInfo(inviteVistorInfo).then((res) => {
        this.loadingShow = false
        console.log(res)
        if (res.data.data === 1) {
          vm.toastText = '邀请成功'
          vm.showPositionValue = true
          setTimeout(() => {
            vm.skip()
          }, 2000)
        } else if (res.data.data === -1) {
          vm.toastText = '邀请失败'
          vm.showPositionValue = true
        } else if (res.data.data === -2) {
          this.toastText = '图片上传失败'
          this.showPositionValue = true
        } else if (res.data.data === -3) {
          this.toastText = '访客手机号未注册'
          this.showPositionValue = true
        }
      }).catch((err) => {
        this.loadingShow = false
        console.log(err)
      })
    },
    _timeFormat (val) {
      if (val instanceof Array) {
        return val[0].toString() + ' ' + val[1].toString() + ':' + val[2].toString()
      }
      // throw new Error('传入的必须是一个数组')
    },
    _visTypeFormat (val) {
      if (val instanceof Array) {
        let str = val.toString()
        if (str === '预约参观') {
          str = 'visit'
          return str
        } else if (str === '邀请访问') {
          str = 'invitation'
          return str
        }
      }
      // throw new Error('传入的必须是一个数组')
    },
    skip () {
      this.$router.push({
        path: '/'
      })
    },
    getUrlParams () {
      // this.userInfo.visTrueName = this._GetQueryString('visTrueName')
      // this.userInfo.resTelephone = this._GetQueryString('resTelephone')
      // this.userInfo.visTelephone = this._GetQueryString('visTelephone')
      // this.userInfo.carNumber = this._GetQueryString('carNumber')
      // let dataArr = []
      // dataArr.push(this._GetQueryString('visNum'))
      // this.data = dataArr
      // let visTypeArr = []
      // visTypeArr.push(this._GetQueryString('visitorType'))
      // this.visitorType = visTypeArr
      // 只是改了query，其他都不变
      let url = decodeURI(document.location.toString())
      if (url.includes('visitorType')) {
        console.log('包含')
        // if (arrObj.length > 1) {
        this.userInfo.resTelephone = this.$route.query.resTelephone
        this.userInfo.visTelephone = this.$route.query.visTelephone
        this.visitorType = this.$route.query.visitorType
        let visTypeArr = []
        visTypeArr.push(this.$route.query.visitorType)
        this.visitorType = visTypeArr
        this.userInfo.resTrueName = this.$route.query.resTrueName
        this.userInfo.visTrueName = this.$route.query.visTrueName
        // this.userInfo.startTime = this.$route.query.entryTime
        this.data = this.$route.query.visNum
        let dataArr = []
        dataArr.push(this.$route.query.visNum)
        this.data = dataArr
        this.userInfo.carNumber = this.$route.query.carNumber
      }
      // this.userInfo.identifyNo = this.$route.query.identifyNo
      // this.userInfo.qrUrl = this.$route.query.qrUrl
      // let state = this.$route.query.recordState

      // if (state === 'wait') {
      //   this.recordState = '待审批'
      // } else if (state === 'agree') {
      //   this.recordState = '同意'
      // } else if (state === 'disagree') {
      //   this.recordState = '不同意'
      // }
    },
    // _GetQueryString (paraName) {
    //   let url = decodeURI(document.location.toString())
    //   let arrObj = url.split('?')
    //   if (arrObj.length > 1) {
    //     let arrPara = arrObj[1].split('&')
    //     let arr
    //     for (let i = 0; i < arrPara.length; i++) {
    //       arr = arrPara[i].split('=')
    //       if (arr != null && arr[0] === paraName) {
    //         return arr[1]
    //       }
    //     }
    //     return ''
    //   } else {
    //     return ''
    //   }
    // },
    // filling () {
    //   getResRecordsHistory().then((res) => {
    //     console.log('res', res)
    //     this.userInfo.visTelephone = res.data.data[0].visTrueName
    //     this.userInfo.visTelephone = res.data.data[0].visTelephone
    //     this.userInfo.resTelephone = res.data.data[0].resTelephone
    //     let str1 = res.data.data[0].visNum
    //     this.userInfo.data = str1.toString()
    //     this.userInfo.visitorType = res.data.data[0].visitorType.toString()
    //   })
    // }
    _isResType () {
      let vm = this
      if (!isResType()) {
        vm.toastText = '请先注册'
        vm.showPositionValue = true
        setTimeout(() => {
          vm.$router.push({
            path: '/staffbinding'
          })
        }, 2000)
      }
    }
  },
  watch: {
    '$route': 'getParams'
  },
  created () {
    this.setDate()
    this.upDate()
    this.StartTime()
    this.EndTime()
    this.getUrlParams()
    // this.filling()
    this._isResType()
  },
  beforeDestroy () {
    clearInterval(this.timer)
  }
}
</script>

<style>
.theme {
  width: 60%;
  background: #ddf0dc;
  color: #477849;
  font-size: 1.5rem;
  margin: 40px auto 0;
  text-align: center;
  padding: 15px;
}

.appointmentBox {
  margin: 5px;
  text-align: center;
}

button {
  width: 80% !important;
  margin: 30px auto 20px;
}

fieldset {
  margin: 30px auto 0;
  padding: 0px auto;
  width: 70%;
  border-color: #b1afb2;
  border-width: 1px;
  border-radius: 7px;
}

legend {
  margin-left: 15px;
  margin-bottom: -5px;
}

input {
  background: rgba(0, 0, 0, 0);
  border-style: hidden;
  width: 95%;
  height: 35px;
  margin-left: 2%;
  margin-bottom: 1%;
  outline: none;
  caret-color: #71abce;
}

.test .vux-popup-picker-select {
  width: 100%;
  position: static;
  text-align: center !important;
}
</style>
