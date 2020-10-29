// A hook that logs service method before, after and error
// See https://github.com/winstonjs/winston for documentation
// about the logger.
import { Hook, HookContext } from '@feathersjs/feathers'
import logger from '../logger'

const util = require('util')

// To see more detailed messages, uncomment the following line:
// logger.level = 'debug';
export default (): Hook => (context: HookContext) => {
  // This debugs the service call and a stringified version of the hook context
  // You can customize the message (and logger) to your needs
  logger.debug(
    `${context.type} app.service('${context.path}').${context.method}()`
  )

  if (context.error) {
    logger.error(context.error.stack)
  }

  return context
}
