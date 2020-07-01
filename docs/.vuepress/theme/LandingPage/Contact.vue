<template>
  <v-container fluid>
    <v-row>
      <v-col cols="12" sm="10" md="8" offset-sm="1" offset-md="2">
        <h2 class="display-2 primary--text mb-3">Contact</h2>
        <p>
          If you'd like to discuss something or just want to say hi, feel free
          to contact me via links below or this form. 😊
        </p>
        <form
          id="contactForm"
          action="https://formspree.io/muhammad.whydn@gmail.com"
          method="POST"
          accept-charset="UTF-8"
        >
          <v-text-field filled name="name" v-model="name" label="Name" />

          <v-text-field
            filled
            name="email"
            v-model="email"
            label="Email"
            required
          />

          <v-textarea
            filled
            name="message"
            v-model="message"
            label="Message"
            required
          />
          <input
            type="hidden"
            name="_subject"
            value="New submission from hyuwah.github.io"
          />
          <input
            type="hidden"
            name="_next"
            value="https://hyuwah.github.io/thanks"
          />
          <input type="text" name="_gotcha" style="display:none" />

          <v-layout justify-end>
            <v-btn
              dark
              type="submit"
              value="Send"
              color="green"
              @click="() => {}"
              >Send <v-icon right>send</v-icon></v-btn
            >
          </v-layout>
        </form>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      name: "",
      email: "",
      message: ""
    };
  }
};
</script>

<style></style>
