
const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '/dashboard', component: () => import('pages/DashboardPage.vue') },
      { path: '/analysis', component: () => import('pages/AnalysisPage.vue') },
      { path: '/event', component: () => import('pages/EventPage.vue') },
      { path: '/observations', component: () => import('pages/ObservationsPage.vue') },
      { path: '/threats', component: () => import('pages/ThreatsPage.vue') },
      { path: '/arsenal', component: () => import('pages/ArsenalPage.vue') },
      { path: '/entities', component: () => import('pages/EntitiesPage.vue') },
      { path: '/data', component: () => import('pages/DataPage.vue') },
      { path: '/settings', component: () => import('pages/SettingsPage.vue') },
    ]
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue')
  }
]

export default routes