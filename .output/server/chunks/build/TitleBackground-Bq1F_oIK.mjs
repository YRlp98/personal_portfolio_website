import { mergeProps, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrInterpolate, ssrRenderAttr } from 'vue/server-renderer';
import { p as publicAssetsURL } from '../nitro/nitro.mjs';
import { _ as _export_sfc } from './server.mjs';

const _imports_0 = publicAssetsURL("/images/icons/linkedin.svg");
const _imports_1 = publicAssetsURL("/images/icons/github.svg");
const _imports_2 = publicAssetsURL("/images/icons/dribbble.svg");
const _imports_3 = publicAssetsURL("/images/icons/behance.svg");
const _imports_4 = publicAssetsURL("/images/icons/x.svg");
const _sfc_main$1 = {
  name: "SocialNetwork"
};
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "socialNetwork-container" }, _attrs))} data-v-ca3b640e><div class="items" data-v-ca3b640e><a href="https://www.linkedin.com/in/yrlp98/" target="_blank" data-v-ca3b640e><img${ssrRenderAttr("src", _imports_0)} alt="LinkedIn" data-v-ca3b640e></a><a href="https://github.com/YRlp98" target="_blank" data-v-ca3b640e><img${ssrRenderAttr("src", _imports_1)} alt="GitHub" data-v-ca3b640e></a><a href="https://dribbble.com/YRlp98" target="_blank" data-v-ca3b640e><img${ssrRenderAttr("src", _imports_2)} alt="Dribble" data-v-ca3b640e></a><a href="https://www.behance.net/yrlp98" target="_blank" data-v-ca3b640e><img${ssrRenderAttr("src", _imports_3)} alt="Behance" data-v-ca3b640e></a><a href="https://x.com/YRlp98" target="_blank" data-v-ca3b640e><img${ssrRenderAttr("src", _imports_4)} alt="X" data-v-ca3b640e></a></div></div>`);
}
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/widgets/SocialNetwork.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const SocialNetwork = /* @__PURE__ */ Object.assign(_export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender$1], ["__scopeId", "data-v-ca3b640e"]]), { __name: "WidgetsSocialNetwork" });
const _sfc_main = {
  name: "TitleBackground",
  props: {
    title: {
      type: String,
      required: true
    }
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "titleBackground-container" }, _attrs))} data-v-854c4125><h2 data-v-854c4125>&lt;${ssrInterpolate($props.title)}&gt;</h2></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/backgrounds/TitleBackground.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const TitleBackground = /* @__PURE__ */ Object.assign(_export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__scopeId", "data-v-854c4125"]]), { __name: "BackgroundsTitleBackground" });

export { SocialNetwork as S, TitleBackground as T };
//# sourceMappingURL=TitleBackground-Bq1F_oIK.mjs.map
