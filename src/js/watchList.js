const secondVue = new Vue({

    el : "#wacthlist",

    data : {
        watchList: [],
    },

    methods: {

        clearWatchList(){
            localStorage.clear();
            this.watchList = []
        },
        
        RemoveFromWatchList(index) {
            this.watchList.splice(index, 1);
            // localStorage.removeItem(this.watchList[0]);
          },
    },

    mounted() {

        if (!localStorage.getItem("Movies")) {

            let initArray = []
            localStorage.setItem("Movies", JSON.stringify(initArray))
        }

        this.watchList = JSON.parse(localStorage.getItem("Movies"))
    }

})