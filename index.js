module.exports = ({ utils }) => {

    return {
        beforeRender(files, metalsmith, done) {

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
                            scss: (PRODUCTION ? ExtractTextPlugin.extract({
                                fallback: 'vue-style-loader',
                                use: styleLoaders.loaders
                            }) : ['vue-style-loader'].concat(styleLoaders.loaders))
                        },
                        cssModules: {
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
        }
    };
};