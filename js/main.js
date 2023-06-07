const app = new Vue({
    el: '#root',
    data: {
        taskList: [
            {
                text: 'fare la spesa',
                done: false
            },
            {
                text: 'mangiare',
                done: false
            },
            {
                text: 'dormire',
                done: false
            }
        ],
        topPriorities: [
            {
                text: 'fare la spesa',
                done: false
            },
            {
                text: 'fare la spesa',
                done: false
            },
            {
                text: 'fare la spesa',
                done: false
            }
        ],
        reminder: [
            {
                text: 'fare la spesa',
                done: false
            },
            {
                text: 'fare la spesa',
                done: false
            },
            {
                text: 'fare la spesa',
                done: false
            }
        ],
        newText: '',
        selectList: document.getElementById('select-list').value
    },
    methods: {
        remove: function(list,i){
            list.splice(i,1);
        },
        add: function(){
            console.log(this.selectList);
            switch(this.selectList){
                case '1':
                    this.taskList.push({text:this.newText, done:false});
                    break
                case '2':
                    this.topPriorities.push({text:this.newText, done:false});
                    break
                case '3':
                    this.reminder.push({text:this.newText, done:false});
            }
            this.newText='';
        },
        selectedList: function(){
            this.selectList= document.getElementById('select-list').value;
        }
    }
});