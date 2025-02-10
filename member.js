function skillsMember() {
  return {
    name: 'skillsMember',
    description: 'skillsMember',
    args: false,
    execute(message, args) {
      message.channel.send('skillsMember');
    }
  }
}