const express = require('express');
const cors = require('cors'); // 允许跨域请求
require('dotenv').config(); // 加载 .env 文件中的变量

const app = express();
const PORT = 3000;

// 从 .env 文件中加载 Mapbox Token
const MAPBOX_TOKEN = process.env.MAPBOX_TOKEN;

// 启用 CORS 支持
app.use(cors());

// 提供一个 API 接口返回 Mapbox Token
app.get('/get-mapbox-token', (req, res) => {
  if (!MAPBOX_TOKEN) {
    return res.status(500).json({ error: 'Mapbox token is not defined' });
  }
  res.json({ token: MAPBOX_TOKEN });
});

// 启动服务器
app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});
