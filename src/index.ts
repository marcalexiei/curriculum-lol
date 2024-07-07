const ciao = 1;
console.info('something amazing', ciao);

// biome-ignore lint/style/noNonNullAssertion: not needed, this is always present
document.getElementById('root')!.innerHTML = '<h1>Ciao!</h1>';
