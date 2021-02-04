<template>
  <div class="text-center bg-gray-100">
    <router-link to="/">
      Home
    </router-link> |
    <router-link to="/user">
      User
    </router-link> |
    <router-link to="/user/xxx">
      User - xxx
    </router-link> |
    <router-link to="/deep/post">
      Deep post
    </router-link> |
    <router-link to="/about">
      About
    </router-link>
    <div class="m-6">
      <router-view />
    </div>
  </div>
</template>
