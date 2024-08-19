<template>
    <div class="animated-gradient w-full h-full min-h-screen min-w-screen p-4">
        <div class="rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-60 bg-gray-100 w-[100%] min-h-screen border">
            <slot></slot>
        </div>

    </div>
</template>
<script>
export default {
    name: 'Page',
};
</script>
<style>
/* Define keyframes for the gradient animation */
@keyframes gradientAnimation {
  0% {
    background-position: 0% 0%;
  }
  50% {
    background-position: 100% 100%;
  }
  100% {
    background-position: 0% 0%;
  }
}

/* Apply the animation to the gradient background with multiple colors */
.animated-gradient {
    background: linear-gradient(45deg, #ff007f, #ff8c00, #f0670c, #4caf50, #141302, #8e2de2, #030108);
  background-size: 600% 600%;
  animation: gradientAnimation 15s ease infinite;
}


</style>