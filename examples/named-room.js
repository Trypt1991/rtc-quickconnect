var quickconnect = require('../');

quickconnect('http://rtc.io/switchboard/', { room: 'dctest-room' })
  .addChannel('test')
  .on('test:open', function(id, dc) {
    dc.onmessage = function(evt) {
      console.log('peer ' + id + ' says: ' + evt.data);
    };

    console.log('test dc open for peer: ' + id);
    dc.send('hi');
  });