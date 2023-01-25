const {defineConfig} = require('@vue/cli-service')
module.exports = defineConfig({

    devServer: {
      port: 80,
    },

    transpileDependencies: true,

    pluginOptions: {
        vuetify: {
            // https://github.com/vuetifyjs/vuetify-loader/tree/next/packages/vuetify-loader
        }
    },
    chainWebpack: config => {
        config.module
            .rule('images')
            .set('parser', {
                dataUrlCondition: {
                    maxSize: 4 * 1024 // 4KiB
                }
            })
    },
})
