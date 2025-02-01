import {
    createVuetify
} from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'

const myTheme = {
    colors: {
        PrimaryMain:'#1F1A55',
        Primarydarken3:'#0C0A22',
        Graylighten3:'#ADAFB3',
        Graylighten5:'#EBEBEB',
    },
}

export default defineNuxtPlugin(nuxtApp => {
    const vuetify = createVuetify({
        ssr: true,
        components,
        directives,
        rtl: false,
        theme: {
            defaultTheme: 'myTheme',
            themes: {
                myTheme,
            },
        },
    })

    nuxtApp.vueApp.use(vuetify)
})