/**
 * @copyright Iterios
 * @author Nick Burdo <n.burdo@iterios.com>
 * @version 2.2.6 05.03.17
 * @since 2.2.6
 */
'use strict';

import Vue from 'vue';

import App from './app.vue';

new Vue({
    el: '#app',
    data: {
        message: 'Hello, Vue World!'
    }
});

new Vue({
    el: '#app2',
    components: { App }
});