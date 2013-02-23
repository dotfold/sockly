Sockly
------

A WebSocket middleware to intercept log messages via TCP and transmit over nodejs streams to a statsd instance.

#### Why

statsd uses UDP to handle messages (for good reason - see linktostatsd) however sending messages from a browser client is not possible over UDP.

Sockly acts as middleware interpreting TCP messages via websocket from the client and forwarding these on to a statsd instance.

Since it uses websockets, only websocket compatible browsers can take advantage of sockly.

> link to table

#### Install

With npm:

```
npm install sockly
```

#### Usage

Run the server via node:

```
$ node sockly
```

To supply your own config options:

```
$ node sockly start path/to/conf
```


#### Development

- dependencies
- tests
- run


#### ToDo

- request pooling
- use a builder to create buckets etc


#### License

MIT
