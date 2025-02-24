import {
    createVuetify
} from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'

const myTheme = {
    colors: {
        TextMain:'#232934',
        TextDarken2:'#1F2028',
        PrimaryMain:'#1F1A55',
        Primarydarken3:'#0C0A22',
        Primarylighten2:'#4C4877',
        SecondaryDarken1:'#336170',
        Graylighten1:'#5C5E68',
        Graylighten2:'#85868E',
        Graydarken1:'#292B35',
        Graylighten3:'#ADAFB3',
        Graylighten4:'#D6D7D9',
        Graylighten5:'#EBEBEB',
        Nuetralmain:'#CFD7C7',
        Nuetral2:'#7C8177',
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