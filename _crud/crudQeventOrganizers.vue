<template></template>
<script>
  export default {
    computed: {
      crudData() {
        return {
          apiRoute: 'apiRoutes.qevent.organizers',
          permission: 'ievent.organizers',
          create: {
            title: this.$tr('qevent.layout.newOrganizer'),
          },
          read: {
            columns: [
              {name: 'id', label: this.$tr('ui.form.id'), field: 'id', style: ''},
              {name: 'name', label: this.$tr('ui.form.name') , field: 'name', style: ''},
              {name: 'contact', label: this.$tr('qevent.layout.form.contact') , field: 'contact', style: ''},
              {name: 'address', label: this.$tr('ui.form.address') , field: 'address', style: ''},
              {name: 'actions', label: this.$tr('ui.form.actions'), align: ''},
            ],
            requestParams: {}
          },
          update: {
            title: this.$tr('qevent.layout.updateOrganizer'),
            requestParams: {}
          },
          delete: true,
          formLeft: {
            id: {value: ''},
            name: {
              label: this.$tr('ui.form.name'),
              value: '',
              type: 'text',
              isRequired: true,
              isTranslatable: true,
            },
            contact: {
              label: this.$tr('qevent.layout.form.contact'),
              value: '',
              type: 'text',
              isRequired: true,
              isTranslatable: false,
            },
            address: {
              label: this.$tr('ui.form.address'),
              value: '',
              type: 'text',
              isRequired: true,
              isTranslatable: false,
            },
            slug: {
              label: this.$tr('ui.form.slug'),
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
          },
          formRight: {},
        }
      }
    }
  }
</script>
