import { http } from '@setaria/setaria-ts'
import { useBaseStore } from '@setaria-business-framework/store'
// // 初始化国际化内容
// function initI18nInfo() {
//     return new Promise(async (resolve) => {
//       // 初始化I18N内容
//       const i18n = Setaria.getI18n();
//       i18n.locale = getCurrnetLang();

//       // resolve();
//       const storageKey = `I18N-${i18n.locale}`;

//       const info = sessionStorage.getItem(storageKey);
//       if (info) {
//         i18n.mergeLocaleMessage(i18n.locale, JSON.parse(info));
//         resolve();
//         return;
//       }

//       let language = 'en_value';

//       if (i18n.locale === 'zh-CN') {
//         language = 'zh_value';
//       } else if (i18n.locale === 'en-US') {
//         language = 'en_value';
//       } else if (i18n.locale === 'de-DE') {
//         language = 'de_value';
//       }

//       Setaria.getHttp()
//         .config.post(`/sysi18n/searchSys18nList?language=${language}`, {})
//         .then((res) => {
//           if (res.data?.length) {
//             const obj = {};
//             res?.data?.forEach((item) => {
//               obj[item.propertiedKey] = item.value;
//             });
//             i18n.mergeLocaleMessage(i18n.locale, obj);
//             sessionStorage.setItem(storageKey, JSON.stringify(obj));
//           }

//           resolve();
//         });
//     });
//   }

export const setupAuth = async () => {
  const userRes = await http.admin.post('/getAuthzInfo')

  const baseStore = useBaseStore()
  baseStore.setUserInfo(userRes.data)
  baseStore.setMenuInfo(userRes.data.functions)
}
