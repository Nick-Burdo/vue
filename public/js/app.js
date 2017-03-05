'use strict';

new Vue({
    el: '#app1',
    data: {
        message: 'Hello, vue'
    }
});

new Vue({
    el: '#app2',
    data: {
        message: 'Dynamic data bind',
        title: 'page loaded at ' + new Date()
    }
});


new Vue({
    el: '#app3',
    data: {
        seen: true
    },
    methods: {
        toggleSeen: function () {
            this.seen = !this.seen;
        }
    }
});

new Vue({
    el: '#app4',
    data: {
        todos: [
            {text: 'to plant a tree'},
            {text: 'build a house'},
            {text: 'raise a son'}
        ]
    }
});

new Vue({
    el: '#app5',
    data: {
        message: 'Hello, Vue'
    }
});

Vue.component('todo-item', {
    props: ['todo'],
    template: '<li>{{todo.text}}</li>'
});

new Vue({
    el: '#app6',
    data: {
        list: [
            {text: 'item 1'},
            {text: 'item 2'},
            {text: 'item 3'}
        ]
    }
});

new Vue({
    el: '#watch-example',
    data: {
        question: '',
        answer: 'Пока вы не зададите вопрос, я не могу ответить!',
        image: 'http://placehold.it/100'
    },
    watch: {
        // эта функция запускается при любом изменении вопроса
        question: function (newQuestion) {
            this.answer = 'Ожидаю, когда вы закончите печатать...';
            this.getAnswer();
        }
    },
    methods: {
        getAnswer: _.debounce(
            function () {
                if (this.question.indexOf('?') === -1) {
                    this.answer = 'Вопросы обычно заканчиваются вопросительным знаком. ;-)';
                    return
                }
                this.answer = 'Думаю...';
                var vm = this;
                axios.get('https://yesno.wtf/api')
                    .then(function (response) {
                        vm.answer = _.capitalize(response.data.answer);
                        vm.image = response.data.image
                    })
                    .catch(function (error) {
                        vm.answer = 'Ошибка! Не могу связаться с API. ' + error
                    })
            },
            // Это число миллисекунд, которое мы ждем, после того как пользователь прекратил печатать:
            500
        )
    }
});