const filterModules = require('../../helpers/filterModules');
const executePenalty = require('../../helpers/executePenalty');

const MODULE = 'banphrase';

const banphrase = async (channel, message, modules, username) => {
    let filteredModule = await filterModules(modules, MODULE);
    if(filteredModule.parameters.includes(message)) {
      await executePenalty(channel, username, filteredModule.penalty, filteredModule.timeoutDuration, MODULE);
      return true;
    }
    return false;
}

module.exports = banphrase;
