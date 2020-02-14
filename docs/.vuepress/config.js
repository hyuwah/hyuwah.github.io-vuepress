module.exports = {
    base: '/v2/',
    title: 'Muhammad Wahyudin\'s Page',
    description: 'Software Developer - Instrumentation & Electronics Physicist - Technology Enthusiast',
    head: [
        ['link', {
            rel: 'icon',
            href: 'https://hyuwah.github.io/assets/favicon/favicon.ico?v=xQzbabgwXG'
        }],
        ['script', {
            src: `https://sethusenthil.com/Product-Sans/api/font.js`
        }],
        // ['script', {
        //     src: `https://cdn.jsdelivr.net/npm/vue-scroll-reveal@1.0.11/dist/vue-scroll-reveal.min.js`
        // }],
        ['link', {
            rel: 'stylesheet',
            href: `https://cdn.jsdelivr.net/npm/vuetify@1.x/dist/vuetify.min.css`
        }],
        ['link', {
            rel: 'stylesheet',
            href: "https://use.fontawesome.com/releases/v5.6.3/css/all.css"
        }],
    ],
    themeConfig: {
        nav: [{
            text: 'PORTFOLIO',
            link: '/portfolio/'
        }]
    },
    plugins: [
        '@vuepress/pwa',
    ],
}