<template>
  <v-container fluid>
    <v-layout  row>
      <v-flex xs12 sm10 md8 offset-sm1 offset-md2>
        <h1 class="display-2 blue--text mb-3">Contact</h1>
        <p>If you'd like to discuss something or just want to say hi, feel free to contact me via links below or this form. 😊</p>
        <form>
            <v-text-field
            box
                v-model="name"
                label="Name"
            />
            
            <v-text-field
            box
                v-model="email"
                label="Email"
                required
            />

            <v-textarea
                box
                v-model="message"
                label="Message"
                required
            />

            <v-layout justify-end>
            <v-btn dark depressed  color="green" @click="()=>{}">Send <v-icon right>send</v-icon></v-btn>
            </v-layout>

        </form>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
    data(){
        return{
            name:"",
            email:"",
            message:"",
        }
    }
};
</script>

<style>
</style>
