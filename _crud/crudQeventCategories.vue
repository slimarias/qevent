<template></template>
<script>
  export default {
    computed: {
      crudData() {
        return {
          apiRoute: 'apiRoutes.qevent.categories',
          permission: 'ievent.categories',
          create: {
            title: this.$tr('qevent.layout.newCategory'),
          },
          read: {
            columns: [
              {name: 'id', label: this.$tr('ui.form.id'), field: 'id', style: 'width: 50px'},
              {name: 'title', label: this.$tr('ui.form.title'), field: 'title', align: ''},
              {name: 'actions', label: this.$tr('ui.form.actions'), align: ''},
            ],
            requestParams: {include: 'parent'}
          },
          update: {
            title: this.$tr('qevent.layout.updateCategory'),
            requestParams: {include: 'parent'}
          },
          delete: true,
          formLeft: {
            id: {value: ''},
            title: {
              label: this.$tr('ui.form.title'),
              value: '',
              type: 'text',
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
            parentId: {
              label: this.$tr('ui.form.parent'),
              value: 0,
              type: 'select',
              clearable: true,
              loadOptions: {
                apiRoute: 'apiRoutes.qevent.categories',
                select: {label: 'title', id: 'id'},
                requestParams: {include: 'parent'}
              }
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
              label: this.$tr('ui.form.metaDescription'),
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
