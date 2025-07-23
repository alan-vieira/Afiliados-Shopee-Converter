document.addEventListener('DOMContentLoaded', () => {
  const ul = document.getElementById('url-list');
  const salvarBtn = document.getElementById('salvar-btn');
  let urls = [];

  // Função para extrair o product_id do link original
  const extrairProductId = (url) => {
    const match = url.match(/\/product\/\d+\/(\d+)/);
    return match ? match[1] : null;
  };

  chrome.tabs.query({}, (tabs) => {
    tabs.forEach(tab => {
      const originalUrl = tab.url;

      if (originalUrl.includes("shopee.com.br/product/")) {
        const productId = extrairProductId(originalUrl);

        if (productId) {
          const urlAfiliado = `https://affiliate.shopee.com.br/offer/product_offer/${productId}`;
          urls.push(urlAfiliado);

          const li = document.createElement('li');
          li.textContent = urlAfiliado;
          ul.appendChild(li);
        }
      }
    });
  });

  salvarBtn.addEventListener('click', () => {
    const blob = new Blob([urls.join('\n')], { type: 'text/plain' });
    const urlBlob = URL.createObjectURL(blob);

    const a = document.createElement('a');
    a.href = urlBlob;
    a.download = `links_afiliados_shopee_${new Date().toISOString().slice(0,10)}.txt`;
    a.click();

    URL.revokeObjectURL(urlBlob);
  });
});
