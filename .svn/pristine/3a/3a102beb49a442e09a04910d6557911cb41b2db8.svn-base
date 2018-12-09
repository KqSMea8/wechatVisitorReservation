import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
// import index from '@/components/staff/index'
// import index1 from '@/components/visitor/index1'
// import visitorbinding from '@/components/visitor/visitorbinding'
// import reservation from '@/components/visitor/reservation'
// import details from '@/components/common/details'
// import staffbinding from '@/components/staff/staffbinding'
// import invite from '@/components/staff/invite'
// import invitedetails from '@/components/common/invitedetails'
// import solve from '@/components/staff/solve'
import yu from '@/components/yu'
// import allinvite from '@/components/common/allinvite'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: '员工主页面',
      component: () => import('../components/staff/staffHomepage.vue')
      // component: index
    },
    {
      path: '/visitorHomepage',
      name: '访客主页面',
      component: () => import('../components/visitor/visitorHomepage.vue')
    },
    {
      path: '/visitorbinding',
      name: '访客注册',
      component: () => import('../components/visitor/visitorbinding.vue')
    },
    {
      path: '/reservation',
      name: '预约',
      component: () => import('../components/visitor/reservation.vue')
    },
    {
      path: '/reservationDetails',
      name: '预约详情',
      component: () => import('../components/common/reservationDetails.vue')
    },
    {
      path: '/staffbinding',
      name: '员工注册',
      component: () => import('../components/staff/staffbinding.vue')
    },
    {
      path: '/invite',
      name: '员工邀请',
      component: () => import('../components/staff/invite.vue')
    },
    {
      path: '/invitedetails',
      name: '邀请详情',
      component: () => import('../components/common/inviteDetails.vue')
    },
    {
      path: '/staffApproval',
      name: '员工审批',
      component: () => import('../components/staff/staffApproval.vue')
    },
    {
      path: '/yu',
      name: '/yu',
      component: yu
    },
    {
      path: '/VisRecordsHistory',
      name: '访客预约历史记录',
      component: () => import('../components/visitor/VisRecordsHistory.vue')
    },
    {
      path: '/ResRecordsHistory',
      name: '员工邀请历史记录',
      component: () => import('../components/staff/ResRecordsHistory.vue')
    }
  ]
})
