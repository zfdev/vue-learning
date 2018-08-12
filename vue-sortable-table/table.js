Vue.component('v-table', {
    props:{
        columns:{
            type: Array,
            default: function(){
                return [];
            }
        },
        data: {
            type: Array,
            default: function(){
                return [];
            }
        }
    },
    data: function(){
        return {
            currentColumns: [],
            currentData: []
        }
    },
    methods:{
        makeColumns: function(){
            this.currentColumns = this.columns.map(function(col, index){
                let colClone = Object.assign({}, col);
                colClone._sortType =  'normal';
                colClone._index = index;
                return colClone;
            });
        },
        makeData: function(){
            this.currentData = this.data.map(function(row, index){
                let rowClone = Object.assign({}, row);
                rowClone._index = index;
                return rowClone;
            });
        },
        handleSortByAsc: function(index){
            var key = this.currentColumns[index].key;
            this.currentColumns.forEach(function(col){
                col._sortType = 'normal';
            });
            this.currentColumns[index]._sortType = 'asc';
            this.currentData.sort(function(a, b){
                return a[key] > b[key] ? 1 : -1;
            });
        },
        handleSortByDesc: function(index){
            var key = this.currentColumns[index].key;
            this.currentColumns.forEach(function(col){
                col._sortType = 'normal';
            });
            this.currentColumns[index]._sortType = 'desc';
            this.currentData.sort(function(a, b){
                return a[key] < b[key] ? 1 : -1;
            });
        }
    },
    mounted() {
        this.makeColumns();
        this.makeData();
        console.log('Original Data:');
        console.log(this.data.columns);
        console.log('Table Data:');
        console.log(this.currentColumns);
    },
    render: function(c){
        var _this = this;
        var ths = [];
        var trs = [];
        this.currentData.forEach(row => {
            var tds = [];
            _this.currentColumns.forEach(function(cell){
                tds.push(c('td', row[cell.key]));
            });
            trs.push(c('tr', tds));
        });
        this.currentColumns.forEach(function(col, index){
            if(col.sortable){
                ths.push(c('th', [
                    c('span', col.title),
                    c('a', {
                        class:{
                            on: col._sortType === 'asc'
                        },
                        on:{
                            click: function(){
                                _this.handleSortByAsc(index);
                            }
                        }
                    }, '!'),
                    c('a', {
                        class: {
                            on: col._sortType === 'desc'
                        },
                        on: {
                            click: function(){
                                _this.handleSortByDesc(index);
                            }
                        }
                    }, '|')
                ]));
            }else{
                ths.push(c('th', col.title));
            }
        });
        return c('table', {
            class: ['table', 'table-striped']
        }, [
            c('thead', [
                c('tr', ths)
            ]),
            c('tbody', trs)
        ]);
    },
    watch: {
        //Watch parent data change, update table data.
        data: function(){
            this.makeData();
            //Get the sorted column.
            var sortedColumn = this.currentColumns.filter(function(col){
                return col._sortType !== 'normal';
            });
            if(sortedColumn.length > 0){
                if(sortedColumn[0]._sortType === 'asc'){
                    this.handleSortByAsc(sortedColumn[0]._index);
                }else{
                    this.handleSortByDesc(sortedColumn[0]._index);
                }
            }
        }
    }
});