import VeeValidate, {Validator} from 'vee-validate'
import locale from './vee-validate-locales/pt_BR'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { far } from '@fortawesome/free-regular-svg-icons'
import { fab } from '@fortawesome/free-brands-svg-icons'

library.add(
	fas,
	far,
	fab,
)

export default ({
					Vue, // the version of Vue being used in the VuePress app
					options, // the options for the root Vue instance
					router, // the router instance for the app
					siteData // site metadata
				}) => {
	// ...apply enhancements to the app
	Vue.component('font-awesome-icon', FontAwesomeIcon)
	Vue.use(VeeValidate)
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
