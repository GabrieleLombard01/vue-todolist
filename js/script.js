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
                  done: true,
                },
                {
                    text: 'Fare colloquio per Decathlon',
                    done: true,
                },
                {
                    text: 'Fare colloquio per Coca Cola',
                    done: false,
                },
                {
                    text: 'Fare colloquio per Netflix',
                    done: false,
                },
                {
                    text: 'Fare colloquio per Meta',
                    done: true,
                },
              ], 
        }
    }
});
    
app.mount('#root');