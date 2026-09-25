const express = require('express');
const axios = require('axios');
const assert = require('assert');
const app = express();
const port = 3000;
assert(process.env.DEPLOY_HOOK_URL);

app.use(express.static('public'));

app.get('/deploy', async (req, res) => {
  try {
    const response = await axios.get(process.env.DEPLOY_HOOK_URL);
    res.send(response.data);
  } catch (error) {
    res.status(500).send(error.message);
  }
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
