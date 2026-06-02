const express = require('express');
const http = require('http');
const socketIo = require('socket.io');

const app = express();
const server = http.createServer(app);
const io = socketIo(server);

// 静的ファイルを提供
app.use(express.static('public')); // publicフォルダ内のファイルを提供

io.on('connection', (socket) => {
    console.log(`New client connected: ${socket.id}`);

    // 自分のアバターの位置データを受信
    socket.on('send_my_pos', (data) => {
        console.log(`Received position from ${socket.id}:`, data.position);
        // 受け取ったアバターの位置データを送信元のクライアントを除くすべてのクライアントにブロードキャスト
        socket.broadcast.emit('update_your_pos', [
            socket.id,
            data.position,
        ]);
    });

    socket.on('disconnect', () => {
        console.log('Client disconnected:', socket.id);
        // 他のクライアントにユーザー削除を通知
        socket.broadcast.emit('remove_user', socket.id);
    });
});

io.on('connection', (socket) => {
  console.log('a user connected');

  // クライアントからの動画制御イベントを受信
  socket.on('video-control', (data) => {
    // 他のクライアントにブロードキャスト
    socket.broadcast.emit('video-control', data);
  });

  socket.on('disconnect', () => {
    console.log('user disconnected');
  });
});

// サーバーの起動
const PORT = process.env.PORT || 3000;
server.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});