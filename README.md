Sockly
------

A WebSocket middleware to intercept log messages via TCP and transmit over nodejs streams to a statsd instance.

#### Why

statsd uses UDP to handle messages (for good reason - see linktostatsd) however sending messages from the client is not possible over UDP.

Sockly acts as middleware interpreting TCP messages via websocket from the client and forwarding these on to a statsd instance.

Since it uses websockets, only websocket compatible browsers can take advantage of sockly.


#### Install

With npm:

```
npm -g install sockly
```

#### Usage

Run the server via node:

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
