import Admin from '@/views/Admin/index.vue'
import Products from '@/views/Admin/products/index.vue'
import Category from '@/views/Admin/category/index.vue'

export default [
  {
    path: '/admin',
    component: Admin,
    name: 'admin',
    children: [
      {
        path: 'products',
        component: Products,
        name: 'products'
      },
      {
        path: 'category',
        component: Category,
        name: 'category'
      }
    ]
  }
]
