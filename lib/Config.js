var Config = requireLib('config.json');
Config.server = Config.environments[process.env.NODE_ENV];

module.exports = Config;
