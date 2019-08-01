<template>
    <main class="mt-5 flex flex-col items-center">
        <div v-if="modal.visible" @click.self="modal.visible = false"
             class="absolute bg-white rounded shadow p-8 m-4 max-h-full text-center">
            <div class="mb-4">
                <h1>Olá {{ form.nome }}</h1>
            </div>
            <div class="mb-8">
                <div class="bg-green-lightest border-l-4 border-green p-4 mb-4" role="alert">
                    <p class="text-green-dark font-bold">Sua mensagem foi enviada com sucesso.</p>
                </div>
                <p>Obrigado pelo seu interesse.</p>
            </div>
            <div class="flex justify-center">
                <button class="bg-transparent shadow hover:bg-green text-green-dark font-semibold hover:text-white px-4 py-2 border border-green hover:border-transparent rounded"
                        @click.self="modal.visible = false">Fechar</button>
            </div>
        </div>

        <div class="flex mb-4 flex-wrap justify-center">
<!--            <div v-if="modal.visible" @click.self="modal.visible = false"-->
<!--                 class="h-screen w-full absolute flex items-center justify-center bg-modal rounded-lg shadow-lg p-10">-->
<!--            </div>-->

            <form class="w-full max-w-md font-nunito"
                  :action="formAction"
                  @submit.prevent="validateBeforeSubmit"
                  ref="form"
                  name="contact"
                  method="post"
                  data-netlify="true"
                  data-netlify-honeypot="bot-field"
                  netlify>
                <input type="hidden" name="form-name" value="contact"/>
                <div class="flex flex-wrap -mx-3 mb-2">
                    <div class="w-full md:w-full px-3 mb-3 md:mb-0">

                        <label class="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2"
                               for="grid-nome">Nome</label>
                        <input class="appearance-none block w-full bg-grey-lighter text-grey-darker border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-grey"
                               :class="{'input': true, 'border-red': errors.has('nome') }"
                               name="nome"
                               v-model="form.nome"
                               v-validate="'required'"
                               id="grid-nome"
                               type="text">
                        <p class="text-red text-xs italic"
                           v-if="errors.has('nome')">{{ errors.first('nome') }}</p>

                    </div>
                </div>


                <div class="flex flex-wrap -mx-3 mb-2"
                     v-show="hasFilled('nome')">
                    <div class="w-full px-3 mb-2 md:mb-0"
                         :class="{'input': true, 'md:w-1/2': hasFilled('email') }">

                        <label class="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2"
                               for="grid-email">Endereço de e-mail</label>
                        <div class="relative">
                            <input class="appearance-none block w-full bg-grey-lighter text-grey-darker border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-grey"
                                   :class="{'input': true, 'border-red': errors.has('email') }"
                                   name="email"
                                   v-model="form.email"
                                   v-validate="'required|email'"
                                   id="grid-email"
                                   type="text">
                            <p class="text-red text-xs italic"
                               v-if="errors.has('email')">{{ errors.first('email') }}</p>
                        </div>

                    </div>

                    <div class="w-full md:w-1/2 px-3 mb-3 md:mb-0"
                         v-show="hasFilled('email')">

                        <label class="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2"
                               for="grid-telefone">Telefone</label>
                        <div class="relative">
                            <input class="appearance-none block w-full bg-grey-lighter text-grey-darker border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-grey"
                                   :class="{'input': true, 'border-red': errors.has('telefone') }"
                                   name="telefone"
                                   v-model="form.telefone"
                                   v-validate="'required'"
                                   id="grid-telefone"
                                   type="text">
                            <p class="text-red text-xs italic"
                               v-if="errors.has('telefone')">{{ errors.first('telefone') }}</p>
                        </div>

                    </div>
                </div>


                <div class="flex flex-wrap -mx-3 mb-3">
                    <div class="w-full px-3">

                        <label class="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2"
                               for="grid-mensagem">Como posso ajudar?</label>
                        <textarea
                                class="appearance-none focus:shadow block w-full bg-grey-lighter text-grey-darker border rounded pt-3 pb-10 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-grey"
                                :class="{'input': true, 'border-red': errors.has('mensagem') }"
                                name="mensagem"
                                v-validate="'required|min:50'"
                                v-model="form.mensagem"
                                @input="textareaResize" ref="textarea" rows="3"
                                id="grid-mensagem"/>
                        <p class="text-red text-xs italic"
                           v-if="errors.has('mensagem')">{{ errors.first('mensagem') }}</p>
                        <p class="text-grey-dark text-xs italic">Detalhe o quanto você quiser. Por favor, não inclua
                            informações confidenciais ou sensíveis em sua mensagem.</p>

                    </div>
                </div>

                <div class="flex flex-wrap -mx-3 mb-2"
                     v-show="hasFilled('mensagem')">
                    <div class="w-full px-3 mb-3 md:mb-0"
                         :class="{'input': true, 'md:w-1/2': hasFilled('estado') }">

                        <label class="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2"
                               for="grid-estado">Estado</label>
                        <div class="relative">
                            <Estados @onEstadoSelected="changeEstado"
                                     :class="{'input': true, 'border-red': errors.has('estado') }"
                                     name="estado"
                                     v-validate="'required'"
                                     v-model="form.estado"
                                     id="grid-estado"/>
                            <p class="text-red text-xs italic"
                               v-if="errors.has('estado')">{{ errors.first('estado') }}</p>
                        </div>

                    </div>
                    <div class="w-full md:w-1/2 px-3 mb-3 md:mb-0"
                         v-if="hasFilled('estado')">

                        <label class="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2"
                               for="grid-cidade">Cidade</label>
                        <p class="text-red text-xs italic"
                           v-if="errors.has('estado')">{{ errors.first('estado') }}</p>
                        <div class="relative">
                            <Cidades
                                    :class="{'input': true, 'border-red': errors.has('cidade') }"
                                    name="cidade"
                                    v-validate="'required'"
                                    v-model="form.cidade"
                                    :estado="form.estado"
                                    @onCidadeSelected="changeCidade"
                                    id="grid-cidade"/>
                            <p class="text-red text-xs italic"
                               v-if="errors.has('cidade')">{{ errors.first('cidade') }}</p>
                        </div>

                    </div>
                </div>

                <div class="w-full px-3 mb-3 md:mb-0">

                    <div v-if="this.status === 'error'"
                         class="bg-red-lightest border border-red-light text-red-dark pl-4 pr-8 py-3 rounded relative"
                         role="alert">
                        <strong class="font-bold">Brbrbr!</strong>
                        <span class="block sm:inline">Ops. Algo deu errado.</span>
                        <span class="absolute pin-t pin-b pin-r pr-2 py-3">
                                                    <svg class="h-6 w-6 text-red" role="button"
                                                         xmlns="http://www.w3.org/2000/svg"
                                                         viewBox="0 0 20 20">
                                                        <title>Fechar</title>
                                                        <path d="M14.348 14.849a1.2 1.2 0 0 1-1.697 0L10 11.819l-2.651 3.029a1.2 1.2 0 1 1-1.697-1.697l2.758-3.15-2.759-3.152a1.2 1.2 0 1 1 1.697-1.697L10 8.183l2.651-3.031a1.2 1.2 0 1 1 1.697 1.697l-2.758 3.152 2.758 3.15a1.2 1.2 0 0 1 0 1.698z"/></svg>
                                                  </span>
                    </div>

                    <div class="flex items-center justify-center px-3 my-6 md:mb-0 items-center">
                        <button
                                class="bg-transparent shadow hover:bg-green text-green-dark font-semibold hover:text-white py-2 px-4 border border-green hover:border-transparent rounded"
                                type="submit">Enviar
                        </button>
                    </div>
                </div>
            </form>
        </div>
    </main>
</template>

<script>
	import VueTextareaAutosize from 'vue-textarea-autosize'
	import Estados from './Estados'
	import nprogress from 'nprogress'

	export default {
		name: 'Contato',
		components: {VueTextareaAutosize, Estados},
		props: {},
		data() {
			return {
				modal: {
					visible: false
				},
				form: {
					nome: null,
					email: null,
					telefone: null,
					estado: null,
					cidade: null,
					mensagem: ''
				},
				status: 'idle'
			}
		},
		computed: {
			formAction() {
				return (process.env.NODE_ENV === 'production') ? '/.netlify/functions/contact' : 'http://localhost:9000/.netlify/functions/contact'
			}
		},
		methods: {
			async validateBeforeSubmit() {
				let result = false
				let response
				try {
					// TODO: Add UX like this
					//  https://forestry-community.slack.com/join/shared_invite/enQtNDAxMTU5NzcwMzA3LWUyYTk3NDY2ZDNiMjFhNmVlMjExM2FjYzFhNjJhNjU2NTc2ODVjZTdlYjJiODhhZDgwYTVhYjY0ZGU3ZWFmYzM
					nprogress.start()
					this.status = 'loading'

					// Validate
					result = await this.$validator.validateAll()
					if (!result) {
						this.status = 'error'
						throw new Error('Form is not valid')
						return
					}

					response = await fetch(this.formAction, {
						method: 'POST',
						body: JSON.stringify(this.$data.form)
					})
					if (Number(response.status) !== 200) {
						throw new Error(`Status: ${response.status}. Error: ${response.body.error}.`)
						return
					}
				} catch (error) {
					console.log(error)
					this.status = 'error'
					nprogress.done()
					return
				}
				nprogress.done()
				this.status = 'done'
				this.modal.visible = true
				return true
			},

			hasFilled(field) {
				return (!this.errors.has(field) && this.form[field])
			},
			textareaResize() {
				this.$refs.textarea.style.minHeight = this.$refs.textarea.scrollHeight + 'px'
			},
			changeEstado(estado) {
				this.form.estado = estado
			},
			changeCidade(cidade) {
				this.form.cidade = cidade
			},
			beforeModalClose(event) {
				this.status = 'dismiss'
			}
		},
		mounted() {
			this.$refs.textarea.style.minHeight = this.$refs.textarea.scrollHeight + 'px'
		}
	}
</script>
<style lang="stylus">
    //#app :not(div.v--modal-overlay)
    //    filter: blur(5px)
</style>
