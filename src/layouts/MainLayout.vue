<template>
  <q-layout view="lHh Lpr lFf">
    <q-header unelevated class="bg-white">

      <q-img to="/" src="letter-t.gif"  class="logo fixed-top-left" />

      <q-toolbar>
        <div class="text-black flex full-width justify-center text-h6">
          <q-btn flat no-caps v-for="link in links" :key="'Link'+link.label" class="link" :to="link.link">
            {{  link.label }}
          </q-btn>
        </div>
      </q-toolbar>
    </q-header>
    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>
<script setup>
const links = [
  {
    label: "About",
    link: "/about"
  },
  {
    label: "Experience",
    link: "/experience"
  },
  {
    label: "Work",
    link: "/work"
  },{
    label: "Contact",
    link: "/contact"
  }
];
</script>
<style>
.logo{
  cursor: pointer;
  margin: 5px;
  border-radius: 10px;
  padding: 2px;
  width: 50px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
}

.main-container{
  width: 100%;
  min-height:100%;
}
.link{
  border-bottom: 3px solid white;
}
.link:hover{
  border-bottom: 3px solid #00cfb4;
}
</style>
