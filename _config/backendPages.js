//Layout container
import master from 'src/layouts/master'
import blank from 'src/layouts/blank'

//Middleware
import auth from '@imagina/quser/_router/middlewares/auth'
import access from '@imagina/quser/_router/middlewares/access'

export default {
  // Category List
	categories: {
		permission: null,
		activated: true,
		path: '/event/categories',
		name: 'qevent.admin.categories.index',
		layout: require('@imagina/qevent/_layouts/admin/categories/index').default,
		containerLayout: master,
		title: 'qevent.sidebar.adminCategories',
		icon: 'fas fa-stream',
		middleware: [auth,access]
	},
  // Events List
  events: {
    permission: null,
    activated: true,
    path: '/event/events',
    name: 'qevent.admin.events.index',
    layout: require('@imagina/qevent/_layouts/admin/events/index').default,
    containerLayout: master,
    title: 'qevent.sidebar.adminEvents',
    icon: 'fas fa-calendar-check',
    middleware: [auth,access]
  },
  // Organizers List
  organizers: {
    permission: null,
    activated: true,
    path: '/event/organizers',
    name: 'qevent.admin.organizers.index',
    layout: require('@imagina/qevent/_layouts/admin/organizers/index').default,
    containerLayout: master,
    title: 'qevent.sidebar.adminOrganizers',
    icon: 'fas fa-user-tie',
    middleware: [auth,access]
  },
}
