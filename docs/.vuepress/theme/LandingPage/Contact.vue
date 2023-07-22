<template>
  <v-col 
    cols="12"
    sm="10"
    md="8"
    offset-sm="1"
    offset-md="2">
    <v-row >
      <v-col cols="12" sm="4" md="6">
        <h1 class="primary--text mb-3">Contact</h1>
        <p class="font-weight-light" style="word-break: break-word">
          If you'd like to discuss something or just want to say hi, feel free
          to contact me through this form. 😊
        </p>
      </v-col>
      <v-col cols="12" sm="8" md="6">
        <form
          id="contactForm"
          action="https://formspree.io/muhammad.whydn@gmail.com"
          method="POST"
          accept-charset="UTF-8"
        >
          <v-row>
              <v-col cols="12" sm="6">
                <v-text-field filled name="name" v-model="name" label="Name" />
              </v-col>
            
              <v-col cols="12" sm="6">
                <v-text-field
                  filled
                  name="email"
                  v-model="email"
                  label="Email"
                  required
                />
              </v-col>
            </v-row>

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
              rounded
              type="submit"
              value="Send"
              color="green"
              class="px-6"
              @click="() => {}"
              >Send <v-icon right>send</v-icon></v-btn
            >
          </v-layout>
        </form>
      </v-col>
    </v-row>
  </v-col>
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
