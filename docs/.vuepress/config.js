module.exports = {
    base: '/v2/',
    title: 'Muhamad Wahyudin - Android Engineer',
    description: 'Muhamad Wahyudin - Software Engineer - Android',
    head: [
        ['meta', {
            name: 'keywords',
            content: 'mobile app, developer, programmer, software engineer, professional, android, flutter, kotlin'
        }],
        ['meta', {
            name: 'robots',
            content: 'index, follow'
        }],
        ['meta', {
            name: 'language',
            content: 'English'
        }],
        ['link', {
            rel: 'icon',
            href: 'https://res.cloudinary.com/hyuwah-github-io/image/upload/v1690199242/hyuwah.github.io/favicon/favicon.ico'
        }],
        ['link', {
            rel: 'shortcut icon',
            type: 'image/x-icon',
            href: 'https://res.cloudinary.com/hyuwah-github-io/image/upload/v1690199242/hyuwah.github.io/favicon/favicon.ico'
        }],
        ['link', {
            rel: 'icon',
            type: 'image/png',
            sizes: '16x16',
            href: 'https://res.cloudinary.com/hyuwah-github-io/image/upload/v1690199242/hyuwah.github.io/favicon/favicon-16x16.png'
        }],
        ['link', {
            rel: 'icon',
            type: 'image/png',
            sizes: '32x32',
            href: 'https://res.cloudinary.com/hyuwah-github-io/image/upload/v1690199242/hyuwah.github.io/favicon/favicon-32x32.png'
        }],
        ['link', {
            rel: 'apple-touch-icon',
            sizes: '180x180',
            href: 'https://res.cloudinary.com/hyuwah-github-io/image/upload/v1690199242/hyuwah.github.io/favicon/apple-touch-icon.png'
        }],
        ['script', {
            src: `https://sethusenthil.com/Product-Sans/api/font.js`
        }],
        ['link', {
            rel: 'stylesheet',
            href: `https://cdn.jsdelivr.net/npm/vuetify@2.x/dist/vuetify.min.css`
        }],
        ['link', {
            rel: 'stylesheet',
            href: 'https://use.fontawesome.com/releases/v5.6.3/css/all.css'
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