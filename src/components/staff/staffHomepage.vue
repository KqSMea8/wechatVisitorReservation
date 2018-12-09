<template>
  <div class="vux-1px orderBox">
    <flexbox>
      <flexbox-item>
        <card>
          <swiper slot="header"
                  loop
                  auto
                  :list="swiperList"
                  v-model="swiperIndex"
                  @on-index-change="swiperOnIndexChange"
                  dots-class="custom-bottom"
                  dots-position="right"></swiper>
          <div slot="content"
               class="card-padding">
            <group>
              <cell title="员工绑定"
                    v-show="resType"
                    :link="{path:'../staffbinding'}">
              </cell>
              <cell title="预约凭证"
                    :link="{path:'../ResRecordsHistory'}">
              </cell>
              <cell title="邀请访客"
                    :link="{path:'../invite'}">
              </cell>
            </group>
          </div>
        </card>
      </flexbox-item>
    </flexbox>
  </div>
</template>

<script>

// import { getUserInfoByCode } from '@/api/api.js'
import { setUserAuthorize, isResType } from '@/utils/common.js'
import {
  Flexbox,
  FlexboxItem,
  Group,
  Cell,
  Card,
  Swiper
} from 'vux'
const baseList = [{
  url: 'javascript:',
  img: 'https://ww1.sinaimg.cn/large/663d3650gy1fq66vvsr72j20p00gogo2.jpg',
  title: '送你一朵fua'
}, {
  url: 'javascript:',
  img: 'https://ww1.sinaimg.cn/large/663d3650gy1fq66vw1k2wj20p00goq7n.jpg',
  title: '送你一辆车'
}, {
  url: 'javascript:',
  title: '送你一次旅行',
  fallbackImg: 'https://ww1.sinaimg.cn/large/663d3650gy1fq66vw50iwj20ff0aaaci.jpg'
}]

export default {
  components: {
    Group,
    Cell,
    Card,
    Swiper,
    Flexbox,
    FlexboxItem
  },
  data () {
    return {
      swiperList: baseList,
      swiperIndex: 0,
      resType: true
    }
  },
  methods: {
    swiperOnIndexChange (index) {
      this.swiperIndex = index
    },
    removeCellArrow () {
      let cells = document.getElementsByClassName('weui-cell')
      for (let cell of cells) {
        if (cell.classList.length > 1) {
          cell.classList.remove('vux-tap-active', 'weui-cell_access')
        }
      }
    },
    _isResType () {
      let vm = this
      if (isResType()) {
        vm.resType = false
      }
    }
  },
  created () {
    setUserAuthorize()
    // this._isResType()
  },
  mounted () {
    this.removeCellArrow()
  }
}
</script>

<style lang="less">
@import '~vux/src/styles/1px.less';

.vux-1px:before {
  border-radius: 8px;
  -webkit-border-radius: 8px;
  -moz-border-radius: 8px;
}

.orderBox {
  margin: 15px;
  padding: 15px 15px 3px 15px;
  background: #fff;
  border-radius: 8px;
  -webkit-border-radius: 8px;
  -moz-border-radius: 8px;
}

.card-padding .weui-cells:after {
  border-bottom: 0;
}

.card-padding .weui-cell {
  padding-left: 0;
  padding-right: 0;
}

.card-padding .weui-cell:before {
  left: 0;
}

.weui-panel:after {
  border-bottom: 0 !important;
}
</style>
