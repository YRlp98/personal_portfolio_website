<template>
  <div class="skillProgress-container">
    <div class="skillProgress-title">
      <h4>. {{ title }}</h4>
      <a :href="link" target="_blank">
        <img src="../assets/images/icons/question_icon.svg" alt="About" />
      </a>
    </div>
    <div class="skillProgress">
      <div :style="style" class="skillProgress-bar"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: "SkillProgress",
  props: {
    title: {
      type: String,
      default: "Skill Title",
    },
    color: {
      type: String,
      default: "#a0d039",
    },
    width: {
      type: String,
      default: "50%",
    },
    link: {
      type: String,
      default: "/",
    },
  },
  computed: {
    style() {
      return {
        "background-color": this.color,
        width: `${this.width}%`,
      };
    },
  },
};
</script>

<style lang="scss" >
.skillProgress-container {
  .skillProgress-title {
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;

    h4 {
      font-size: 1.125rem;
      color: white;
    }

    a {
      img {
        margin-left: 5px;
        margin-bottom: -2.5px;
        height: 16px;
        width: 16px;
        cursor: pointer;
      }
    }
  }

  .skillProgress {
    background-color: var(--gray-2);
    width: 200px;
    margin-top: 7px;

    .skillProgress-bar {
      text-align: right;
      height: 4px;
    }
  }
}
</style>