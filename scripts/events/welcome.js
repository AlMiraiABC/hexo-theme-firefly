const logger = require('hexo-log')()

hexo.on('ready', () => {
    const { name, version, bugs, homepage } = require('../../package.json')
    logger.info(`${name}@${version}, see more at ${homepage}.
      If you have any problems, please visit ${bugs.url}.`)
})
