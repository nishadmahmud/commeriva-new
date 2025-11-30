/** @type {import('next-sitemap').IConfig} */
module.exports = {
    siteUrl: 'https://www.commeriva.com',
    generateRobotsTxt: true,
    sitemapSize: 7000,
    changefreq: 'daily',
    priority: 0.7,
    exclude: ['/404', '/admin', '/api/*'],
    robotsTxtOptions: {
        policies: [
            { userAgent: '*', allow: '/' },
            { userAgent: '*', disallow: ['/api/', '/admin/', '/_next/', '/404'] },
        ],
    },
};
