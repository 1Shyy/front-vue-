<template>
    <div>
        <form 
            accept-charset="UTF-8"
            v-on:submit.prevent="onSubmit()"
            method="POST"
        >
            <div class="form-line">
                <label> Исполнитель
                    <input type="text" v-model="artist"  placeholder="Исполнитель">
                </label>
                <label> Название песни
                    <input type="text" v-model="title" placeholder="Введите значение">
                </label>
            </div>
            <v-btn class="submit-btn" type="submit">Отправить</v-btn>
        </form>
    </div>
</template>

<script>
export default {
//   async fetch({store}) {
//     await store.dispatch('orderForm/fetch')
//   },
//   computed: {
//     orderForm() {
//       return this.$store.getters['orderForm/orderForm']
//     }
//   },
  data() {
      return {
        artist: '',
        title: ''
    }
  },
  methods: {
      async onSubmit() {
        const data = {
            title: this.artist + ' - ' + this.title,
            category: '1',
            cost: 322
        }  
        if (
            data.artist === '' ||
            data.title === ''
        ) {
            alert('Заполните все поля формы')
        } else {
            await this.$store.dispatch('taskForm/postForm', data);
            alert(JSON.stringify(this.$store.getters['taskForm/answer']));
        }
      }
  }
}
</script>


<style scoped>
    .submit-btn {
        background: #fefefe;
        padding: 10px;
        color: #000;
        border-radius: 10px;
    }

    select {
        background: #fff;
        padding: 5px;
        width: 100%;
        border-radius: 10px;
    }

    .form-line {
        margin-bottom: 15px
    }


    input {
        background: #dedede;
        color: #000;
        width: 100%;
        padding: 10px;
        border-radius: 10px;
        margin-bottom: 15px;
    }

    form {
        max-width: 500px;
        margin: 0 auto;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: stretch;
    }
</style>
