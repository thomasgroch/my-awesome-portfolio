import VeeValidate, {Validator} from 'vee-validate'
import locale from './vee-validate-locales/pt_BR'
// import VModal from 'vue-js-modal'

export default ({
					Vue, // the version of Vue being used in the VuePress app
					options, // the options for the root Vue instance
					router, // the router instance for the app
					siteData // site metadata
				}) => {
	// ...apply enhancements to the app
	Vue.use(VeeValidate)
	// Vue.use(VModal, {
	// 	dynamic: true,
	// 	injectModalsContainer: true,
	// 	dynamicDefaults: { clickToClose: false }
	// })
	// Vue.mixin({
	// 	localize (localeName) {
	// 		// asynchronously load the locale file then localize the validator with it.
	// 		import(`./vee-validate-locales/${localeName}`).then(locale => {
	// 			Validator.localize(localeName, locale);
	// 		});
	// 	}
	// })
	Validator.localize('pt_BR', locale)
}
