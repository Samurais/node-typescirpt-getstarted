/// <reference path="../typings/index.d.ts" />

import * as Hapi from 'hapi';
import { Person } from './person';

const server = new Hapi.Server();
server.connection({
    host: 'localhost',
    port: 8888
});

server.route({
    method: 'GET',
    path: '/hello/{name}',
    handler: function (request, reply) {
        let p = new Person(request.params['name'], 15);
        return reply('hello ' + p.getName());
    }
});

server.start((err) => {
    if (err) { throw err; }
    console.log('Server running at:', server.info.uri);
});