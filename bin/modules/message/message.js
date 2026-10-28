const express = require('express');
const router = express.Router();
const domain = require('./domain');

// Clean Text Value Response
const esc = (s) => String(s ?? '').replace(/[&<>"']/g, (c) => ({
    '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;'
}[c]));

// Renders Items
const renderHtml = (items) => `<!DOCTYPE html>
<html lang="id">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>Reminders</title>
<style>
  body { font-family: Georgia, serif; background: #f6f4ef; color: #222; margin: 0; padding: 16px; }
  .wrap { max-width: 640px; margin: 0 auto; }
  h1 { font-size: 1.3rem; text-align: center; margin: 12px 0 20px; }
  .card { background: #fff; border-radius: 12px; padding: 16px 18px; margin-bottom: 14px; box-shadow: 0 1px 4px rgba(0,0,0,.08); }
  .text { font-size: 1.05rem; line-height: 1.6; margin: 0 0 10px; }
  .source { font-size: .9rem; color: #7a5c2e; font-weight: bold; margin: 0; }
  .note { font-size: .9rem; color: #555; line-height: 1.5; margin: 8px 0 0; }
  @media (prefers-color-scheme: dark) {
    body { background: #121212; color: #eee; }
    .card { background: #1e1e1e; box-shadow: none; }
    .source { color: #d9b36c; }
    .note { color: #aaa; }
  }
</style>
</head>
<body>
<div class="wrap">
  <h1>Reminders</h1>
  ${items.map((q) => `
  <div class="card">
    <p class="text">“${esc(q.text)}”</p>
    <p class="source">— ${esc(q.source)}</p>
    ${q.note ? `<p class="note">${esc(q.note)}</p>` : ''}
  </div>`).join('')}
</div>
</body>
</html>`;





router.get('/', async (req, res) => {
    

    try {

        let data  = await domain.message(req.query)

        // Browser (Accept: text/html) -> halaman rapi, selain itu -> JSON
        if (req.accepts(['json', 'html']) === 'html') {
            return res.type('html').send(renderHtml(data.message));
        }

        res.send({
            status : true,
            reason : "Successfully",
            code : 200,
            results : data.message
        })
        
    } catch (error) {
        
        res.send({
            status : false,
            reason : "Failed to load data",
            code : 400,
            results : null
        })
    }
})

module.exports = router