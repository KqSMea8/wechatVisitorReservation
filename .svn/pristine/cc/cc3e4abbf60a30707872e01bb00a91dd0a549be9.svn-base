<template>
  <div class="appointmentBox">
    <div v-if="show">暂无历史记录</div>
    <div v-for="item in listSet"
         :key="item.id">
      <divider>{{ "历史纪录" }}</divider>
      <x-table>
        <thead>
          <tr>
            <th>目录</th>
            <th>详细信息</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>员工姓名</td>
            <td>{{item.resTrueName}}</td>
          </tr>
          <tr>
            <td>访客姓名</td>
            <td>{{item.visTrueName}}</td>
          </tr>
          <tr>
            <td>员工电话</td>
            <td>{{item.resTelephone}}</td>
          </tr>
          <tr>
            <td>访客电话</td>
            <td>{{item.visTelephone}}</td>
          </tr>
          <tr>
            <td>来访时间</td>
            <td>{{item.entryTime}}</td>
          </tr>
          <tr>
            <td>访问事由</td>
            <td>{{item.visitorType}}</td>
          </tr>

          <tr>
            <td>访问人数</td>
            <td>{{item.visNum}}</td>
          </tr>
          <tr>
            <td>车牌号</td>
            <td>{{item.carNumber}}</td>
          </tr>
          <tr>
            <td>身份证号</td>
            <td>{{item.identifyNo}}</td>
          </tr>
        </tbody>
      </x-table>
      <x-button type="primary"
                text='详情'
                @click.native="skip(item)"
                style="width:40% !important;display:inline-block;margin-right:5%;"></x-button>
      <x-button type="primary"
                text="填充"
                style="width:40% !important;display:inline-block;"
                @click.native="getUrl(item)"></x-button>
    </div>
  </div>
</template>
<script>
import { getVisRecordsHistory } from '../../api/api.js'
import {
  XButton,
  XTable,
  Flexbox,
  FlexboxItem,
  Group,
  FormPreview,
  Divider
} from 'vux'
export default {
  components: {
    XButton,
    XTable,
    Flexbox,
    FlexboxItem,
    Group,
    FormPreview,
    Divider
  },
  data () {
    return {
      // detailsUrl: '',
      // fillurl: '',
      // item: [],
      show: false,
      listSet: []
    }
  },

  methods: {
    getUrl (item) {
      this.$router.push({
        path: '/reservation',
        query: {
          ...item
        }
      })
    },
    Render () {
      let vm = this
      getVisRecordsHistory().then((res) => {
        console.log(res)
        if (res.data.data.length === 0) {
          vm.show = true
        }
        for (let i = 0; i < res.data.data.length; i++) {
          vm.listSet.push(res.data.data[i])
        }
        console.log('listSet      ', vm.listSet)
      })
    },
    skip (item) {
      console.log(item)
      // let carNumber = list
      this.$router.push({
        path: '/reservationDetails',
        query: {
          ...item,
          flag: 1
        }
      })
    }
  },
  created () {
    this.Render()
  }

}
</script>
<style>
.appointmentBox {
  margin: 15px;
  text-align: center;
}
</style>
