<template>
  <section
    class="relative flex gap-2 flex-col items-center py-[4rem] px-6 md:px-8 lg:px-[4rem] bg-cover bg-[url('/new/images/aboutPoster.png')] w-full h-[200px] lg:hidden"
  >
    <div class="absolute top-0 left-0 bg-black w-full h-[200px] opacity-40" />
    <p class="z-10 text-textColor5 text-2xl font-extrabold">About us</p>
    <p class="z-10 text-textColor5 text-center text-sm md:text-lg leading-2">
      At Dentech Supply, we’re not just about dental products; we’re about
      elevating your practice. Our mission? To ensure every smile you create is
      a masterpiece.
      <NuxtLink class="text-textColor4" to="about">See more...</NuxtLink>
    </p>
  </section>
  <section
    class="hidden w-full h-[55vh] py-4 lg:flex flex-row items-center px-16"
  >
    <img
      class="z-50 mr-[-14rem] w-[400px] h-[270px]"
      src="/new/images/aboutPoster.png"
    />
    <div
      class="w-full h-full bg-bgSecondary pl-[15rem] pr-8 flex flex-col justify-center gap-4"
    >
      <p class="text-3xl font-extrabold">About us</p>
      <p class="text-sm xl:text-lg leading-6 text-textColor3">
        At Dentech Supply, we’re not just about dental products; we’re about
        elevating your practice. Our mission? To ensure every smile you create
        is a masterpiece.
        <NuxtLink class="text-textColor4" to="about">See more...</NuxtLink>
      </p>
    </div>
  </section>
</template>
