/*
 * @Descripttion: 天眼数据埋点
 * @Author: 杨晨
 * @Date: 2021-05-31 11:04:26
 * @LastEditors: 杨晨
 * @LastEditTime: 2021-05-31 11:06:36
 */

// 引入 vue 插件
import raven from '@didi/raven'
// 引入 pageview 插件
import ravenPageViewPlugin from '@didi/raven/dist/plugins/pageview'
// 引入 performance 插件
import ravenPerformancePlugin from '@didi/raven/dist/plugins/performance'
// 引入 error 插件
import ravenErrorPlugin from '@didi/raven/dist/plugins/error'
// 引入 blankObserver 插件->监控页面白屏异常，并自动上报异常信息。
import ravenBlankObserverPlugin from '@didi/raven/dist/plugins/blankObserver'
// 引入 resource 插件
import ravenResourcePlugin from '@didi/raven/dist/plugins/resource'
raven
    .setConfig({ appId: 1203 })
    .use(ravenPageViewPlugin, {
        autoTrackPageView: false
    })
    .use(ravenPerformancePlugin)
    .use(ravenErrorPlugin, {
        consoleError: true
    })
    .use(ravenBlankObserverPlugin, {
        domElem: 'app',
        waitingTime: 1000 * 600
    })
    .use(ravenResourcePlugin, {
        // 属性模式
        mode: 'attr'
    })
