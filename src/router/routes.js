
const routes = [
  { path: '/login', component: () => import('src/layouts/LoginLayout.vue') },
  {
    path: '/',
    redirect: '/dashboard',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '/dashboard', component: () => import('pages/DashboardPage.vue') },
      { path: '/analysis', component: () => import('pages/AnalysisPage.vue') },
      { path: '/event', component: () => import('pages/EventPage.vue') },
      { path: '/observations', component: () => import('pages/ObservationsPage.vue') },
      { path: '/threats', component: () => import('pages/ThreatsPage.vue') },
      { path: '/arsenal', component: () => import('pages/ArsenalPage.vue') },
      { path: '/entities', component: () => import('pages/EntitiesPage.vue') },
      { path: '/backgroundtasks', component: () => import('src/pages/BackgroundTasksPage.vue') },
      { path: '/settings', component: () => import('pages/SettingsPage.vue') },
      { path: '/connectors', component: () => import('pages/ConnectorsPage.vue') },
      { path: '/entities/reports/:id', component: () => import('src/pages/uniquepage/ReportPage.vue') },
      { path: '/threats/:apiRootName', component: () => import('pages/uniquepage/APIRootPage.vue') },
      { path: '/threats/:apiRootName/:collectionId', component: () => import('pages/uniquepage/CollectionPage.vue') },
      { path: '/threats/:apiRootName/:collectionId/:objectId', component: () => import('pages/uniquepage/ObjectPage.vue') },
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
