module.exports = () => {
    console.error('This entrypoint format is deprecated. Please upgrade umeboshi-cli.');
    console.error();
    console.error('npm install -g umeboshi-cli');
    return {};
};



module.exports.beforeRender = ({ utils }) => (files, metalsmith, done) => {

    const meta = metalsmith.metadata();
    meta.tmpl.hmr = true;

    const injector = new utils.Injector(files);

    injector.at('config/webpack.base.js', {
        MODULES_END: `
        , {
            test: /\.vue$/,
            include: [
                paths.toAbsPath('src.assets/js')
            ],
            loader: 'vue-loader',
            options: {
                loaders: {
                    css: (PRODUCTION ? ExtractTextPlugin.extract({
                        fallback: 'vue-style-loader',
                        use: styleLoaders.loaders
                    }) : ['vue-style-loader'].concat(styleLoaders.loaders))
                },
                cssModules: {
                    modules: true,
                    camelCase: true,
                    importLoaders: 1,
                    sourceMap: true,
                    localIdentName: '[name]__[local]---[hash:base64:5]'
                }
            }
        }`,
        RESOLVE: 'extensions: [\'.js\', \'.vue\', \'.json\'],'
    });
    done();
};