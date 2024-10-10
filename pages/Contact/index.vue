<template>
  <div
    class="mt-[96px] lg:mt-[192px] w-full min-h-[calc(100vh-96px)] lg:min-h-[calc(100vh-192px)] flex flex-col"
  >
    <div
      class="w-full text-2xl lg:text-4xl font-extrabold h-[3rem] lg:h-[5rem] flex flex-col justify-center items-center bg-bgColor3 text-textColor5"
    >
      Contact Us
    </div>
    <section
      class="px-6 md:px-8 lg:px-[4rem] flex flex-col justify-center items-center bg-cover bg-[url('/new/images/contactUSPagePoster.png')] w-full h-[12rem] sm:h-[15rem] md:h-[18rem] lg:h-[22rem]"
    >
      <p
        class="text-sm sm:text-lg md:text-xl text-textColor5 font-extrabold text-center w-full"
      >
        Have a question? Need personalized advice? Want to discuss dental
        solutions over a virtual cup of chai? We’re here for you!
      </p>
    </section>
    <section
      class="w-full px-6 md:px-8 lg:px-[4rem] pt-8 grid grid-cols-1 lg:grid-cols-2"
    >
      <div
        class="w-full bg-bgColor4 min-h-[40vh] pl-4 py-4 flex flex-col gap-4 justify-center"
      >
        <p class="text-sm md:text-lg font-extrabold">Get in touch</p>
        <p class="text-[12px] text-textSecondary">
          Reach out through any of the channels below:
        </p>
        <div class="flex flex-row items-center gap-x-2">
          <div
            class="w-10 h-10 flex flex-col justify-center items-center bg-bgColor6 rounded-[100%]"
          >
            <img class="w-3" src="/new/icons/location-green.png" />
          </div>
          <div>
            <p class="text-[12px] font-extrabold">Head Office</p>
            <p class="text-[10px] text-textSecondary w-24">
              Office No.00 Block, A St-1 Punjab , Multan
            </p>
          </div>
        </div>
        <div class="flex flex-row items-center gap-x-2">
          <div
            class="w-10 h-10 flex flex-col justify-center items-center bg-bgColor6 rounded-[100%]"
          >
            <img class="w-3" src="/new/icons/mail-green.png" />
          </div>
          <div>
            <p class="text-[12px] font-extrabold">Email US</p>
            <p class="text-[10px] text-textSecondary w-24">
              dentechsupply@mail.com
            </p>
          </div>
        </div>
        <div class="flex flex-row items-center gap-x-2">
          <div
            class="w-10 h-10 flex flex-col justify-center items-center bg-bgColor6 rounded-[100%]"
          >
            <img class="w-3" src="/new/icons/phone-green.png" />
          </div>
          <div>
            <p class="text-[12px] font-extrabold">Call US</p>
            <p class="text-[10px] text-textSecondary">Phone : +92 1234567890</p>
          </div>
        </div>
        <div class="w-fit h-fit flex flex-col gap-2 items-center">
          <p class="text-[12px] font-extrabold">Follow our social media</p>
          <div class="flex flex-row items-center gap-3">
            <img class="w-3 h-3" src="/new/icons/instagram.png" />
            <img class="w-1.5 h-auto" src="/new/icons/facebook.png" />
            <img class="w-3 h-3" src="/new/icons/whatsapp.png" />
          </div>
        </div>
      </div>
      <div
        class="w-full bg-bgColor5 min-h-[40vh] pl-4 py-4 flex flex-col gap-4 justify-between"
      >
        <p class="text-sm md:text-lg font-extrabold">Get in touch</p>
        <form
          v-on:submit.prevent="handleSubmit"
          class="w-full grid grid-cols-2 gap-3"
        >
          <InputsInput
            v-model="form.name"
            :label="'Name'"
            :type="'text'"
            :placeholder="'Enter name...'"
          />
          <InputsInput
            v-model="form.company"
            :label="'Company'"
            :type="'text'"
            :placeholder="'Enter company...'"
          />
          <InputsInput
            v-model="form.phone"
            :label="'Phone'"
            :type="'number'"
            :placeholder="'Enter phone...'"
          />
          <InputsInput
            v-model="form.email"
            :label="'Email'"
            :type="'email'"
            :placeholder="'Enter email...'"
          />
          <InputsInput
            v-model="form.subject"
            :label="'Subject'"
            :type="'text'"
            :placeholder="'Enter subject...'"
          />
          <InputsTextArea
            v-model="form.message"
            :label="'Message'"
            :type="'text'"
            :placeholder="'Enter message...'"
            class="col-span-2 mt-2"
          />
          <button
            type="submit"
            class="col-span-2 text-textColor5 text-center w-full text-sm bg-buttonSecondary py-2 rounded-full"
          >
            Send
          </button>
        </form>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
const form = reactive({
  name: "",
  company: "",
  phone: "",
  email: "",
  subject: "",
  message: "",
});
const handleSubmit = () => {
  console.log(form);
  // form.name = "";
  // form.company = "";
  // form.phone = "";
  // form.email = "";
  // form.subject = "";
  // form.message = "";
};
</script>
