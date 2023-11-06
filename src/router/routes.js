
const routes = [
  {
    path: '/soumya',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/IndexPage.vue') },
      { path: 'personaldetails', component: () => import('pages/PersonalDetails.vue') }
     
    ]
  },

  // {
  //   path: '/soumya',
  //   component: () => import('layouts/MainLayout.vue'),
  //   children: [
  //     { path: '/PersonalDetails', component: () => import('pages/PersonalDetails.vue') },
     
  //   ]
  // },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue')
  }
]

export default routes
