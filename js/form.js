const params = new URLSearchParams(window.location.search);
let fromPage = params.get('from');
console.log(`from page: ${fromPage}`);