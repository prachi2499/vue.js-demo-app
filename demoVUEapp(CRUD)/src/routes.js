

import viewcat  from './viewfile/viewcat'
import home from './viewfile/home.vue'
import addcategory from './viewfile/addcategory.vue'
import editcat from './viewfile/editcat.vue'

export default [
  {path:"/",component:home},
  {path:"/home",component:home},
  {path:"/cat",component:viewcat},
  {path:"/addcat",component:addcategory},
  {path:"/editcat/:id",component:editcat}
];
