<template>
  <form action="https://formspree.io/f/xjvqooob" method="POST">
    <div>
      <input
        type="email"
        name="email"
        placeholder="john@example.com"
        v-model="email"
        @input="validateForm"
        :class="{
          'valid-border': isEmailValid,
          'invalid-border': !isEmailValid,
        }"
      />
      <p class="validation-msg" :class="{ 'green-text': isEmailValid }">
        <img src="../assets/valid.svg" alt="" />Must be a valid email
      </p>
    </div>
    <div>
      <!-- //Character counter -->
      <p class="char-counter">
        <span :class="{ 'red-text': charCount > 300 }">{{ charCount }}</span
        >/300
      </p>

      <textarea
        name="message"
        id="text-area"
        cols="30"
        rows="10"
        placeholder="Hi there,
This is a message."
        v-model="message"
        @input="validateForm"
        :class="{
          'valid-border': isMessageValid,
          'invalid-border': !isMessageValid,
        }"
      ></textarea>
      <p class="validation-msg" :class="{ 'green-text': isMessageValid }">
        <img src="../assets/valid.svg" alt="" />Must have atleast 10 words and
        less than
        <span :class="{ 'red-text': charCount > 300 }">300 chars</span>
      </p>
    </div>

    <div>
      <button type="submit" :disabled="!isFormValid">Send Message</button>
    </div>
  </form>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      email: "",
      message: "",
      charCount: 0,
      isFormValid: false,
      isEmailValid: false,
      isMessageValid: false,
    };
  },
  methods: {
    validateForm() {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

      // Email validation
      this.isEmailValid = emailRegex.test(this.email);

      // Message length validation
      const messageWords = this.message.split(/\s+/).filter(Boolean);
      this.isMessageValid =
        messageWords.length >= 10 && this.message.length <= 300;

      // Update character count
      this.charCount = this.message.length;

      // Update form validity
      this.isFormValid = this.isEmailValid && this.isMessageValid;
    },
  },
  mounted() {
    this.validateForm(); // Initial validation
  },
};
</script>

<style scoped>
@keyframes flash {
  0% {
    background-color: transparent;
  }
  50% {
    background-color: red;
  }
  100% {
    background-color: transparent;
  }
}

@keyframes shake {
  0% {
    transform: translateX(0);
  }
  25% {
    transform: translateX(-5px);
  }
  50% {
    transform: translateX(5px);
  }
  75% {
    transform: translateX(-5px);
  }
  100% {
    transform: translateX(5px);
  }
}

/* Apply animations to elements */
.text-area.flash-red {
  animation: flash 0.5s;
  animation-iteration-count: 2;
}

.char-counter.shake {
  animation: shake 0.5s;
}

section {
  height: fit-content;
  width: 100%;
}

form {
  padding-top: 1rem;
  display: flex;
  flex-direction: column;
  width: 40%;
  margin: 0 auto;
  font-family: "Poppins";
}

textarea {
  resize: none;
  width: 655px;
  height: 383px;
  border-radius: 12px;
  border: none;
  background: #2e2e48;
  color: white;
  transition: ease all 0.4s;
  padding-top: 1rem;
  padding-inline: 0.8rem;
  border: transparent;

  position: relative;
  z-index: 4;
}

input {
  width: 462px;
  height: 42px;
  border-radius: 8px;
  border: none;
  background: #2e2e48;
  color: white;
  padding-left: 0.8rem;
  transition: ease all 0.4s;
  border: transparent;
  margin-bottom: 0.4rem;
  position: relative;
  z-index: 4;
}

input:focus {
  border: none;
  outline: none;
  margin-bottom: 2.2rem;
  position: relative;
  z-index: 4;
}

textarea:focus {
  border: none;
  outline: none;
  margin-bottom: 2rem;
}

.summary {
  width: 40%;
  margin: 0 auto;
}

#header {
  font-family: "Poppins";
  font-style: normal;
  font-weight: 500;
  font-size: 26px;
  color: white;
}

.paragraphs {
  font-family: "Poppins";
  color: var(--text);
  display: flex;
  flex-direction: column;
  row-gap: 1rem;
  padding-top: 1.3rem;
}

.char-counter {
  font-family: "Poppins";
  color: var(--text);
  display: flex;
  width: 639px;
  justify-content: flex-end;
  position: relative;
  transform: translate(0, 23.3rem);
  z-index: 5;
  margin-top: -16px;
}

button {
  cursor: pointer;
  outline: 0;
  color: #fff;
  background-color: #6565cf;
  border-color: #6565cf;
  display: inline-block;
  font-weight: 400;
  line-height: 1.5;
  text-align: center;
  border: 1px solid transparent;
  padding: 6px 12px;
  font-size: 16px;
  border-radius: 0.25rem;
  transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out,
    border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
  width: fit-content;
  margin-top: 8px;
  transition: ease all 0.2s;
}
::placeholder {
  color: rgba(255, 255, 255, 0.247);
}
button:disabled {
  background-color: #ccc;
  cursor: not-allowed;
  color: #232339;
  border-color: #ccc;
  background-color: rgb(99, 99, 146);
  border-color: transparent;
}
.valid-border {
  border-color: green !important; /* Green border for valid input */
}

.invalid-border {
  border-color: red !important; /* Red border for invalid input */
}
.validation-msg {
  display: flex;
  font-size: 12px;
  color: #88889f;
  column-gap: 0.3rem;
  position: relative;
  z-index: 1;
  transform: translateY(-1.2rem);
  overflow: hidden;
  margin-top: -12px;
  transition: ease all 0.4s;
}
.red-text {
  color: rgb(235, 32, 32) !important;
}
.green-text {
  color: rgb(32, 235, 32) !important;
}
</style>
