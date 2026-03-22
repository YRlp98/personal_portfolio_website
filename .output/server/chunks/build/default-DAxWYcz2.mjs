import { _ as __nuxt_component_0$1 } from './nuxt-link-BvufrBv4.mjs';
import { mergeProps, resolveComponent, withCtx, createTextVNode, toDisplayString, resolveDirective, ref, computed, unref, createVNode, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate, ssrRenderStyle, ssrRenderAttr, ssrGetDirectiveProps, ssrRenderClass, ssrRenderList } from 'vue/server-renderer';
import { p as publicAssetsURL } from '../nitro/nitro.mjs';
import { _ as _export_sfc, l as __nuxt_component_2, i as useI18n, k as useSwitchLocalePath } from './server.mjs';
import { c as changeAlign, T as TitleBackground, S as SocialNetwork } from './changeAlign-BBn-GU6S.mjs';
import { c as changeDirection } from './changeDirection-BOXBeGmC.mjs';
import 'node:http';
import 'node:https';
import 'node:events';
import 'node:buffer';
import 'node:fs';
import 'node:path';
import 'node:crypto';
import 'consola';
import 'node:url';
import 'vue-router';
import '../routes/renderer.mjs';
import 'vue-bundle-renderer/runtime';
import 'unhead/server';
import 'devalue';
import 'unhead/utils';
import 'unhead/plugins';

const _imports_0$1 = publicAssetsURL("/images/icons/dark.svg");
const _imports_1 = publicAssetsURL("/images/icons/light.svg");
const _sfc_main$4 = {
  __name: "SettingsMenu",
  __ssrInlineRender: true,
  emits: ["close"],
  setup(__props, { emit: __emit }) {
    const { locale, locales } = useI18n();
    const switchLocalePath = useSwitchLocalePath();
    const isDark = ref(true);
    const availableLocales = computed(() => locales.value.filter((l) => l.code !== locale.value));
    return (_ctx, _push, _parent, _attrs) => {
      const _component_nuxt_link = __nuxt_component_0$1;
      _push(`<div${ssrRenderAttrs(mergeProps({
        class: "settings-menu-container",
        ref: "menuRef"
      }, _attrs))} data-v-d44891e1><div class="menu-theme" data-v-d44891e1><p data-v-d44891e1>Theme</p><ul class="menu-bar" data-v-d44891e1><li data-v-d44891e1><a class="${ssrRenderClass({ active: unref(isDark) })}" href="#" data-v-d44891e1><img${ssrRenderAttr("src", _imports_0$1)} alt="dark mode" data-v-d44891e1> Dark Mode </a></li><li data-v-d44891e1><a class="${ssrRenderClass({ active: !unref(isDark) })}" href="#" data-v-d44891e1><img${ssrRenderAttr("src", _imports_1)} alt="light mode" data-v-d44891e1> Light Mode </a></li></ul></div><div class="menu-language" data-v-d44891e1><p data-v-d44891e1>Language</p><ul class="menu-bar" data-v-d44891e1><li data-v-d44891e1><!--[-->`);
      ssrRenderList(unref(availableLocales), (locale2) => {
        _push(ssrRenderComponent(_component_nuxt_link, {
          key: locale2.code,
          to: unref(switchLocalePath)(locale2.code),
          onClick: ($event) => _ctx.$emit("close")
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<img${ssrRenderAttr("src", `/images/icons/${locale2.code}.svg`)}${ssrRenderAttr("alt", locale2)} data-v-d44891e1${_scopeId}> ${ssrInterpolate(locale2.name)}`);
            } else {
              return [
                createVNode("img", {
                  src: `/images/icons/${locale2.code}.svg`,
                  alt: locale2
                }, null, 8, ["src", "alt"]),
                createTextVNode(" " + toDisplayString(locale2.name), 1)
              ];
            }
          }),
          _: 2
        }, _parent));
      });
      _push(`<!--]--></li></ul></div></div>`);
    };
  }
};
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/widgets/SettingsMenu.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
const SettingsMenu = /* @__PURE__ */ _export_sfc(_sfc_main$4, [["__scopeId", "data-v-d44891e1"]]);
const _sfc_main$3 = {
  name: "NavbarMobile",
  components: {
    SettingsMenu
  },
  methods: {
    goto(id) {
      this.$router.push(id);
    }
  }
};
function _sfc_ssrRender$3(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_nuxt_link = __nuxt_component_0$1;
  const _component_SettingsMenu = resolveComponent("SettingsMenu");
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "hamburger-menu" }, _attrs))} data-v-c7586248><input id="menu__toggle" type="checkbox" data-v-c7586248><label class="menu__btn" for="menu__toggle" data-v-c7586248><span data-v-c7586248></span></label><ul class="menu__box" data-v-c7586248><li data-v-c7586248>`);
  _push(ssrRenderComponent(_component_nuxt_link, {
    class: "menu__item",
    to: _ctx.$localePath("/")
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`${ssrInterpolate(_ctx.$t("home"))}`);
      } else {
        return [
          createTextVNode(toDisplayString(_ctx.$t("home")), 1)
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</li><li data-v-c7586248><span class="menu__item" data-v-c7586248>${ssrInterpolate(_ctx.$t("aboutMe"))}</span></li><li data-v-c7586248><span class="menu__item" data-v-c7586248>${ssrInterpolate(_ctx.$t("skills"))}</span></li><li data-v-c7586248>`);
  _push(ssrRenderComponent(_component_nuxt_link, {
    class: "menu__item",
    to: _ctx.$localePath("/projects")
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`${ssrInterpolate(_ctx.$t("projects"))}`);
      } else {
        return [
          createTextVNode(toDisplayString(_ctx.$t("projects")), 1)
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</li><li data-v-c7586248>`);
  _push(ssrRenderComponent(_component_nuxt_link, {
    class: "menu__item",
    to: _ctx.$localePath("/blog")
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`\u200C${ssrInterpolate(_ctx.$t("blog"))}`);
      } else {
        return [
          createTextVNode("\u200C" + toDisplayString(_ctx.$t("blog")), 1)
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</li><div class="settings-menu" data-v-c7586248>`);
  _push(ssrRenderComponent(_component_SettingsMenu, { class: "settingsMenu" }, null, _parent));
  _push(`</div></ul></div>`);
}
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/NavbarMobile.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const __nuxt_component_0 = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["ssrRender", _sfc_ssrRender$3], ["__scopeId", "data-v-c7586248"]]);
const _imports_0 = publicAssetsURL("/images/icons/more.svg");
const _sfc_main$2 = {
  name: "Navbar",
  components: {
    SettingsMenu
  },
  data() {
    return {
      isOpen: false,
      isScrolled: false
    };
  },
  methods: {
    goto(id) {
      this.$router.push(id);
    },
    handleScroll() {
      this.isScrolled = (void 0).scrollY > 10;
    }
  },
  mounted() {
  },
  beforeUnmount() {
  }
};
function _sfc_ssrRender$2(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_SettingsMenu = resolveComponent("SettingsMenu");
  const _component_nuxt_link = __nuxt_component_0$1;
  const _directive_click_outside = resolveDirective("click-outside");
  _push(`<nav${ssrRenderAttrs(mergeProps({
    class: ["navbar-container", { "is-scrolled": $data.isScrolled }]
  }, _attrs))} data-v-206b7705><div class="navbar defualt-margin" data-v-206b7705><span class="navbar-more" data-v-206b7705><img${ssrRenderAttr("src", _imports_0)} alt="More icon" data-v-206b7705></span><template>`);
  if ($data.isOpen) {
    _push(ssrRenderComponent(_component_SettingsMenu, mergeProps({
      class: "settingsMenu",
      onClose: ($event) => $data.isOpen = false,
      onClick: () => {
      }
    }, ssrGetDirectiveProps(_ctx, _directive_click_outside, () => $data.isOpen = false)), null, _parent));
  } else {
    _push(`<!---->`);
  }
  _push(`</template><ul class="navbar-items" data-v-206b7705><li data-v-206b7705>`);
  _push(ssrRenderComponent(_component_nuxt_link, {
    class: "item",
    to: _ctx.$localePath("/")
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`${ssrInterpolate(_ctx.$t("home"))}`);
      } else {
        return [
          createTextVNode(toDisplayString(_ctx.$t("home")), 1)
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</li><li data-v-206b7705><span class="item" data-v-206b7705>${ssrInterpolate(_ctx.$t("aboutMe"))}</span></li><li data-v-206b7705><span class="item" data-v-206b7705>${ssrInterpolate(_ctx.$t("skills"))}</span></li><li data-v-206b7705>`);
  _push(ssrRenderComponent(_component_nuxt_link, {
    class: "item",
    to: _ctx.$localePath("/projects")
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`${ssrInterpolate(_ctx.$t("projects"))}`);
      } else {
        return [
          createTextVNode(toDisplayString(_ctx.$t("projects")), 1)
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</li><li data-v-206b7705>`);
  _push(ssrRenderComponent(_component_nuxt_link, {
    class: "item",
    to: _ctx.$localePath("/blog")
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`${ssrInterpolate(_ctx.$t("blog"))}`);
      } else {
        return [
          createTextVNode(toDisplayString(_ctx.$t("blog")), 1)
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</li></ul></div></nav>`);
}
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Navbar.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const __nuxt_component_1 = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["ssrRender", _sfc_ssrRender$2], ["__scopeId", "data-v-206b7705"]]);
const _sfc_main$1 = {
  name: "Footer",
  components: {
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
  methods: {
    goto(id) {
      this.$router.push(id);
    }
  }
};
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_SocialNetwork = resolveComponent("SocialNetwork");
  const _component_TitleBackground = resolveComponent("TitleBackground");
  const _component_nuxt_link = __nuxt_component_0$1;
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "footer-container" }, _attrs))} data-v-444de754><div class="socialNetwork-container" data-v-444de754><div class="socialNetwork defualt-margin" data-v-444de754><h2 data-v-444de754>${ssrInterpolate(_ctx.$t("homePageFollowMeSN"))}</h2>`);
  _push(ssrRenderComponent(_component_SocialNetwork, { class: "socialNetwork" }, null, _parent));
  _push(`</div>`);
  _push(ssrRenderComponent(_component_TitleBackground, {
    title: "social network",
    class: "titleBackground defualt-margin"
  }, null, _parent));
  _push(`</div><div class="footer defualt-margin" data-v-444de754><ul style="${ssrRenderStyle({ direction: `${_ctx.changeDirection($options.activeLang)}` })}" data-v-444de754><li data-v-444de754>`);
  _push(ssrRenderComponent(_component_nuxt_link, {
    class: "item",
    to: _ctx.$localePath("/")
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`${ssrInterpolate(_ctx.$t("home"))}`);
      } else {
        return [
          createTextVNode(toDisplayString(_ctx.$t("home")), 1)
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</li><li data-v-444de754><span class="item" data-v-444de754>${ssrInterpolate(_ctx.$t("aboutMe"))}</span></li><li data-v-444de754><span class="item" data-v-444de754>${ssrInterpolate(_ctx.$t("skills"))}</span></li><li data-v-444de754>`);
  _push(ssrRenderComponent(_component_nuxt_link, {
    class: "item",
    to: _ctx.$localePath("/projects")
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`${ssrInterpolate(_ctx.$t("projects"))}`);
      } else {
        return [
          createTextVNode(toDisplayString(_ctx.$t("projects")), 1)
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</li><li data-v-444de754>`);
  _push(ssrRenderComponent(_component_nuxt_link, {
    class: "item",
    to: _ctx.$localePath("/blog")
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`${ssrInterpolate(_ctx.$t("blog"))}`);
      } else {
        return [
          createTextVNode(toDisplayString(_ctx.$t("blog")), 1)
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</li></ul><p style="${ssrRenderStyle({ textAlign: `${_ctx.changeAlign($options.activeLang)}` })}" data-v-444de754>${ssrInterpolate(_ctx.$t("footerCopyright"))}</p></div></div>`);
}
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Footer.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_3 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender$1], ["__scopeId", "data-v-444de754"]]);
const _sfc_main = {
  components: {
    NavbarMobile: __nuxt_component_0,
    Navbar: __nuxt_component_1,
    Footer: __nuxt_component_3
  },
  data() {
    return {
      activeLocale: "fa"
    };
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_NavbarMobile = __nuxt_component_0;
  const _component_Navbar = __nuxt_component_1;
  const _component_NuxtPage = __nuxt_component_2;
  const _component_Footer = __nuxt_component_3;
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "defualt-container" }, _attrs))}>`);
  _push(ssrRenderComponent(_component_NavbarMobile, null, null, _parent));
  _push(ssrRenderComponent(_component_Navbar, null, null, _parent));
  _push(ssrRenderComponent(_component_NuxtPage, null, null, _parent));
  _push(ssrRenderComponent(_component_Footer, null, null, _parent));
  _push(`</div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("layouts/default.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const _default = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { _default as default };
//# sourceMappingURL=default-DAxWYcz2.mjs.map
