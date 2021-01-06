const file = {
  endSocketConn(socket) {
    if (!socket) {
      return;
    }

    socket.setTimeout(5000, () => {
      socket.destroy();
    });

    socket.end('commandToSend');
  },
};

export { file };
