module.exports ={
    mode: 'site',  

    logo: './logo.png',
    favicon: './favicon.ico', 
    title: "memui", 
    navs: [
        {
            title: '安装使用',
            path: './src/index.md',
        }, 
        {
            title: '基础组件',
            path: './src/Button.md',
            children: [ 
                { title: 'Button 按钮', path: './src/Button.md' }
            ]
        }
    ], 
}