import { resolveComponent, mergeProps, computed, withCtx, createTextVNode, toDisplayString, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderStyle, ssrInterpolate, ssrRenderList, ssrRenderAttr } from 'vue/server-renderer';
import { _ as _export_sfc, g as useRoute, u as useHead } from './server.mjs';
import { c as changeDirection } from './changeDirection-BOXBeGmC.mjs';
import { p as publicAssetsURL } from '../nitro/nitro.mjs';
import { c as changeAlign, T as TitleBackground, S as SocialNetwork } from './changeAlign-BBn-GU6S.mjs';
import { P as ProjectCard, p as projects } from './projects-CqS_dlXC.mjs';
import { _ as __nuxt_component_0 } from './nuxt-link-BvufrBv4.mjs';
import { B as BlogCard, b as blogs } from './blogs-CMiD7dQd.mjs';
import 'vue-router';
import '../routes/renderer.mjs';
import 'vue-bundle-renderer/runtime';
import 'unhead/server';
import 'devalue';
import 'unhead/utils';
import 'unhead/plugins';
import 'node:http';
import 'node:https';
import 'node:events';
import 'node:buffer';
import 'node:fs';
import 'node:path';
import 'node:crypto';
import 'consola';
import 'node:url';

const _sfc_main$j = {
  name: "ScrollIcon"
};
function _sfc_ssrRender$j(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "scroll-icon" }, _attrs))} data-v-9cc58016></div>`);
}
const _sfc_setup$j = _sfc_main$j.setup;
_sfc_main$j.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/icons/ScrollIcon.vue");
  return _sfc_setup$j ? _sfc_setup$j(props, ctx) : void 0;
};
const ScrollIcon = /* @__PURE__ */ _export_sfc(_sfc_main$j, [["ssrRender", _sfc_ssrRender$j], ["__scopeId", "data-v-9cc58016"]]);
const _sfc_main$i = {
  name: "IconBackground",
  data() {
    return {
      repeats: 10
    };
  }
};
function _sfc_ssrRender$i(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<section${ssrRenderAttrs(_attrs)} data-v-b0efb697><!--[-->`);
  ssrRenderList($data.repeats, (repeat) => {
    _push(`<div class="rep" data-v-b0efb697><div class="row" data-v-b0efb697><div data-v-b0efb697><i class="fa fa-bug" aria-hidden="true" data-v-b0efb697></i><i class="fa fa-coffee" aria-hidden="true" data-v-b0efb697></i><i class="fa fa-code-fork" aria-hidden="true" data-v-b0efb697></i><i class="fab fa-apple" data-v-b0efb697></i><i class="fa fa-graduation-cap" aria-hidden="true" data-v-b0efb697></i><i class="fa fa-laptop" aria-hidden="true" data-v-b0efb697></i><i class="fa fa-language" aria-hidden="true" data-v-b0efb697></i><i class="fab fa-figma" data-v-b0efb697></i><i class="fa fa-paint-brush" aria-hidden="true" data-v-b0efb697></i><i class="fas fa-code" data-v-b0efb697></i><i class="fa fa-rocket" aria-hidden="true" data-v-b0efb697></i><i class="fa fa-life-ring" aria-hidden="true" data-v-b0efb697></i><i class="fa fa-terminal" aria-hidden="true" data-v-b0efb697></i><i class="fab fa-js-square" data-v-b0efb697></i><i class="fab fa-vuejs" data-v-b0efb697></i><i class="fab fa-android" data-v-b0efb697></i><i class="fas fa-gamepad" data-v-b0efb697></i><i class="fab fa-git-alt" data-v-b0efb697></i><i class="fab fa-hooli" data-v-b0efb697></i><i class="fab fa-pied-piper-pp" data-v-b0efb697></i><i class="fa fa-database" aria-hidden="true" data-v-b0efb697></i><i class="fab fa-microsoft" data-v-b0efb697></i><i class="fas fa-pizza-slice" data-v-b0efb697></i><i class="fab fa-stack-overflow" data-v-b0efb697></i><i class="fa fa-desktop" aria-hidden="true" data-v-b0efb697></i><i class="fab fa-css3-alt" data-v-b0efb697></i><i class="fas fa-tablet" data-v-b0efb697></i><i class="fab fa-html5" data-v-b0efb697></i><i class="fa fa-bug" aria-hidden="true" data-v-b0efb697></i><i class="fa fa-coffee" aria-hidden="true" data-v-b0efb697></i><i class="fa fa-code-fork" aria-hidden="true" data-v-b0efb697></i><i class="fab fa-apple" data-v-b0efb697></i><i class="fa fa-graduation-cap" aria-hidden="true" data-v-b0efb697></i><i class="fa fa-laptop" aria-hidden="true" data-v-b0efb697></i><i class="fa fa-language" aria-hidden="true" data-v-b0efb697></i><i class="fab fa-figma" data-v-b0efb697></i><i class="fa fa-paint-brush" aria-hidden="true" data-v-b0efb697></i><i class="fas fa-code" data-v-b0efb697></i><i class="fa fa-rocket" aria-hidden="true" data-v-b0efb697></i><i class="fa fa-life-ring" aria-hidden="true" data-v-b0efb697></i><i class="fa fa-terminal" aria-hidden="true" data-v-b0efb697></i><i class="fab fa-js-square" data-v-b0efb697></i><i class="fab fa-vuejs" data-v-b0efb697></i><i class="fab fa-android" data-v-b0efb697></i><i class="fas fa-gamepad" data-v-b0efb697></i><i class="fab fa-git-alt" data-v-b0efb697></i><i class="fa fa-database" aria-hidden="true" data-v-b0efb697></i><i class="fab fa-microsoft" data-v-b0efb697></i><i class="fas fa-pizza-slice" data-v-b0efb697></i><i class="fab fa-stack-overflow" data-v-b0efb697></i><i class="fa fa-desktop" aria-hidden="true" data-v-b0efb697></i><i class="fab fa-css3-alt" data-v-b0efb697></i><i class="fas fa-tablet" data-v-b0efb697></i><i class="fab fa-html5" data-v-b0efb697></i></div></div><div class="row" data-v-b0efb697><div data-v-b0efb697><i class="fab fa-pied-piper-pp" data-v-b0efb697></i><i class="fab fa-html5" data-v-b0efb697></i><i class="fas fa-tablet" data-v-b0efb697></i><i class="fab fa-css3-alt" data-v-b0efb697></i><i class="fa fa-desktop" aria-hidden="true" data-v-b0efb697></i><i class="fab fa-stack-overflow" data-v-b0efb697></i><i class="fas fa-pizza-slice" data-v-b0efb697></i><i class="fab fa-microsoft" data-v-b0efb697></i><i class="fa fa-database" aria-hidden="true" data-v-b0efb697></i><i class="fab fa-hooli" data-v-b0efb697></i><i class="fab fa-git-alt" data-v-b0efb697></i><i class="fas fa-gamepad" data-v-b0efb697></i><i class="fab fa-android" data-v-b0efb697></i><i class="fab fa-vuejs" data-v-b0efb697></i><i class="fab fa-js-square" data-v-b0efb697></i><i class="fa fa-terminal" aria-hidden="true" data-v-b0efb697></i><i class="fa fa-life-ring" aria-hidden="true" data-v-b0efb697></i><i class="fa fa-rocket" aria-hidden="true" data-v-b0efb697></i><i class="fas fa-code" data-v-b0efb697></i><i class="fa fa-paint-brush" aria-hidden="true" data-v-b0efb697></i><i class="fab fa-figma" data-v-b0efb697></i><i class="fa fa-language" aria-hidden="true" data-v-b0efb697></i><i class="fa fa-laptop" aria-hidden="true" data-v-b0efb697></i><i class="fa fa-graduation-cap" aria-hidden="true" data-v-b0efb697></i><i class="fab fa-apple" data-v-b0efb697></i><i class="fa fa-code-fork" aria-hidden="true" data-v-b0efb697></i><i class="fa fa-coffee" aria-hidden="true" data-v-b0efb697></i><i class="fa fa-bug" aria-hidden="true" data-v-b0efb697></i><i class="fab fa-html5" data-v-b0efb697></i><i class="fas fa-tablet" data-v-b0efb697></i><i class="fab fa-css3-alt" data-v-b0efb697></i><i class="fa fa-desktop" aria-hidden="true" data-v-b0efb697></i><i class="fab fa-stack-overflow" data-v-b0efb697></i><i class="fas fa-pizza-slice" data-v-b0efb697></i><i class="fab fa-microsoft" data-v-b0efb697></i><i class="fa fa-database" aria-hidden="true" data-v-b0efb697></i><i class="fab fa-pied-piper-pp" data-v-b0efb697></i><i class="fab fa-hooli" data-v-b0efb697></i><i class="fab fa-git-alt" data-v-b0efb697></i><i class="fas fa-gamepad" data-v-b0efb697></i><i class="fab fa-android" data-v-b0efb697></i><i class="fab fa-vuejs" data-v-b0efb697></i><i class="fab fa-js-square" data-v-b0efb697></i><i class="fa fa-terminal" aria-hidden="true" data-v-b0efb697></i><i class="fa fa-life-ring" aria-hidden="true" data-v-b0efb697></i><i class="fa fa-rocket" aria-hidden="true" data-v-b0efb697></i><i class="fas fa-code" data-v-b0efb697></i><i class="fa fa-paint-brush" aria-hidden="true" data-v-b0efb697></i><i class="fab fa-figma" data-v-b0efb697></i><i class="fa fa-language" aria-hidden="true" data-v-b0efb697></i><i class="fa fa-laptop" aria-hidden="true" data-v-b0efb697></i><i class="fa fa-graduation-cap" aria-hidden="true" data-v-b0efb697></i><i class="fab fa-apple" data-v-b0efb697></i><i class="fa fa-code-fork" aria-hidden="true" data-v-b0efb697></i><i class="fa fa-coffee" aria-hidden="true" data-v-b0efb697></i><i class="fa fa-bug" aria-hidden="true" data-v-b0efb697></i></div></div><div class="row" data-v-b0efb697><div data-v-b0efb697><i class="fab fa-pied-piper-pp" data-v-b0efb697></i><i class="fab fa-html5" data-v-b0efb697></i><i class="fas fa-tablet" data-v-b0efb697></i><i class="fab fa-css3-alt" data-v-b0efb697></i><i class="fa fa-desktop" aria-hidden="true" data-v-b0efb697></i><i class="fab fa-stack-overflow" data-v-b0efb697></i><i class="fas fa-pizza-slice" data-v-b0efb697></i><i class="fab fa-microsoft" data-v-b0efb697></i><i class="fa fa-database" aria-hidden="true" data-v-b0efb697></i><i class="fab fa-hooli" data-v-b0efb697></i><i class="fab fa-git-alt" data-v-b0efb697></i><i class="fas fa-gamepad" data-v-b0efb697></i><i class="fab fa-android" data-v-b0efb697></i><i class="fab fa-vuejs" data-v-b0efb697></i><i class="fab fa-js-square" data-v-b0efb697></i><i class="fa fa-terminal" aria-hidden="true" data-v-b0efb697></i><i class="fa fa-life-ring" aria-hidden="true" data-v-b0efb697></i><i class="fa fa-rocket" aria-hidden="true" data-v-b0efb697></i><i class="fas fa-code" data-v-b0efb697></i><i class="fa fa-paint-brush" aria-hidden="true" data-v-b0efb697></i><i class="fab fa-figma" data-v-b0efb697></i><i class="fa fa-language" aria-hidden="true" data-v-b0efb697></i><i class="fa fa-laptop" aria-hidden="true" data-v-b0efb697></i><i class="fa fa-graduation-cap" aria-hidden="true" data-v-b0efb697></i><i class="fab fa-apple" data-v-b0efb697></i><i class="fa fa-code-fork" aria-hidden="true" data-v-b0efb697></i><i class="fa fa-coffee" aria-hidden="true" data-v-b0efb697></i><i class="fa fa-bug" aria-hidden="true" data-v-b0efb697></i><i class="fab fa-html5" data-v-b0efb697></i><i class="fas fa-tablet" data-v-b0efb697></i><i class="fab fa-css3-alt" data-v-b0efb697></i><i class="fa fa-desktop" aria-hidden="true" data-v-b0efb697></i><i class="fab fa-stack-overflow" data-v-b0efb697></i><i class="fas fa-pizza-slice" data-v-b0efb697></i><i class="fab fa-microsoft" data-v-b0efb697></i><i class="fa fa-database" aria-hidden="true" data-v-b0efb697></i><i class="fab fa-pied-piper-pp" data-v-b0efb697></i><i class="fab fa-hooli" data-v-b0efb697></i><i class="fab fa-git-alt" data-v-b0efb697></i><i class="fas fa-gamepad" data-v-b0efb697></i><i class="fab fa-android" data-v-b0efb697></i><i class="fab fa-vuejs" data-v-b0efb697></i><i class="fab fa-js-square" data-v-b0efb697></i><i class="fa fa-terminal" aria-hidden="true" data-v-b0efb697></i><i class="fa fa-life-ring" aria-hidden="true" data-v-b0efb697></i><i class="fa fa-rocket" aria-hidden="true" data-v-b0efb697></i><i class="fas fa-code" data-v-b0efb697></i><i class="fa fa-paint-brush" aria-hidden="true" data-v-b0efb697></i><i class="fab fa-figma" data-v-b0efb697></i><i class="fa fa-language" aria-hidden="true" data-v-b0efb697></i><i class="fa fa-laptop" aria-hidden="true" data-v-b0efb697></i><i class="fa fa-graduation-cap" aria-hidden="true" data-v-b0efb697></i><i class="fab fa-apple" data-v-b0efb697></i><i class="fa fa-code-fork" aria-hidden="true" data-v-b0efb697></i><i class="fa fa-coffee" aria-hidden="true" data-v-b0efb697></i><i class="fa fa-bug" aria-hidden="true" data-v-b0efb697></i></div></div><div class="row" data-v-b0efb697><div data-v-b0efb697><i class="fab fa-pied-piper-pp" data-v-b0efb697></i><i class="fab fa-html5" data-v-b0efb697></i><i class="fas fa-tablet" data-v-b0efb697></i><i class="fab fa-css3-alt" data-v-b0efb697></i><i class="fa fa-desktop" aria-hidden="true" data-v-b0efb697></i><i class="fab fa-stack-overflow" data-v-b0efb697></i><i class="fas fa-pizza-slice" data-v-b0efb697></i><i class="fab fa-microsoft" data-v-b0efb697></i><i class="fa fa-database" aria-hidden="true" data-v-b0efb697></i><i class="fab fa-hooli" data-v-b0efb697></i><i class="fab fa-git-alt" data-v-b0efb697></i><i class="fas fa-gamepad" data-v-b0efb697></i><i class="fab fa-android" data-v-b0efb697></i><i class="fab fa-vuejs" data-v-b0efb697></i><i class="fab fa-js-square" data-v-b0efb697></i><i class="fa fa-terminal" aria-hidden="true" data-v-b0efb697></i><i class="fa fa-life-ring" aria-hidden="true" data-v-b0efb697></i><i class="fa fa-rocket" aria-hidden="true" data-v-b0efb697></i><i class="fas fa-code" data-v-b0efb697></i><i class="fa fa-paint-brush" aria-hidden="true" data-v-b0efb697></i><i class="fab fa-figma" data-v-b0efb697></i><i class="fa fa-language" aria-hidden="true" data-v-b0efb697></i><i class="fa fa-laptop" aria-hidden="true" data-v-b0efb697></i><i class="fa fa-graduation-cap" aria-hidden="true" data-v-b0efb697></i><i class="fab fa-apple" data-v-b0efb697></i><i class="fa fa-code-fork" aria-hidden="true" data-v-b0efb697></i><i class="fa fa-coffee" aria-hidden="true" data-v-b0efb697></i><i class="fa fa-bug" aria-hidden="true" data-v-b0efb697></i><i class="fab fa-html5" data-v-b0efb697></i><i class="fas fa-tablet" data-v-b0efb697></i><i class="fab fa-css3-alt" data-v-b0efb697></i><i class="fa fa-desktop" aria-hidden="true" data-v-b0efb697></i><i class="fab fa-stack-overflow" data-v-b0efb697></i><i class="fas fa-pizza-slice" data-v-b0efb697></i><i class="fab fa-microsoft" data-v-b0efb697></i><i class="fa fa-database" aria-hidden="true" data-v-b0efb697></i><i class="fab fa-pied-piper-pp" data-v-b0efb697></i><i class="fab fa-hooli" data-v-b0efb697></i><i class="fab fa-git-alt" data-v-b0efb697></i><i class="fas fa-gamepad" data-v-b0efb697></i><i class="fab fa-android" data-v-b0efb697></i><i class="fab fa-vuejs" data-v-b0efb697></i><i class="fab fa-js-square" data-v-b0efb697></i><i class="fa fa-terminal" aria-hidden="true" data-v-b0efb697></i><i class="fa fa-life-ring" aria-hidden="true" data-v-b0efb697></i><i class="fa fa-rocket" aria-hidden="true" data-v-b0efb697></i><i class="fas fa-code" data-v-b0efb697></i><i class="fa fa-paint-brush" aria-hidden="true" data-v-b0efb697></i><i class="fab fa-figma" data-v-b0efb697></i><i class="fa fa-language" aria-hidden="true" data-v-b0efb697></i><i class="fa fa-laptop" aria-hidden="true" data-v-b0efb697></i><i class="fa fa-graduation-cap" aria-hidden="true" data-v-b0efb697></i><i class="fab fa-apple" data-v-b0efb697></i><i class="fa fa-code-fork" aria-hidden="true" data-v-b0efb697></i><i class="fa fa-coffee" aria-hidden="true" data-v-b0efb697></i><i class="fa fa-bug" aria-hidden="true" data-v-b0efb697></i></div></div></div>`);
  });
  _push(`<!--]--></section>`);
}
const _sfc_setup$i = _sfc_main$i.setup;
_sfc_main$i.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/backgrounds/IconBackground.vue");
  return _sfc_setup$i ? _sfc_setup$i(props, ctx) : void 0;
};
const IconBackground = /* @__PURE__ */ _export_sfc(_sfc_main$i, [["ssrRender", _sfc_ssrRender$i], ["__scopeId", "data-v-b0efb697"]]);
const _sfc_main$h = {
  name: "HeroSection",
  components: {
    ScrollIcon,
    IconBackground
  },
  data() {
    return {};
  },
  computed: {
    activeLang() {
      return this.$i18n.locale;
    }
  },
  mixins: [changeDirection],
  mounted() {
  }
};
function _sfc_ssrRender$h(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_ScrollIcon = resolveComponent("ScrollIcon");
  const _component_IconBackground = resolveComponent("IconBackground");
  _push(`<div${ssrRenderAttrs(mergeProps({
    class: "heroSection-container",
    id: "#homeHeroSection"
  }, _attrs))} data-v-3da527e3><div class="heroSection-content" style="${ssrRenderStyle({ direction: `${_ctx.changeDirection($options.activeLang)}` })}" data-v-3da527e3><div class="heroSection-welcome" data-v-3da527e3><div class="heroTitle" data-v-3da527e3>${ssrInterpolate(_ctx.$t("homePageHello"))} <br data-v-3da527e3><div data-v-3da527e3>${ssrInterpolate(_ctx.$t("homePageMy"))} <h1 data-v-3da527e3>${ssrInterpolate(_ctx.$t("homePageName"))}</h1></div></div><span data-v-3da527e3></span><h2 data-v-3da527e3>${ssrInterpolate(_ctx.$t("homePageJobTitleP1"))} ${ssrInterpolate(_ctx.$t("homePageJobTitleP2"))}</h2><h2 data-v-3da527e3></h2></div>`);
  _push(ssrRenderComponent(_component_ScrollIcon, { class: "scrollIcon" }, null, _parent));
  _push(`</div>`);
  _push(ssrRenderComponent(_component_IconBackground, { ref: "" }, null, _parent));
  _push(`</div>`);
}
const _sfc_setup$h = _sfc_main$h.setup;
_sfc_main$h.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/pages/home/HeroSection.vue");
  return _sfc_setup$h ? _sfc_setup$h(props, ctx) : void 0;
};
const HeroSection = /* @__PURE__ */ _export_sfc(_sfc_main$h, [["ssrRender", _sfc_ssrRender$h], ["__scopeId", "data-v-3da527e3"]]);
const _sfc_main$g = {
  name: "WaveBackground"
};
function _sfc_ssrRender$g(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "wave" }, _attrs))} data-v-b6622028></div>`);
}
const _sfc_setup$g = _sfc_main$g.setup;
_sfc_main$g.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/backgrounds/WaveBackground.vue");
  return _sfc_setup$g ? _sfc_setup$g(props, ctx) : void 0;
};
const WaveBackground = /* @__PURE__ */ _export_sfc(_sfc_main$g, [["ssrRender", _sfc_ssrRender$g], ["__scopeId", "data-v-b6622028"]]);
const _imports_0$2 = publicAssetsURL("/images/icons/calendar.svg");
const _imports_1 = publicAssetsURL("/images/icons/location.svg");
const _imports_2 = publicAssetsURL("/images/icons/email.svg");
const _imports_3 = publicAssetsURL("/images/icons/telegram.svg");
const _sfc_main$f = {
  name: "AboutMeInfo"
};
function _sfc_ssrRender$f(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "aboutMeInfo-container" }, _attrs))} data-v-774fc25d><div class="items" data-v-774fc25d><div class="item" data-v-774fc25d><img${ssrRenderAttr("src", _imports_0$2)} alt="Birthday" data-v-774fc25d> ${ssrInterpolate(_ctx.$t("homePageAboutMeBirthday"))}</div><a class="item" href="https://en.wikipedia.org/wiki/Iran" target="_blank" data-v-774fc25d><img${ssrRenderAttr("src", _imports_1)} alt="Location" data-v-774fc25d> ${ssrInterpolate(_ctx.$t("iran"))}</a><a class="item" href="mailto: hello@yrlp.ir" target="_blank" data-v-774fc25d><img${ssrRenderAttr("src", _imports_2)} alt="Email" data-v-774fc25d> ${ssrInterpolate(_ctx.$t("emailAddress"))}</a><a class="item" href="https://t.me/YRlp98" target="_blank" data-v-774fc25d><img${ssrRenderAttr("src", _imports_3)} alt="Telegram" data-v-774fc25d> ${ssrInterpolate(_ctx.$t("telegramId"))}</a></div></div>`);
}
const _sfc_setup$f = _sfc_main$f.setup;
_sfc_main$f.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/pages/home/AboutMeInfo.vue");
  return _sfc_setup$f ? _sfc_setup$f(props, ctx) : void 0;
};
const AboutMeInfo = /* @__PURE__ */ _export_sfc(_sfc_main$f, [["ssrRender", _sfc_ssrRender$f], ["__scopeId", "data-v-774fc25d"]]);
const _sfc_main$e = {
  name: "AboutMe",
  components: {
    AboutMeInfo,
    SocialNetwork,
    TitleBackground
  },
  data() {
    return {};
  },
  computed: {
    activeLang() {
      return this.$i18n.locale;
    }
  },
  mixins: [changeDirection, changeAlign],
  mounted() {
  }
};
function _sfc_ssrRender$e(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_AboutMeInfo = resolveComponent("AboutMeInfo");
  const _component_SocialNetwork = resolveComponent("SocialNetwork");
  const _component_TitleBackground = resolveComponent("TitleBackground");
  _push(`<div${ssrRenderAttrs(mergeProps({
    class: "aboutMe-container",
    id: "homeAboutMe"
  }, _attrs))} data-v-66832ce1><h2 class="aboutMe-title" style="${ssrRenderStyle({ textAlign: `${_ctx.changeAlign($options.activeLang)}` })}" data-v-66832ce1>${ssrInterpolate(_ctx.$t("homePageAboutMe"))}</h2><div class="aboutMe-avatar" data-v-66832ce1><img src="https://lixbjgupmbwyplqhzkde.supabase.in/storage/v1/object/sign/yrlp-storage/Images/Yousef_Roshandel.webp?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJ5cmxwLXN0b3JhZ2UvSW1hZ2VzL1lvdXNlZl9Sb3NoYW5kZWwud2VicCIsImlhdCI6MTYzODE5OTg4NSwiZXhwIjoxOTUzNTU5ODg1fQ.VKVFopNxk-Ewlr32JwQdmybEs9oPvsxP5OXNZrxjBNs" alt="Yousef Roshandel" data-v-66832ce1><div class="square" data-v-66832ce1></div></div><p class="aboutMe-text" style="${ssrRenderStyle({ direction: `${_ctx.changeDirection($options.activeLang)}` })}" data-v-66832ce1>${ssrInterpolate(_ctx.$t("homePageAboutMeText"))}</p>`);
  _push(ssrRenderComponent(_component_AboutMeInfo, { class: "aboutMeInfo" }, null, _parent));
  _push(ssrRenderComponent(_component_SocialNetwork, { class: "socialNetwork" }, null, _parent));
  _push(ssrRenderComponent(_component_TitleBackground, {
    class: "titleBackground",
    title: "about me"
  }, null, _parent));
  _push(`</div>`);
}
const _sfc_setup$e = _sfc_main$e.setup;
_sfc_main$e.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/pages/home/AboutMe.vue");
  return _sfc_setup$e ? _sfc_setup$e(props, ctx) : void 0;
};
const AboutMe = /* @__PURE__ */ _export_sfc(_sfc_main$e, [["ssrRender", _sfc_ssrRender$e], ["__scopeId", "data-v-66832ce1"]]);
const _sfc_main$d = {
  name: "HomeTitle",
  props: {
    title: {
      type: String,
      required: true
    }
  }
};
function _sfc_ssrRender$d(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "homeTitle-container" }, _attrs))} data-v-d13e5f9d><h2 data-v-d13e5f9d>${ssrInterpolate($props.title)}</h2></div>`);
}
const _sfc_setup$d = _sfc_main$d.setup;
_sfc_main$d.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/pages/home/HomeTitle.vue");
  return _sfc_setup$d ? _sfc_setup$d(props, ctx) : void 0;
};
const HomeTitle = /* @__PURE__ */ _export_sfc(_sfc_main$d, [["ssrRender", _sfc_ssrRender$d], ["__scopeId", "data-v-d13e5f9d"]]);
const _sfc_main$c = {
  name: "TitleSubCard",
  props: {
    title: {
      type: String,
      required: false
    },
    description: {
      type: String,
      required: false
    },
    icon: {
      type: String,
      default: "calendar_gray",
      required: false
    }
  }
};
function _sfc_ssrRender$c(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "titleSubCard-container" }, _attrs))} data-v-cd90bc01><div class="titleSubCard" data-v-cd90bc01><h4 data-v-cd90bc01>${ssrInterpolate($props.title)}</h4><div class="descriptiont" data-v-cd90bc01><img${ssrRenderAttr("src", `/images/icons/${$props.icon}.svg`)}${ssrRenderAttr("alt", $props.icon)} data-v-cd90bc01><p data-v-cd90bc01>${ssrInterpolate($props.description)}</p></div></div></div>`);
}
const _sfc_setup$c = _sfc_main$c.setup;
_sfc_main$c.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/widgets/TitleSubCard.vue");
  return _sfc_setup$c ? _sfc_setup$c(props, ctx) : void 0;
};
const TitleSubCard = /* @__PURE__ */ _export_sfc(_sfc_main$c, [["ssrRender", _sfc_ssrRender$c], ["__scopeId", "data-v-cd90bc01"]]);
const _imports_0$1 = publicAssetsURL("/images/icons/education.svg");
const _sfc_main$b = {
  name: "IconListCard",
  components: {
    TitleSubCard
  },
  props: {
    link: {
      type: String,
      required: false,
      default: "/"
    },
    // iconUrl: {
    //   type: String,
    //   required: true,
    //   default: "~/assets/images/icons/education.svg",
    // },
    iconAlt: {
      type: String,
      required: false
    },
    title: {
      type: String,
      required: true,
      default: "Title"
    },
    description: {
      type: String,
      required: true,
      default: "Description"
    }
  }
};
function _sfc_ssrRender$b(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_TitleSubCard = resolveComponent("TitleSubCard");
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "iconListCard-container" }, _attrs))} data-v-2a7a1fc4><a class="iconListCard"${ssrRenderAttr("href", $props.link)} target="_blank" data-v-2a7a1fc4><div class="icon" data-v-2a7a1fc4><img${ssrRenderAttr("src", _imports_0$1)} alt="education icon" data-v-2a7a1fc4></div>`);
  _push(ssrRenderComponent(_component_TitleSubCard, {
    class: "titleSubCard",
    title: $props.title,
    description: $props.description
  }, null, _parent));
  _push(`</a></div>`);
}
const _sfc_setup$b = _sfc_main$b.setup;
_sfc_main$b.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/widgets/IconListCard.vue");
  return _sfc_setup$b ? _sfc_setup$b(props, ctx) : void 0;
};
const IconListCard = /* @__PURE__ */ _export_sfc(_sfc_main$b, [["ssrRender", _sfc_ssrRender$b], ["__scopeId", "data-v-2a7a1fc4"]]);
const _sfc_main$a = {
  name: "Education",
  components: {
    HomeTitle,
    TitleSubCard,
    IconListCard
  }
};
function _sfc_ssrRender$a(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_HomeTitle = resolveComponent("HomeTitle");
  const _component_IconListCard = resolveComponent("IconListCard");
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "education-container" }, _attrs))} data-v-71fc5009><div class="education" data-v-71fc5009>`);
  _push(ssrRenderComponent(_component_HomeTitle, {
    title: _ctx.$t("education")
  }, null, _parent));
  _push(`<div class="education-carts" data-v-71fc5009><div class="firstColumn" data-v-71fc5009>`);
  _push(ssrRenderComponent(_component_IconListCard, {
    class: "iconListCard",
    title: _ctx.$t("homePageEducationAssociate"),
    description: _ctx.$t("homePageEducationAssociateDate"),
    link: "https://mkz.tvu.ac.ir/"
  }, null, _parent));
  _push(`</div><div class="secondColumn" data-v-71fc5009>`);
  _push(ssrRenderComponent(_component_IconListCard, {
    class: "iconListCard",
    title: _ctx.$t("homePageEducationBachelor"),
    description: _ctx.$t("homePageEducationBachelorDate"),
    link: "https://mkz.tvu.ac.ir/"
  }, null, _parent));
  _push(`</div></div></div></div>`);
}
const _sfc_setup$a = _sfc_main$a.setup;
_sfc_main$a.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/pages/home/Education.vue");
  return _sfc_setup$a ? _sfc_setup$a(props, ctx) : void 0;
};
const Education = /* @__PURE__ */ _export_sfc(_sfc_main$a, [["ssrRender", _sfc_ssrRender$a], ["__scopeId", "data-v-71fc5009"]]);
const _sfc_main$9 = {
  name: "ImageListCard",
  components: {
    TitleSubCard
  },
  props: {
    link: {
      type: String,
      required: false,
      default: "/"
    },
    imageUrl: {
      type: String,
      required: true,
      default: "https://s21.picofile.com/file/8444387576/xeniac_logo.png"
    },
    imageAlt: {
      type: String,
      required: false
    },
    title: {
      type: String,
      required: true,
      default: "Title"
    },
    description: {
      type: String,
      required: true,
      default: "Description"
    }
  }
};
function _sfc_ssrRender$9(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_TitleSubCard = resolveComponent("TitleSubCard");
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "imageListCard-container" }, _attrs))} data-v-863da1fe><a class="imageListCard"${ssrRenderAttr("href", $props.link)} target="_blank" data-v-863da1fe><div class="image" data-v-863da1fe><img${ssrRenderAttr("src", $props.imageUrl)}${ssrRenderAttr("alt", $props.imageAlt)} data-v-863da1fe></div>`);
  _push(ssrRenderComponent(_component_TitleSubCard, {
    class: "titleSubCard",
    title: $props.title,
    description: $props.description,
    icon: "line"
  }, null, _parent));
  _push(`</a></div>`);
}
const _sfc_setup$9 = _sfc_main$9.setup;
_sfc_main$9.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/widgets/ImageListCard.vue");
  return _sfc_setup$9 ? _sfc_setup$9(props, ctx) : void 0;
};
const ImageListCard = /* @__PURE__ */ _export_sfc(_sfc_main$9, [["ssrRender", _sfc_ssrRender$9], ["__scopeId", "data-v-863da1fe"]]);
const _sfc_main$8 = {
  name: "Experience",
  components: {
    HomeTitle,
    ImageListCard,
    TitleSubCard
  }
};
function _sfc_ssrRender$8(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_HomeTitle = resolveComponent("HomeTitle");
  const _component_ImageListCard = resolveComponent("ImageListCard");
  const _component_TitleSubCard = resolveComponent("TitleSubCard");
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "experience-container" }, _attrs))} data-v-ef22209f>`);
  _push(ssrRenderComponent(_component_HomeTitle, {
    class: "homeTitle",
    title: _ctx.$t("experience")
  }, null, _parent));
  _push(`<div class="experience main" data-v-ef22209f><h3 class="catTitle" data-v-ef22209f>${ssrInterpolate(_ctx.$t("HomePageExperienceMain"))}</h3>`);
  _push(ssrRenderComponent(_component_ImageListCard, {
    class: "imageListCard",
    link: "https://dotswan.com/",
    imageUrl: "https://lixbjgupmbwyplqhzkde.supabase.co/storage/v1/object/sign/yrlp-storage/Images/dotswan_logo.webp?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV84M2MwNWYxNS04NzViLTRlYmItYjVmYS1kYzI5YjBlNWMwNmUiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJ5cmxwLXN0b3JhZ2UvSW1hZ2VzL2RvdHN3YW5fbG9nby53ZWJwIiwiaWF0IjoxNzYwNzEzNjQ2LCJleHAiOjQ5MTQzMTM2NDZ9.EjzW4KHhRycwiAUsDfYXQRRa8xW7zYke7nJHyVHgJTQ",
    imageAlt: "dotSwan",
    title: _ctx.$t("dotSwan"),
    description: _ctx.$t("dotSwanDesc")
  }, null, _parent));
  _push(`<div class="subExperiences" data-v-ef22209f>`);
  _push(ssrRenderComponent(_component_TitleSubCard, {
    class: "titleSubCard",
    title: _ctx.$t("HomePageExperiencDotSwan"),
    description: _ctx.$t("HomePageExperiencDotSwanFrontEndDate")
  }, null, _parent));
  _push(`</div>`);
  _push(ssrRenderComponent(_component_ImageListCard, {
    class: "imageListCard",
    link: "http://fewzed.co.uk/",
    imageUrl: "https://lixbjgupmbwyplqhzkde.supabase.co/storage/v1/object/sign/yrlp-storage/Images/fewzed_ltd_logo.webp?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV84M2MwNWYxNS04NzViLTRlYmItYjVmYS1kYzI5YjBlNWMwNmUiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJ5cmxwLXN0b3JhZ2UvSW1hZ2VzL2Zld3plZF9sdGRfbG9nby53ZWJwIiwiaWF0IjoxNzYwNzEzNjEyLCJleHAiOjQ5MTQzMTM2MTJ9.jIR7DBiJbHS-RrTrPHE3mNIc1bvGcGTJULpNg5GWg_M",
    imageAlt: "Fewzed",
    title: _ctx.$t("fewzed"),
    description: _ctx.$t("fewzedDesc")
  }, null, _parent));
  _push(`<div class="subExperiences" data-v-ef22209f>`);
  _push(ssrRenderComponent(_component_TitleSubCard, {
    class: "titleSubCard",
    title: _ctx.$t("HomePageExperiencFewzewd"),
    description: _ctx.$t("HomePageExperiencFewzedFrontEndDate")
  }, null, _parent));
  _push(`</div>`);
  _push(ssrRenderComponent(_component_ImageListCard, {
    class: "imageListCard",
    link: "https://xeniac.ir",
    imageUrl: "https://lixbjgupmbwyplqhzkde.supabase.in/storage/v1/object/sign/yrlp-storage/Images/Xeniac.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJ5cmxwLXN0b3JhZ2UvSW1hZ2VzL1hlbmlhYy5wbmciLCJpYXQiOjE2MzgxOTk5NDAsImV4cCI6MTk1MzU1OTk0MH0.qQ9NDn-b5zKjTFDMJZCPCMCMBcZZ2eBParqm7-njpqw",
    imageAlt: "Xeniac",
    title: _ctx.$t("xeniac"),
    description: _ctx.$t("xeniacDesc")
  }, null, _parent));
  _push(`<div class="subExperiences" data-v-ef22209f>`);
  _push(ssrRenderComponent(_component_TitleSubCard, {
    class: "titleSubCard",
    title: _ctx.$t("HomePageExperiencXeniacFrontEnd"),
    description: _ctx.$t("HomePageExperiencXeniacFrontEndDate")
  }, null, _parent));
  _push(ssrRenderComponent(_component_TitleSubCard, {
    class: "titleSubCard",
    title: _ctx.$t("HomePageExperiencXeniacUIUX"),
    description: _ctx.$t("HomePageExperiencXeniacUIUXDate")
  }, null, _parent));
  _push(ssrRenderComponent(_component_TitleSubCard, {
    class: "titleSubCard",
    title: _ctx.$t("HomePageExperiencXeniacMobile"),
    description: _ctx.$t("HomePageExperiencXeniacMobileDate")
  }, null, _parent));
  _push(`</div></div><div class="experience other" data-v-ef22209f><h3 class="catTitle" data-v-ef22209f>${ssrInterpolate(_ctx.$t("HomePageExperienceOther"))}</h3>`);
  _push(ssrRenderComponent(_component_ImageListCard, {
    class: "imageListCard",
    link: "https://samarena.ir/",
    imageUrl: "https://lixbjgupmbwyplqhzkde.supabase.in/storage/v1/object/sign/yrlp-storage/Images/Samsung.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJ5cmxwLXN0b3JhZ2UvSW1hZ2VzL1NhbXN1bmcucG5nIiwiaWF0IjoxNjM4MTk5OTYxLCJleHAiOjE5NTM1NTk5NjF9.yXjD1MS9mEy8jIPkQOZwWdytYh8BB2b8_N7KaaOKepg",
    imageAlt: "Sam Arena",
    title: _ctx.$t("samArea"),
    description: _ctx.$t("samAreaDesc")
  }, null, _parent));
  _push(`<div class="subExperiences" data-v-ef22209f>`);
  _push(ssrRenderComponent(_component_TitleSubCard, {
    class: "titleSubCard",
    title: _ctx.$t("HomePageExperiencSamArena"),
    description: _ctx.$t("HomePageExperiencSamArenaDate")
  }, null, _parent));
  _push(`</div>`);
  _push(ssrRenderComponent(_component_ImageListCard, {
    class: "imageListCard",
    link: "https://toranji.ir",
    imageUrl: "https://lixbjgupmbwyplqhzkde.supabase.in/storage/v1/object/sign/yrlp-storage/Images/Toranji.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJ5cmxwLXN0b3JhZ2UvSW1hZ2VzL1RvcmFuamkucG5nIiwiaWF0IjoxNjM4MTk5OTc5LCJleHAiOjE5NTM1NTk5Nzl9.-ShWOeep1YCyK36OPtv7t_Owv2mrbA0JGbnrZbY6Apg",
    imageAlt: "Toranji",
    title: _ctx.$t("toranji"),
    description: _ctx.$t("toranjiDesc")
  }, null, _parent));
  _push(`<div class="subExperiences" data-v-ef22209f>`);
  _push(ssrRenderComponent(_component_TitleSubCard, {
    class: "titleSubCard",
    title: _ctx.$t("HomePageExperiencToranji"),
    description: _ctx.$t("HomePageExperiencToranjiDate")
  }, null, _parent));
  _push(`</div>`);
  _push(ssrRenderComponent(_component_ImageListCard, {
    class: "imageListCard",
    link: "https://cafedl.com/",
    imageUrl: "https://lixbjgupmbwyplqhzkde.supabase.in/storage/v1/object/sign/yrlp-storage/Images/CafeDL.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJ5cmxwLXN0b3JhZ2UvSW1hZ2VzL0NhZmVETC5wbmciLCJpYXQiOjE2MzgxOTk4NzgsImV4cCI6MTk1MzU1OTg3OH0.PRTCKt4arzv1Xc6uwXmFw0fPS8SU1BwshwsudyaAkLI",
    imageAlt: "CafeDL",
    title: _ctx.$t("cafeDL"),
    description: _ctx.$t("cafeDLDesc")
  }, null, _parent));
  _push(`<div class="subExperiences" data-v-ef22209f>`);
  _push(ssrRenderComponent(_component_TitleSubCard, {
    class: "titleSubCard",
    title: _ctx.$t("HomePageExperiencCafeDL"),
    description: _ctx.$t("HomePageExperiencCafeDLDate")
  }, null, _parent));
  _push(`</div></div></div>`);
}
const _sfc_setup$8 = _sfc_main$8.setup;
_sfc_main$8.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/pages/home/Experience.vue");
  return _sfc_setup$8 ? _sfc_setup$8(props, ctx) : void 0;
};
const Experience = /* @__PURE__ */ _export_sfc(_sfc_main$8, [["ssrRender", _sfc_ssrRender$8], ["__scopeId", "data-v-ef22209f"]]);
const _sfc_main$7 = {
  name: "IconTitle",
  props: {
    color: {
      type: String,
      default: "#a0d039"
    },
    icon: {
      type: String,
      required: false
    },
    alt: {
      type: String,
      required: false
    },
    title: {
      type: String,
      required: true,
      default: "Title"
    }
  },
  computed: {
    style() {
      return {
        "background-color": this.color
      };
    }
  }
};
function _sfc_ssrRender$7(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "iconTitle-container" }, _attrs))} data-v-92b06265><div style="${ssrRenderStyle($options.style)}" class="icon-background" data-v-92b06265><img${ssrRenderAttr("src", `/images/icons/${$props.icon}.svg`)}${ssrRenderAttr("alt", $props.alt)} data-v-92b06265></div><h2 data-v-92b06265>${ssrInterpolate($props.title)}</h2></div>`);
}
const _sfc_setup$7 = _sfc_main$7.setup;
_sfc_main$7.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/widgets/iconTitle.vue");
  return _sfc_setup$7 ? _sfc_setup$7(props, ctx) : void 0;
};
const IconTitle = /* @__PURE__ */ _export_sfc(_sfc_main$7, [["ssrRender", _sfc_ssrRender$7], ["__scopeId", "data-v-92b06265"]]);
const _imports_0 = publicAssetsURL("/images/icons/question_icon.svg");
const _sfc_main$6 = {
  name: "SkillProgress",
  props: {
    skill: {
      type: Object
    },
    color: {
      type: String,
      default: "#a0d039"
    }
  },
  computed: {
    style() {
      return {
        "background-color": this.color,
        width: `${this.skill.width}%`
      };
    }
  }
};
function _sfc_ssrRender$6(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "skillProgress-container" }, _attrs))}><div class="skillProgress-title"><h4>. ${ssrInterpolate($props.skill.title)}</h4><a${ssrRenderAttr("href", $props.skill.link)} target="_blank"><img${ssrRenderAttr("src", _imports_0)} alt="About"></a></div><div class="skillProgress"><div style="${ssrRenderStyle($options.style)}" class="skillProgress-bar"></div></div></div>`);
}
const _sfc_setup$6 = _sfc_main$6.setup;
_sfc_main$6.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/pages/home/SkillProgress.vue");
  return _sfc_setup$6 ? _sfc_setup$6(props, ctx) : void 0;
};
const SkillProgress = /* @__PURE__ */ _export_sfc(_sfc_main$6, [["ssrRender", _sfc_ssrRender$6]]);
const _sfc_main$5 = {
  name: "SkillSimple",
  props: {
    skill: {
      type: Object
    }
  }
};
function _sfc_ssrRender$5(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "skillProgress-container" }, _attrs))}><div class="skillProgress-title"><h4>. ${ssrInterpolate($props.skill.title)}</h4><a${ssrRenderAttr("href", $props.skill.link)} target="_blank"><img${ssrRenderAttr("src", _imports_0)} alt="About"></a></div></div>`);
}
const _sfc_setup$5 = _sfc_main$5.setup;
_sfc_main$5.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/pages/home/SkillSimple.vue");
  return _sfc_setup$5 ? _sfc_setup$5(props, ctx) : void 0;
};
const SkillSimple = /* @__PURE__ */ _export_sfc(_sfc_main$5, [["ssrRender", _sfc_ssrRender$5]]);
const _sfc_main$4 = {
  name: "Skills",
  components: {
    IconTitle,
    SkillProgress,
    SkillSimple,
    TitleBackground
  },
  data() {
    return {
      webSkills: [
        {
          title: "HTML",
          width: "90",
          link: "https://en.wikipedia.org/wiki/HTML"
        },
        {
          title: "CSS",
          width: "90",
          link: "https://en.wikipedia.org/wiki/CSS"
        },
        {
          title: "Vue.js",
          width: "90",
          link: "https://en.wikipedia.org/wiki/Vue.js"
        },
        {
          title: "Nuxt.js",
          width: "90",
          link: "https://en.wikipedia.org/wiki/Nuxt.js"
        },
        {
          title: "JavaScript",
          width: "80",
          link: "https://en.wikipedia.org/wiki/JavaScript"
        },
        {
          title: "Node.js",
          width: "40",
          link: "https://en.wikipedia.org/wiki/Node.js"
        }
      ],
      uiSkills: [
        {
          title: "Figma",
          width: "90",
          link: "https://en.wikipedia.org/wiki/Figma_(software)"
        },
        {
          title: "Adobe XD",
          width: "90",
          link: "https://en.wikipedia.org/wiki/Adobe_XD"
        },
        {
          title: "Adobe Photoshop",
          width: "80",
          link: "https://en.wikipedia.org/wiki/Adobe_Photoshop"
        },
        {
          title: "Adobe Illustrator",
          width: "50",
          link: "https://en.wikipedia.org/wiki/Adobe_Illustrator"
        }
      ],
      softwareSkills: [
        {
          title: "Agile",
          link: "https://en.wikipedia.org/wiki/Agile_software_development"
        },
        {
          title: "Scrum",
          link: "https://en.wikipedia.org/wiki/Scrum_(software_development)"
        }
      ],
      mobileSkills: [
        {
          title: "Flutter",
          link: "https://en.wikipedia.org/wiki/Flutter_(software)"
        },
        {
          title: "Dart",
          link: "https://en.wikipedia.org/wiki/Dart_(programming_language)"
        },
        {
          title: "Java",
          link: "https://en.wikipedia.org/wiki/Java_(programming_language)"
        },
        {
          title: "XML",
          link: "https://en.wikipedia.org/wiki/XML"
        }
      ],
      othersSkills: [
        {
          title: "Git",
          link: "https://en.wikipedia.org/wiki/Git"
        },
        {
          title: "REST API",
          link: "https://en.wikipedia.org/wiki/Representational_state_transfer"
        },
        {
          title: "Linux",
          link: "https://en.wikipedia.org/wiki/Linux"
        }
      ]
    };
  },
  computed: {
    activeLang() {
      return this.$i18n.locale;
    }
  },
  mixins: [changeAlign]
};
function _sfc_ssrRender$4(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_IconTitle = resolveComponent("IconTitle");
  const _component_SkillProgress = resolveComponent("SkillProgress");
  const _component_SkillSimple = resolveComponent("SkillSimple");
  const _component_TitleBackground = resolveComponent("TitleBackground");
  _push(`<div${ssrRenderAttrs(mergeProps({
    class: "skills-container",
    id: "homeSkills"
  }, _attrs))} data-v-ba70d385><div class="main-skills-container defualt-margin" data-v-ba70d385><h2 style="${ssrRenderStyle({ textAlign: `${_ctx.changeAlign($options.activeLang)}` })}" data-v-ba70d385>${ssrInterpolate(_ctx.$t("homePageSkillsMain"))}</h2><div class="main-skills" data-v-ba70d385><div class="skills" data-v-ba70d385>`);
  _push(ssrRenderComponent(_component_IconTitle, {
    class: "iconTitle",
    color: "#a0d039",
    icon: "web",
    alt: "web",
    title: "Web"
  }, null, _parent));
  _push(`<!--[-->`);
  ssrRenderList($data.webSkills, (skill) => {
    _push(ssrRenderComponent(_component_SkillProgress, {
      class: "skillProgress",
      key: skill.id,
      skill,
      color: "#a0d039"
    }, null, _parent));
  });
  _push(`<!--]--></div><div class="skills" data-v-ba70d385>`);
  _push(ssrRenderComponent(_component_IconTitle, {
    class: "iconTitle",
    color: "#65d7bb",
    icon: "uiux",
    alt: "UI/UX Design",
    title: "UI/UX Design"
  }, null, _parent));
  _push(`<!--[-->`);
  ssrRenderList($data.uiSkills, (skill) => {
    _push(ssrRenderComponent(_component_SkillProgress, {
      class: "skillProgress",
      key: skill.id,
      skill,
      color: "#65d7bb"
    }, null, _parent));
  });
  _push(`<!--]--></div></div></div><div class="other-skills-container defualt-margin" data-v-ba70d385><h2 style="${ssrRenderStyle({ textAlign: `${_ctx.changeAlign($options.activeLang)}` })}" data-v-ba70d385>${ssrInterpolate(_ctx.$t("homePageSkillsOther"))}</h2><div class="other-skills" data-v-ba70d385><div class="skills" data-v-ba70d385>`);
  _push(ssrRenderComponent(_component_IconTitle, {
    class: "iconTitle",
    color: "#a98ff3",
    icon: "software_engineering",
    alt: "Software engineering",
    title: "Software engineering"
  }, null, _parent));
  _push(`<!--[-->`);
  ssrRenderList($data.softwareSkills, (skill) => {
    _push(ssrRenderComponent(_component_SkillSimple, {
      class: "skillSimple",
      key: skill.id,
      skill
    }, null, _parent));
  });
  _push(`<!--]--></div><div class="skills" data-v-ba70d385>`);
  _push(ssrRenderComponent(_component_IconTitle, {
    class: "iconTitle",
    color: "#FF4E4E",
    icon: "mobile",
    alt: "Mobile",
    title: "Mobile"
  }, null, _parent));
  _push(`<!--[-->`);
  ssrRenderList($data.mobileSkills, (skill) => {
    _push(ssrRenderComponent(_component_SkillSimple, {
      class: "skillSimple",
      key: skill.id,
      skill
    }, null, _parent));
  });
  _push(`<!--]--></div><div class="skills" data-v-ba70d385>`);
  _push(ssrRenderComponent(_component_IconTitle, {
    class: "iconTitle",
    color: "#E5D64C",
    icon: "others",
    alt: "Others",
    title: "Others"
  }, null, _parent));
  _push(`<!--[-->`);
  ssrRenderList($data.othersSkills, (skill) => {
    _push(ssrRenderComponent(_component_SkillSimple, {
      class: "skillSimple",
      key: skill.id,
      skill
    }, null, _parent));
  });
  _push(`<!--]--></div><div class="skills" data-v-ba70d385>`);
  _push(ssrRenderComponent(_component_IconTitle, {
    class: "iconTitle",
    color: "#279BDD",
    icon: "language",
    alt: "languages",
    title: "languages"
  }, null, _parent));
  _push(`<div class="languages lanMargin" data-v-ba70d385><h4 data-v-ba70d385>. Persian</h4><p data-v-ba70d385>(Native)</p></div><div class="languages" data-v-ba70d385><h4 data-v-ba70d385>. English</h4><p data-v-ba70d385>(B2)</p></div></div></div></div>`);
  _push(ssrRenderComponent(_component_TitleBackground, {
    class: "titleBackground defualt-margin",
    title: "skills"
  }, null, _parent));
  _push(`</div>`);
}
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/pages/home/Skills.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
const Skills = /* @__PURE__ */ _export_sfc(_sfc_main$4, [["ssrRender", _sfc_ssrRender$4], ["__scopeId", "data-v-ba70d385"]]);
const _sfc_main$3 = {
  name: "TextOnlyButton",
  props: {
    text: {
      type: String,
      required: true,
      default: "Button"
    },
    link: {
      type: String,
      required: true
    }
  }
};
function _sfc_ssrRender$3(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_nuxt_link = __nuxt_component_0;
  _push(ssrRenderComponent(_component_nuxt_link, mergeProps({
    class: "textOnlyButton",
    to: $props.link
  }, _attrs), {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`${ssrInterpolate($props.text)}`);
      } else {
        return [
          createTextVNode(toDisplayString($props.text), 1)
        ];
      }
    }),
    _: 1
  }, _parent));
}
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/widgets/TextOnlyButton.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const TextOnlyButton = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["ssrRender", _sfc_ssrRender$3], ["__scopeId", "data-v-5325d82a"]]);
const _sfc_main$2 = {
  name: "Projects",
  components: {
    ProjectCard,
    TitleBackground,
    TextOnlyButton
  },
  data() {
    return {
      projects: projects.slice(0, 6)
    };
  },
  computed: {
    activeLang() {
      return this.$i18n.locale;
    }
  },
  mixins: [changeAlign]
};
function _sfc_ssrRender$2(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_ProjectCard = resolveComponent("ProjectCard");
  const _component_TextOnlyButton = resolveComponent("TextOnlyButton");
  const _component_TitleBackground = resolveComponent("TitleBackground");
  _push(`<div${ssrRenderAttrs(mergeProps({
    class: "projects-container",
    id: "homeProjects"
  }, _attrs))} data-v-1806e43c><h2 style="${ssrRenderStyle({ textAlign: `${_ctx.changeAlign($options.activeLang)}` })}" data-v-1806e43c>${ssrInterpolate(_ctx.$t("projects"))}</h2><div class="projects" data-v-1806e43c><div class="projects-cards" data-v-1806e43c><!--[-->`);
  ssrRenderList($data.projects, (project) => {
    _push(ssrRenderComponent(_component_ProjectCard, {
      class: "projectCard",
      key: project.id,
      project
    }, null, _parent));
  });
  _push(`<!--]--></div><div data-v-1806e43c>`);
  _push(ssrRenderComponent(_component_TextOnlyButton, {
    text: _ctx.$t("viewAll"),
    link: "/projects",
    class: "textOnlyButton"
  }, null, _parent));
  _push(`</div></div>`);
  _push(ssrRenderComponent(_component_TitleBackground, {
    title: "Projects",
    class: "titleBackground"
  }, null, _parent));
  _push(`</div>`);
}
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/pages/home/Projects.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const Projects = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["ssrRender", _sfc_ssrRender$2], ["__scopeId", "data-v-1806e43c"]]);
const _sfc_main$1 = {
  name: "Blog",
  components: {
    BlogCard,
    TitleBackground,
    TextOnlyButton
  },
  data() {
    return {
      blogs: blogs.slice(0, 3)
    };
  },
  computed: {
    activeLang() {
      return this.$i18n.locale;
    }
  },
  mixins: [changeAlign]
};
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_BlogCard = resolveComponent("BlogCard");
  const _component_TextOnlyButton = resolveComponent("TextOnlyButton");
  const _component_TitleBackground = resolveComponent("TitleBackground");
  _push(`<div${ssrRenderAttrs(mergeProps({
    class: "blog-container",
    id: "homeBlog"
  }, _attrs))} data-v-509e6530><h2 style="${ssrRenderStyle({ textAlign: `${_ctx.changeAlign($options.activeLang)}` })}" data-v-509e6530>${ssrInterpolate(_ctx.$t("blog"))}</h2><div class="blog" data-v-509e6530><div class="blog-cards" data-v-509e6530><!--[-->`);
  ssrRenderList($data.blogs, (blog) => {
    _push(ssrRenderComponent(_component_BlogCard, {
      class: "blogCard",
      key: blog.id,
      blog
    }, null, _parent));
  });
  _push(`<!--]--></div><div data-v-509e6530>`);
  _push(ssrRenderComponent(_component_TextOnlyButton, {
    text: _ctx.$t("viewAll"),
    link: "/blog",
    class: "textOnlyButton"
  }, null, _parent));
  _push(`</div></div>`);
  _push(ssrRenderComponent(_component_TitleBackground, {
    title: "Blog",
    class: "titleBackground"
  }, null, _parent));
  _push(`</div>`);
}
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/pages/home/Blog.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const Blog = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender$1], ["__scopeId", "data-v-509e6530"]]);
const _sfc_main = {
  setup() {
    const route = useRoute();
    const canonicalUrl = computed(() => "https://yrlp.ir" + route.path);
    useHead({
      title: "Yousef Roshandel | Front-End Developer & UI/UX Designer",
      meta: [
        { name: "description", content: "Yousef Roshandel is a passionate Front-End Developer and UI/UX Designer creating modern, user-friendly websites and digital experiences." },
        { property: "og:title", content: "Yousef Roshandel | Front-End Developer & UI/UX Designer" },
        { property: "og:description", content: "Yousef Roshandel is a passionate Front-End Developer and UI/UX Designer creating modern, user-friendly websites and digital experiences." },
        { property: "og:url", content: () => canonicalUrl.value }
      ],
      link: [
        { rel: "canonical", href: () => canonicalUrl.value }
      ]
    });
  },
  components: {
    HeroSection,
    WaveBackground,
    AboutMe,
    Education,
    Experience,
    Skills,
    Projects,
    Blog
  },
  mounted() {
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_HeroSection = resolveComponent("HeroSection");
  const _component_WaveBackground = resolveComponent("WaveBackground");
  const _component_AboutMe = resolveComponent("AboutMe");
  const _component_Education = resolveComponent("Education");
  const _component_Experience = resolveComponent("Experience");
  const _component_Skills = resolveComponent("Skills");
  const _component_Projects = resolveComponent("Projects");
  const _component_Blog = resolveComponent("Blog");
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "index-container" }, _attrs))} data-v-75faa564>`);
  _push(ssrRenderComponent(_component_HeroSection, { class: "heroSection" }, null, _parent));
  _push(`<div class="aboutMe-container" data-v-75faa564>`);
  _push(ssrRenderComponent(_component_WaveBackground, { class: "waveBackground" }, null, _parent));
  _push(ssrRenderComponent(_component_AboutMe, { class: "defualt-margin" }, null, _parent));
  _push(`</div><div class="defualt-margin education-container" data-v-75faa564>`);
  _push(ssrRenderComponent(_component_Education, null, null, _parent));
  _push(`</div><div class="defualt-margin experience-container" data-v-75faa564>`);
  _push(ssrRenderComponent(_component_Experience, null, null, _parent));
  _push(`</div><div class="skills-container" data-v-75faa564>`);
  _push(ssrRenderComponent(_component_Skills, null, null, _parent));
  _push(`</div><div class="defualt-margin projects-container" data-v-75faa564>`);
  _push(ssrRenderComponent(_component_Projects, null, null, _parent));
  _push(`</div><div class="defualt-margin blog-container" data-v-75faa564>`);
  _push(ssrRenderComponent(_component_Blog, null, null, _parent));
  _push(`</div></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__scopeId", "data-v-75faa564"]]);

export { index as default };
//# sourceMappingURL=index-DpsR3fzx.mjs.map
