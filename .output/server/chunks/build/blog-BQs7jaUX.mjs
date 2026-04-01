import { B as BlogCard, b as blogs } from './blogs-DgZrwq4h.mjs';
import { _ as _export_sfc, f as useRoute, g as useI18n, u as useHead } from './server.mjs';
import { u as useDirection } from './useDirection-CQhRFXyS.mjs';
import { resolveComponent, mergeProps, computed, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrInterpolate, ssrRenderList, ssrRenderComponent } from 'vue/server-renderer';
import '../nitro/nitro.mjs';
import 'node:http';
import 'node:https';
import 'node:events';
import 'node:buffer';
import 'node:fs';
import 'node:path';
import 'node:crypto';
import 'consola';
import 'vue-router';
import 'node:url';
import 'nuxtseo-shared/utils';
import 'fast-xml-parser';
import 'perfect-debounce';
import '@vue/shared';
import '../routes/renderer.mjs';
import 'vue-bundle-renderer/runtime';
import 'unhead/server';
import 'devalue';
import 'unhead/utils';

const _sfc_main = {
  name: "Blog",
  components: { BlogCard },
  setup() {
    const route = useRoute();
    const { changeDirection } = useDirection();
    const i18n = useI18n();
    const canonicalUrl = computed(() => "https://yrlp.ir" + route.path);
    useHead({
      title: "Yousef Roshandel - Blog",
      meta: [
        { name: "description", content: "Yousef Roshandel is a passionate Front-End Developer and UI/UX Designer creating modern, user-friendly websites and digital experiences." },
        { property: "og:title", content: "Yousef Roshandel - Blog" },
        { property: "og:description", content: "Yousef Roshandel is a passionate Front-End Developer and UI/UX Designer creating modern, user-friendly websites and digital experiences." },
        { property: "og:url", content: () => canonicalUrl.value }
      ],
      link: [
        { rel: "canonical", href: () => canonicalUrl.value }
      ]
    });
    return {
      changeDirection,
      activeLang: computed(() => i18n.locale.value)
    };
  },
  data() {
    return {
      blogs
    };
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_BlogCard = resolveComponent("BlogCard");
  _push(`<div${ssrRenderAttrs(mergeProps({
    class: "blog-container defualt-margin",
    style: { direction: `${$setup.changeDirection($setup.activeLang)}` }
  }, _attrs))} data-v-ac9e6411><h1 class="title" data-v-ac9e6411>${ssrInterpolate(_ctx.$t("blog"))}</h1><div class="blog-cards" data-v-ac9e6411><!--[-->`);
  ssrRenderList($data.blogs, (blog2) => {
    _push(ssrRenderComponent(_component_BlogCard, {
      class: "blogCard",
      key: blog2.id,
      blog: blog2
    }, null, _parent));
  });
  _push(`<!--]--></div></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/blog.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const blog = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__scopeId", "data-v-ac9e6411"]]);

export { blog as default };
//# sourceMappingURL=blog-BQs7jaUX.mjs.map
