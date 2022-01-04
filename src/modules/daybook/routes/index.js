export default {

    name: 'daybook',
    component: () => import(/* webpackChunkName: "dayBookLayout" */ '../layouts/DayBookLayout.vue'),
    children: [

        {
            path: '',
            name:'no-entry-selected',
            component: () => import(/* webpackChunkName: "noEntrySelected" */ '../views/NoEntrySelected.vue')
        },

        {
            path: ':id',
            name:'entry-selected',
            component: () => import(/* webpackChunkName: "entrySelected" */ '../views/EntryView.vue'),
            props: route => ({

                id: route.params.id,
                icon: 'fas fa-save'

            })
        },

    ] 


}