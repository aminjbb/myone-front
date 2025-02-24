import AOS from 'aos';
import 'aos/dist/aos.css';

export default defineNuxtPlugin((nuxtApp) => {
    nuxtApp.hook('app:mounted', () => {
        AOS.init({
            duration: 800, // مدت زمان انیمیشن
            once: true, // آیا انیمیشن فقط یک بار اجرا شود؟
        });
    });
});