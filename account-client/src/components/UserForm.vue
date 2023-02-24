<template>
  <div class="max-w-3xl mx-auto">

    <ImageCropper  @imageCropped="$emit('imageSubmitted', $event)"/>
    <div class="max-w-xl px-4 mx-auto">
      <div class="my-1">
        <h1 class=" font-semibold my-1" id="hey" >Hey, {{usernameValue}}</h1>
        <label for="score" class="text-center font-semibold">Your Max Score: {{scoreValue}}</label>

      </div>
      <div class="my-1">
        <label for="email" class="font-semibold">Email Address</label>
        <input
            type="text"
            name="email"
            placeholder="Email Address"
            :value="emailValue"
            @input="handleEmailChange"
            @blur="handleEmailBlur"
            class="px-4 my-2 min-w-full mx-auto border border-gray-500 rounded-full focus:outline-none focus:ring-1 focus:border-blue-300"
        />
        <div class="h-6">
          <p
              v-show="emailMeta.touched && !emailMeta.valid"
              class="text-center text-red-500"
          >
            {{ emailErrorMessage }}
          </p>
        </div>
      </div>
      <div class="my-1">
        <label for="username" class="font-semibold">Username</label>
        <input
            type="text"
            username="username"
            placeholder="Username"
            :value="usernameValue"
            @input="handleUsernameChange"
            @blur="handleUsernameBlur"
            class="px-4 my-2 min-w-full mx-auto border border-gray-500 rounded-full focus:outline-none focus:ring-1 focus:border-blue-300"
        />
        <div class="h-6">
          <p
              v-show="usernameMeta.touched && !usernameMeta.valid"
              class="text-center text-red-500"
          >
            {{ usernameErrorMessage }}
          </p>
        </div>
      </div>
      <div class="my-1">
        <label for="website" class="font-semibold">Website URL</label>
        <input
            type="text"
            name="website"
            placeholder="Website URL"
            :value="websiteValue"
            @input="handleWebsiteChange"
            @blur="handleWebsiteBlur"
            class="px-4 my-2 min-w-full mx-auto border border-gray-500 rounded-full focus:outline-none focus:ring-1 focus:border-blue-300"
        />
        <div class="h-6">
          <p
              v-show="websiteMeta.touched && !websiteMeta.valid"
              class="text-center text-red-500"
          >
            {{ websiteErrorMessage }}
          </p>
        </div>
      </div>
      <div>
        <button
            :disabled="!formMeta.valid || !formMeta.dirty"
            class="btn btn-blue w-32 block mx-auto"
            @click="submitDetails"
        >
          Update
        </button>
        <button
            class="btn bg-green-800 text-white mt-1 block mx-auto"

        >
          <a class="text-center btn btn-primary" href="http://eugenes.world/">Back to Game</a>
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import { defineComponent, watch } from 'vue';
import { useForm, useField } from 'vee-validate';
import ImageCropper from './ui/ImageCropper.vue';
export default defineComponent({
  name: 'UserForm',
  components: {
    ImageCropper,
  },
  props: {
    user: {
      type: Object,
      default: null,
    },
  },
  emits: ['detailsSubmitted', 'imageSubmitted'],
  setup(props, { emit }) {
    const { meta: formMeta, handleSubmit } = useForm();

    var scoreValue = props.user.score;
    var newscoreValue = scoreValue;
    const oldscoreValue = scoreValue;

    const {
      value: emailValue,
      meta: emailMeta,
      errorMessage: emailErrorMessage,
      handleBlur: handleEmailBlur,
      handleChange: handleEmailChange,
    } = useField('email', 'email', {
      initialValue: props.user.email,
      validateOnMount: true,
    });
    const {
      value: usernameValue,
      meta: usernameMeta,
      errorMessage: usernameErrorMessage,
      handleBlur: handleUsernameBlur,
      handleChange: handleUsernameChange,
    } = useField('username', 'username', {
      initialValue: props.user.username,
      validateOnMount: true,
    });

    const {
      value: websiteValue,
      meta: websiteMeta,
      errorMessage: websiteErrorMessage,
      handleBlur: handleWebsiteBlur,
      handleChange: handleWebsiteChange,
    } = useField('website', 'url', {
      initialValue: props.user.website,
      validateOnMount: true,
    });
    const currentScore = parseInt(localStorage.getItem('score') || '0');

    if (currentScore > scoreValue) {
      scoreValue = currentScore;
      newscoreValue = scoreValue;
      localStorage.setItem('record', scoreValue)
    } else{
      localStorage.setItem('record', scoreValue)
    }


    const submitDetails = handleSubmit((formValues) => {
      emit('detailsSubmitted', {
        email: formValues.email,
        username: formValues.username,
        website: formValues.website,
        score: scoreValue,
      });
      localStorage.setItem('email', formValues.email);
      localStorage.setItem('username', formValues.username);
    });
    console.log("SCORES", newscoreValue, oldscoreValue);
    if (newscoreValue > oldscoreValue) {
      submitDetails();
    }

    return {
      scoreValue,
      formMeta,
      emailValue,
      emailMeta,
      emailErrorMessage,
      handleEmailBlur,
      handleEmailChange,
      usernameValue,
      usernameMeta,
      usernameErrorMessage,
      handleUsernameBlur,
      handleUsernameChange,
      websiteValue,
      websiteMeta,
      websiteErrorMessage,
      handleWebsiteBlur,
      handleWebsiteChange,
      submitDetails,
    };
  },
});
</script>
