import container from '../components/container.vue';
import container_price from '../components/container_price.vue';
import container_tender from '../components/container_tender.vue';
import container_service from '../components/container_service.vue';
import sign from '../components/sign.vue';
import register from '../components/register.vue';
import tender_detail from '../components/tender_detail.vue';
import new_detail from '../components/new_detail.vue';
import error from '../components/error.vue';

import node from '../components/node';

let routes=[
  {path:'/container',component:container},
  {path:'/container_price',component:container_price},
  {path:'/container_tender',component:container_tender},
  {path:'/container_service',component:container_service},
  {path:'/sign',component:sign},
  {path:'/register',component:register},
  {path:'/tender_detail',component:tender_detail},
  {path:'/new_detail',component:new_detail},
  {path:'/',redirect: '/container '},
  {path:'*',component:error},


  {path:'/node',component:node},
]



// export default routes;
export default {routes}
