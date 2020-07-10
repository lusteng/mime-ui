module.exports ={
    mode: 'site',  

    logo: './logo.png',
    favicon: './favicon.ico', 
    title: 'memui', 
    menus: { 
        '/base': [{
            title: '基础组件',
            path: '',
            children: [
                'base/Button.md'
            ]
        }],   
        '/use':[{
            title: '安装使用', 
            path: '/use' 
        }]
    },
    navs: [
        {
            title: '安装使用',
            path: '/use'
        },
        {
            title: '基础组件',
            path: '/base'
        }
    ] 
}