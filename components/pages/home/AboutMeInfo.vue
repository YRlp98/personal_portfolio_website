<template>
  <div class="aboutMeInfo-container">
    <div class="items">
      <div class="item">
        <img src="~/assets/images/icons/calendar.svg" alt="Birthday" />
        {{ $t("homePageAboutMeBirthday") }}
      </div>
      <a class="item" href="https://en.wikipedia.org/wiki/Iran" target="_blank">
        <img src="~/assets/images/icons/location.svg" alt="Location" />
        {{ $t("iran") }}</a
      >
      <a class="item" href="mailto: hello@yrlp.ir" target="_blank">
        <img src="~/assets/images/icons/email.svg" alt="Email" />
        {{ $t("emailAddress") }}</a
      >
      <a class="item" href="https://t.me/YRlp98" target="_blank">
        <img src="~/assets/images/icons/telegram.svg" alt="Telegram" />
        {{ $t("telegramId") }}</a
      >
    </div>
  </div>
</template>

<script>
export default {
  name: "AboutMeInfo",
};
</script>

<style lang="scss" scoped>
.aboutMeInfo-container {
  .items {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    border-right: 1px solid var(--green-1);
    padding-right: 20px;

    .item {
      display: inline-flex;
      justify-content: center;
      text-decoration: none;
      font-size: 0.938rem;
      color: white;
      cursor: pointer;
      margin: 7.5px 0;

      img {
        height: 17px;
        width: 17px;
        margin-left: 10px;
      }

      &:hover {
        transform: scale(1.1);
      }
    }
  }
}
</style>