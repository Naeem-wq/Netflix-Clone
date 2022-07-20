const secondVue = new Vue({

    el : "#wacthlist",

    data : {
        watchList: [],
    },

    methods: {
        
        RemoveFromWatchList(index) {
            this.movies.splice(index, 1);
          },
    },

})