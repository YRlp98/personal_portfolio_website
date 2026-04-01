import { mergeProps, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderAttr, ssrInterpolate } from 'vue/server-renderer';
import { _ as _export_sfc } from './server.mjs';

const _sfc_main = {
  name: "BlogCard",
  props: {
    blog: {
      type: Object,
      required: true
    }
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<a${ssrRenderAttrs(mergeProps({
    href: $props.blog.link,
    target: "_blank",
    class: "blogCard-container"
  }, _attrs))} data-v-64d91005><div class="blogCard" data-v-64d91005><img${ssrRenderAttr("src", $props.blog.image)}${ssrRenderAttr("alt", $props.blog.alt)} loading="lazy" data-v-64d91005><div class="blogCard-info" data-v-64d91005><h2 data-v-64d91005>${ssrInterpolate($props.blog.title)}</h2><p data-v-64d91005>${ssrInterpolate($props.blog.description)}</p></div></div></a>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/widgets/BlogCard.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const BlogCard = /* @__PURE__ */ Object.assign(_export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__scopeId", "data-v-64d91005"]]), { __name: "WidgetsBlogCard" });
const blogs = [
  {
    title: "بهترین شیوه‌های Node.js: راهنمایی برای توسعه‌دهندگان",
    description: "جاوا اسکریپت با پیشرفت‌هایی که داشته و همچنین معرفی Node.js، حالا به یکی از محبوب‌ترین و پر استفاده‌ترین زبان‌های برنامه‌نویسی دنیا تبدیل شده. فرقی نمی‌کنه قصد توسعه نرم‌افزار وب داشته باشید و یا نرم افزار موبایل و دسکتاپ، جاوااسکریپت برای هر کاری کلی ابزار قدرتمند در اختیارتان قرار میده. حالا قصد دارم تو این مقاله بهتون نشون بدم که چطوری با استفاده از Node.js می‌تونید وب اسکرپینگ کنید.",
    image: "https://files.virgool.io/upload/users/22898/posts/s49iqwetlwxd/ywglhjf3pohs.png",
    alt: "بهترین شیوه‌های Node.js: راهنمایی برای توسعه‌دهندگان",
    link: "https://vrgl.ir/HDXrw"
  },
  {
    title: "وب اسکرپینگ (Web Scraping) با JavaScript و Node.js",
    description: "جاوا اسکریپت با پیشرفت‌هایی که داشته و همچنین معرفی Node.js، حالا به یکی از محبوب‌ترین و پر استفاده‌ترین زبان‌های برنامه‌نویسی دنیا تبدیل شده. فرقی نمی‌کنه قصد توسعه نرم‌افزار وب داشته باشید و یا نرم افزار موبایل و دسکتاپ، جاوااسکریپت برای هر کاری کلی ابزار قدرتمند در اختیارتان قرار میده. حالا قصد دارم تو این مقاله بهتون نشون بدم که چطوری با استفاده از Node.js می‌تونید وب اسکرپینگ کنید.",
    image: "https://files.virgool.io/upload/users/22898/posts/fcbr0jyuqzoe/fbvwxl3y1snb.png",
    alt: "وب اسکرپینگ (Web Scraping) با JavaScript و Node.js",
    link: "https://vrgl.ir/6hbcv"
  },
  {
    title: "نقشه راهی برای تبدیل شدن به یک توسعه دهنده فلاتر",
    description: "در دنیای امروز اکثر افراد ترجیح میدن تا کمتر از کامپیوترشون استفاده کنن و بیشتر کارها مثل وبگردی، خوندن اخبار، چت و... رو با موبایلشون انجام بدن و دیگه تقریبا هر کسب و کاری به فکر ساخت و توسعه یه نرم افزار موبایل افتاده و اهمیت بیشتری هم نسبت به توسعه نسخه موبایل نرم افزارشون نسبت به سایر نسخه‌های وب و دسکتاپ میدن.",
    image: "https://files.virgool.io/upload/users/22898/posts/c8rup1enxz4f/6dcitbtspnxe.png",
    alt: "نقشه راهی برای تبدیل شدن به یک توسعه دهنده فلاتر",
    link: "https://vrgl.ir/1eB1i"
  },
  {
    title: "نسخه 2 وب‌سایت زنیاک منتشر شد!",
    description: "شاید اکثر شماهایی که دارید این متن رو می‌خونید، با زنیاک آشنا نیستید و شاید اسمش رو هم نشنیدید. پس به همین دلیل، بهتره که قبل از هرچی زنیاک رو بهتون به صورت خیلی خلاصه معرفی کنم.",
    image: "https://files.virgool.io/upload/users/22898/posts/hiuap8xsjmyo/vmfajug0ciqk.png",
    alt: "نسخه 2 وب‌سایت زنیاک منتشر شد!",
    link: "https://vrgl.ir/l1IBS"
  },
  {
    title: "3 خط فرمان مفید برای تست سرعت اینترنت",
    description: "باخبر بودن از سرعت اتصالمون به اینترنت، کمکمون می‌کنه تا بهتر کامپیوترمونو کنترل کنیم. برای همین امروز، تو این مقاله می‌خوام 3 تا Command-line (خط فرمان) برای تست سرعت اینترنت رو معرفی کنم که هر 3 تاشون رایگان و اپن سورس هستن.",
    image: "https://files.virgool.io/upload/users/22898/posts/u9ba9ffyesbs/e02w5weyfyjq.png",
    alt: "3 خط فرمان مفید برای تست سرعت اینترنت",
    link: "https://vrgl.ir/mJN0y"
  },
  {
    title: "نحوه ارتقاء از ویندوز 7 به گنو/لینوکس",
    description: "اگه هنوز دارید از Windows 7 به دلیل اینکه از Windows 10 خوشتون نمیاد و یا سیستمی قدیمی‌‌ و ضعیف دارید استفاده می‌کنید، کاملا قابل قابل درک است. اما یک راه جایگزین برای ارتقاء سیستم‌عامل سیستمون وجود داره و اون استفاده از سیستم‌عامل گنو/لینوکس است. می‌تونید لینوکس رو به صورت رایگان روی کامپیوتر شخصیتون نصب کنید و از یک سیستم‌عاملی که پشتیبانی و آپدیت میشه بهره‌مند بشید!",
    image: "https://files.virgool.io/upload/users/22898/posts/i1dbn8sqcmur/r9ojcwdoi8tw.png?x-img=v1/resize,w_700/optimize,q_100",
    alt: "نحوه ارتقاء از ویندوز 7 به گنو/لینوکس",
    link: "https://vrgl.ir/pcNl1"
  }
];

export { BlogCard as B, blogs as b };
//# sourceMappingURL=blogs-DgZrwq4h.mjs.map
