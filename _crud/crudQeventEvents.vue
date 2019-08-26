<template></template>
<script>
  export default {
    computed: {
      crudData() {
        return {
          apiRoute: 'apiRoutes.qevent.events',
          permission: 'ievent.events',
          create: {
            title: this.$tr('qevent.layout.newEvent'),
          },
          read: {
            columns: [
              {name: 'id', label: this.$tr('ui.form.id'), field: 'id', style: 'width: 50px'},
              {name: 'title', label: this.$tr('ui.form.title'), field: 'title', style: '', align:''},
              {name: 'startDate', label: this.$tr('qevent.layout.form.startDate'), field: 'startDate', style: '', format: val => val ? this.$trd(val) : '-',},
              {name: 'endDate', label: this.$tr('qevent.layout.form.endDate'), field: 'endDate', style: '', format: val => val ? this.$trd(val) : '-',},
              {name: 'price', label: this.$tr('ui.form.price'), field: 'price', style: '', format: val => this.$n(val, 'currency', this.$q.i18n.lang)},
              {name: 'actions', label: this.$tr('ui.form.actions'), align: ''},
            ],
            requestParams: {include: 'categories'},
            filters:{
              status: {
                label: `${this.$tr('ui.form.status')}:`,
                value: false,
                type: 'select',
                isRequired: true,
                isTranslatable: false,
                options: [
                  {label: this.$tr('ui.label.all'), id: false},
                  {label: this.$tr('ui.form.publish'), id: 2},
                  {label: this.$tr('ui.form.noPublish'), id: 3},
                  {label: this.$tr('ui.form.draft'), id: 0},
                  {label: this.$tr('ui.form.pending'), id: 1}
                ],
              },
            }
          },
          update: {
            title: this.$tr('qevent.layout.updateEvent'),
            requestParams: {include: 'categories'}
          },
          delete: true,
          formLeft: {
            id: {value: ''},
            userId: {value: this.$store.state.quserAuth.userId},
            title: {
              label: this.$tr('ui.form.title'),
              value: '',
              type: 'text',
              isRequired: true,
              isTranslatable: true,
            },
            description: {
              label: this.$tr('ui.form.description'),
              value: '',
              type: 'html',
              isRequired: true,
              isTranslatable: true,
            },
            slug: {
              label: this.$tr('ui.form.slug'),
              value: '',
              type: 'text',
              isRequired: true,
              isTranslatable: true,
            },
            summary: {
              label: this.$tr('qevent.layout.form.summary'),
              value: '',
              type: 'textarea',
              isRequired: true,
              isTranslatable: true,
            },
            metaTitle: {
              label: this.$tr('ui.form.metaTitle'),
              value: '',
              type: 'text',
              isTranslatable: true,
            },
            metaDescription: {
              label: this.$tr('ui.form.metaDescription'),
              value: '',
              type: 'textarea',
              isTranslatable: true,
            },
            metaKeywords: {
              label: this.$tr('qevent.layout.form.metaKeywords'),
              value: '',
              type: 'text',
              isTranslatable: true,
            },
            mediasMulti: {
              label: this.$tr('ui.form.gallery'),
              value: {},
              type: 'media',
              zone: 'gallery',
              entity: "Modules\\Ievent\\Entities\\Event",
              enitityId: null
            },
          },
          formRight: {
            startDate: {
              label: this.$tr('qevent.layout.form.startDate'),
              value: '',
              type: 'datetime',
              isTranslatable: false,
            },
            endDate: {
              label: this.$tr('qevent.layout.form.endDate'),
              value: '',
              type: 'datetime',
              isTranslatable: false,
            },
            address:{
              label: this.$tr('ui.form.address'),
              value: '',
              type: 'text',
              isTranslatable: false,
            },
            status: {
              label: `${this.$tr('ui.form.status')}:`,
              value: null,
              type: 'select',
              options: [
                {label: this.$tr('ui.form.publish'), id: 2},
                {label: this.$tr('ui.form.noPublish'), id: 3},
                {label: this.$tr('ui.form.draft'), id: 0},
                {label: this.$tr('ui.form.pending'), id: 1}
              ],
            },
            allDay: {
              label: this.$tr('qevent.layout.form.allDay'),
              value: null,
              type: 'select',
              options: [
                {label: this.$tr('ui.label.yes'), id: '1'},
                {label: this.$tr('ui.label.no'), id: '0'},
              ],
            },
            price:{
              label: this.$tr('ui.form.price'),
              value: '',
              type: 'number',
              isTranslatable: false,
            },
            organizerId: {
              label: this.$tr('qevent.layout.form.organizer'),
              value: null,
              type: 'select',
              clearable: true,
              loadOptions: {
                apiRoute: 'apiRoutes.qevent.organizers',
                select: {label: 'name', id: 'id'},
                requestParams: {}
              }
            },
            categories: {
              label: this.$trp('ui.form.category'),
              value: [],
              type: 'multiSelect',
              loadOptions: {
                apiRoute: 'apiRoutes.qevent.categories',
                select: {label: 'title', id: 'id'},
                requestParams: {include: ''}
              },
              create: {
                title: this.$tr('qblog.layout.newCategory'),
                component: import('@imagina/qevent/_crud/crudQeventCategories')
              }
            },
            mediasSingle: {
              label: this.$tr('ui.form.image'),
              value: {},
              type: 'media',
              zone: 'mainimage',
              entity: "Modules\\Ievent\\Entities\\Event",
              enitityId: null
            }
          },
        }
      }
    }
  }
</script>
