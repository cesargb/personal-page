<template>
    <div class="cube"></div>
    <div class="cube"></div>
    <div class="cube"></div>
    <div class="cube"></div>
</template>

<style lang="scss">
@media (min-width: 768px) {
  .cube {
    z-index: -1;
    position: absolute;
    top: 80vh;
    left: 65vw;
    width: 10px;
    height: 10px;
    border: solid 1px darken(#222, 1%);
    transform-origin: top left;
    transform: scale(0) rotate(0deg) translate(-50%, -50%);
    animation: cube 12s ease-in forwards infinite;


    &:nth-child(2) {
      animation-delay: 4s;
      left: 75vw;
      top: 50vh;
    }

    &:nth-child(3) {
      animation-delay: 6s;
      left: 90vw;
      top: 10vh;
    }


    &:nth-child(4) {
      animation-delay: 10s;
      left: 50vw;
      top: 10vh;
    }
  }

  @keyframes cube {
    from {
      transform: scale(0) rotate(0deg) translate(-50%, -50%);
      opacity: 1;
    }
    to {
      transform: scale(20) rotate(960deg) translate(-50%, -50%);
      opacity: 0;
    }
  }
}

</style>