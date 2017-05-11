const program = require('commander');
const commands = require('./lib/commands');

program.version('0.0.1');
program.option('-p, --port <n>', 'Port number the development server will listen on.', parseInt);
program.parse(process.argv);

commands.dev(program);
