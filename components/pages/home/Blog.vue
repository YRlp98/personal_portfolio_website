<template>
  <div class="blog-container">
    <h1>{{ $t("blog") }}</h1>
    <div class="blog">
      <div class="blog-cards">
        <BlogCard
          class="blogCard"
          v-for="blog in blogs"
          :key="blog.id"
          :blog="blog"
        />
      </div>
      <TextOnlyButton :text="$t('viewAll')" link="#" class="textOnlyButton" />
    </div>
    <TitleBackground title="Blog" class="titleBackground" />
  </div>
</template>


<script>
import BlogCard from "../../BlogCard.vue";
import TitleBackground from "../../../components/backgrounds/TitleBackground.vue";
import TextOnlyButton from "../../../components/TextOnlyButton.vue";

export default {
  name: "Blog",
  components: {
    BlogCard,
    TitleBackground,
    TextOnlyButton,
  },
  data() {
    return {
      blogs: [
        {
          title: "نحوه ارتقاء از ویندوز 7 به گنو/لینوکس",
          description:
            "اگه هنوز دارید از Windows 7 به دلیل اینکه از Windows 10 خوشتون نمیاد و یا سیستمی قدیمی‌‌ و ضعیف دارید استفاده می‌کنید، کاملا قابل قابل درک است. اما یک راه جایگزین برای ارتقاء سیستم‌عامل سیستمون وجود داره و اون استفاده از سیستم‌عامل گنو/لینوکس است. می‌تونید لینوکس رو به صورت رایگان روی کامپیوتر شخصیتون نصب کنید و از یک سیستم‌عاملی که پشتیبانی و آپدیت میشه بهره‌مند بشید!",
          image:
            "https://files.virgool.io/upload/users/22898/posts/i1dbn8sqcmur/r9ojcwdoi8tw.png?x-img=v1/resize,w_700/optimize,q_100",
          alt: "نحوه ارتقاء از ویندوز 7 به گنو/لینوکس",
          link: "https://vrgl.ir/pcNl1",
        },
        {
          title: "3 خط فرمان مفید برای تست سرعت اینترنت",
          description:
            "باخبر بودن از سرعت اتصالمون به اینترنت، کمکمون می‌کنه تا بهتر کامپیوترمونو کنترل کنیم. برای همین امروز، تو این مقاله می‌خوام 3 تا Command-line (خط فرمان) برای تست سرعت اینترنت رو معرفی کنم که هر 3 تاشون رایگان و اپن سورس هستن.",
          image:
            "https://files.virgool.io/upload/users/22898/posts/u9ba9ffyesbs/e02w5weyfyjq.png",
          alt: "3 خط فرمان مفید برای تست سرعت اینترنت",
          link: "https://vrgl.ir/mJN0y",
        },
        {
          title: "نسخه 2 وب‌سایت زنیاک منتشر شد!",
          description:
            "شاید اکثر شماهایی که دارید این متن رو می‌خونید، با زنیاک آشنا نیستید و شاید اسمش رو هم نشنیدید. پس به همین دلیل، بهتره که قبل از هرچی زنیاک رو بهتون به صورت خیلی خلاصه معرفی کنم.",
          image:
            "https://files.virgool.io/upload/users/22898/posts/hiuap8xsjmyo/vmfajug0ciqk.png",
          alt: "نسخه 2 وب‌سایت زنیاک منتشر شد!",
          link: "https://vrgl.ir/l1IBS",
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
.blog-container {
  position: relative;

  h1 {
    font-size: 28px;
    color: var(--gray-1);
    text-align: right;
  }

  .blog {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;

    .blog-cards {
      margin-top: 40px;
      margin-bottom: 40px;
      display: flex;
      flex-wrap: wrap;
      justify-content: center;

      .blogCard {
        margin: 10px 10px;

        // Tablet
        @include mediaQueryMin("md") {
          width: 400px;
        }
      }
    }
  }

  .titleBackground {
    z-index: 1;
    left: -120px;
    top: 100px;
    transform: rotate(-90deg);
  }
}

// Tablet
@include mediaQueryMin("md") {
  .blog-container {
    .titleBackground {
      // left: -80px;
    }
  }
}

// Desktop
@include mediaQueryMin("xl") {
  .blog-container {
    .titleBackground {
      // left: -120px;
    }
  }
}
</style>