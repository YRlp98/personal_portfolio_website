<template>
  <section>
    <div class="rep" v-for="repeat in repeats" :key="repeat">
      <div class="row">
        <div>
          <i class="fa fa-bug" aria-hidden="true"></i>
          <i class="fa fa-coffee" aria-hidden="true"></i>
          <i class="fa fa-code-fork" aria-hidden="true"></i>
          <i class="fab fa-apple"></i>
          <i class="fa fa-graduation-cap" aria-hidden="true"></i>
          <i class="fa fa-laptop" aria-hidden="true"></i>
          <i class="fa fa-language" aria-hidden="true"></i>
          <i class="fab fa-figma"></i>
          <i class="fa fa-paint-brush" aria-hidden="true"></i>
          <i class="fas fa-code"></i>
          <i class="fa fa-rocket" aria-hidden="true"></i>
          <i class="fa fa-life-ring" aria-hidden="true"></i>
          <i class="fa fa-terminal" aria-hidden="true"></i>
          <i class="fab fa-js-square"></i>
          <i class="fab fa-vuejs"></i>
          <i class="fab fa-android"></i>
          <i class="fas fa-gamepad"></i>
          <i class="fab fa-git-alt"></i>
          <i class="fab fa-hooli"></i>
          <i class="fab fa-pied-piper-pp"></i>
          <i class="fa fa-database" aria-hidden="true"></i>
          <i class="fab fa-microsoft"></i>
          <i class="fas fa-pizza-slice"></i>
          <i class="fab fa-stack-overflow"></i>
          <i class="fa fa-desktop" aria-hidden="true"></i>
          <i class="fab fa-css3-alt"></i>
          <i class="fas fa-tablet"></i>
          <i class="fab fa-html5"></i>
          <i class="fa fa-bug" aria-hidden="true"></i>
          <i class="fa fa-coffee" aria-hidden="true"></i>
          <i class="fa fa-code-fork" aria-hidden="true"></i>
          <i class="fab fa-apple"></i>
          <i class="fa fa-graduation-cap" aria-hidden="true"></i>
          <i class="fa fa-laptop" aria-hidden="true"></i>
          <i class="fa fa-language" aria-hidden="true"></i>
          <i class="fab fa-figma"></i>
          <i class="fa fa-paint-brush" aria-hidden="true"></i>
          <i class="fas fa-code"></i>
          <i class="fa fa-rocket" aria-hidden="true"></i>
          <i class="fa fa-life-ring" aria-hidden="true"></i>
          <i class="fa fa-terminal" aria-hidden="true"></i>
          <i class="fab fa-js-square"></i>
          <i class="fab fa-vuejs"></i>
          <i class="fab fa-android"></i>
          <i class="fas fa-gamepad"></i>
          <i class="fab fa-git-alt"></i>
          <i class="fa fa-database" aria-hidden="true"></i>
          <i class="fab fa-microsoft"></i>
          <i class="fas fa-pizza-slice"></i>
          <i class="fab fa-stack-overflow"></i>
          <i class="fa fa-desktop" aria-hidden="true"></i>
          <i class="fab fa-css3-alt"></i>
          <i class="fas fa-tablet"></i>
          <i class="fab fa-html5"></i>
        </div>
      </div>
      <div class="row">
        <div>
          <i class="fab fa-pied-piper-pp"></i>
          <i class="fab fa-html5"></i>
          <i class="fas fa-tablet"></i>
          <i class="fab fa-css3-alt"></i>
          <i class="fa fa-desktop" aria-hidden="true"></i>
          <i class="fab fa-stack-overflow"></i>
          <i class="fas fa-pizza-slice"></i>
          <i class="fab fa-microsoft"></i>
          <i class="fa fa-database" aria-hidden="true"></i>
          <i class="fab fa-hooli"></i>
          <i class="fab fa-git-alt"></i>
          <i class="fas fa-gamepad"></i>
          <i class="fab fa-android"></i>
          <i class="fab fa-vuejs"></i>
          <i class="fab fa-js-square"></i>
          <i class="fa fa-terminal" aria-hidden="true"></i>
          <i class="fa fa-life-ring" aria-hidden="true"></i>
          <i class="fa fa-rocket" aria-hidden="true"></i>
          <i class="fas fa-code"></i>
          <i class="fa fa-paint-brush" aria-hidden="true"></i>
          <i class="fab fa-figma"></i>
          <i class="fa fa-language" aria-hidden="true"></i>
          <i class="fa fa-laptop" aria-hidden="true"></i>
          <i class="fa fa-graduation-cap" aria-hidden="true"></i>
          <i class="fab fa-apple"></i>
          <i class="fa fa-code-fork" aria-hidden="true"></i>
          <i class="fa fa-coffee" aria-hidden="true"></i>
          <i class="fa fa-bug" aria-hidden="true"></i>
          <i class="fab fa-html5"></i>
          <i class="fas fa-tablet"></i>
          <i class="fab fa-css3-alt"></i>
          <i class="fa fa-desktop" aria-hidden="true"></i>
          <i class="fab fa-stack-overflow"></i>
          <i class="fas fa-pizza-slice"></i>
          <i class="fab fa-microsoft"></i>
          <i class="fa fa-database" aria-hidden="true"></i>
          <i class="fab fa-pied-piper-pp"></i>
          <i class="fab fa-hooli"></i>
          <i class="fab fa-git-alt"></i>
          <i class="fas fa-gamepad"></i>
          <i class="fab fa-android"></i>
          <i class="fab fa-vuejs"></i>
          <i class="fab fa-js-square"></i>
          <i class="fa fa-terminal" aria-hidden="true"></i>
          <i class="fa fa-life-ring" aria-hidden="true"></i>
          <i class="fa fa-rocket" aria-hidden="true"></i>
          <i class="fas fa-code"></i>
          <i class="fa fa-paint-brush" aria-hidden="true"></i>
          <i class="fab fa-figma"></i>
          <i class="fa fa-language" aria-hidden="true"></i>
          <i class="fa fa-laptop" aria-hidden="true"></i>
          <i class="fa fa-graduation-cap" aria-hidden="true"></i>
          <i class="fab fa-apple"></i>
          <i class="fa fa-code-fork" aria-hidden="true"></i>
          <i class="fa fa-coffee" aria-hidden="true"></i>
          <i class="fa fa-bug" aria-hidden="true"></i>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "IconBackground",
  data() {
    return {
      repeats: 10,
    };
  },
};
</script>

<style  lang="scss" scoped>
section {
  position: absolute;
  inset: 0;
  z-index: 99;
  display: flex;
  flex-direction: column;
  overflow: hidden;

  .row {
    position: relative;
    top: -250%;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 10px 0;
    white-space: nowrap;
    font-size: 4rem;
    transform: rotate(-30deg);

    i {
      color: rgba(0, 0, 0, 0.5);
      opacity: 0.5;
      transition: 1s;
      padding: 0 5px;
      user-select: none;
      cursor: default;

      &:hover {
        transition: 0s;
        color: var(--green-1);
        text-shadow: 0 0 120px var(--green-1);
      }
    }

    // Animation:
    // div {
    //   animation: animate1 125s linear infinite;
    //   animation-delay: none;
    // }

    // @keyframes animate1 {
    //   0% {
    //     transform: translateX(0%);
    //   }

    //   100% {
    //     transform: translateX(-10%);
    //   }
    // }
  }
}
</style>