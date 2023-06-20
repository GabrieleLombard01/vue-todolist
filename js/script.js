//JS RESET
console.log('JS OK')

//Vue RESET
console.log('Vue OK', Vue);

const app = Vue.createApp({
    data() {
        return {
            tasks: [
                {
                  text: 'Fare colloquio per Amazon',
                  done: '',
                },
                {
                    text: 'Fare colloquio per Decathlon',
                    done: '',
                },
                {
                    text: 'Fare colloquio per Coca Cola',
                    done: '',
                },
                {
                    text: 'Fare colloquio per Netflix',
                    done: ' ',
                },
                {
                    text: 'Fare colloquio per Meta',
                    done: ' ',
                },
              ], 
        }
    }
});
    
app.mount('#root');