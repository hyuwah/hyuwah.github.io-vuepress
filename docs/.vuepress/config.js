module.exports = {
    base: '/v2/',
    title: 'Muhammad Wahyudin\'s Page',
    description: 'Software Developer - Instrumentation & Electronics Physicist - Technology Enthusiast',
    head: [
        ['link', { rel: 'icon', href: 'http://hyuwah.github.io/assets/favicon/favicon.ico?v=xQzbabgwXG' }],
        ['link', { rel: 'stylesheet', href: `https://cdn.jsdelivr.net/npm/vuetify/dist/vuetify.min.css` }],
        ['script',{src:`https://sethusenthil.com/Product-Sans/api/font.js`}],           
        ['script',{src:`https://cdn.jsdelivr.net/npm/vue-scroll-reveal@1.0.11/dist/vue-scroll-reveal.min.js`}],           
    ],
    themeConfig:{
        nav:[
            { text:'PORTFOLIO', link:'/portfolio/'}
        ]
    },
}