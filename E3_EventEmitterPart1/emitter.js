function Emitter()
{
  this.events = {};
}

Emitter.prototype.on = function(eventName, eventListener)
{
  this.events[eventName] = (this.events[eventName]) ? this.events[eventName] : [];
  this.events[eventName].push(eventListener);
}

Emitter.prototype.emit = function(eventName)
{
  if (this.events[eventName]) {
    this.events[eventName].forEach(function(eventListener) {
      eventListener();
    });
  }
}

module.exports = Emitter;