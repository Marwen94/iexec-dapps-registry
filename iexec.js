module.exports = {
  name: 'FirstTry',
  app: {
    type: 'DOCKER',
    envvars: 'XWDOCKERIMAGE=ubuntu',
  },
  work: {
    cmdline: 'echo HeyMarwenItWorks',
  }
};
