import { z } from 'zod';
import { VIDEOGAME_SCHEMA } from './models/videogame';

// biome-ignore lint/style/noNonNullAssertion: not needed, this is always present
const root = document.getElementById('root')!;

root.innerHTML = '<h1>Ciao!</h1>';

(async () => {
  const { default: gameListResponse } = await import('./data/game-list.json');

  const integrityCheck = z
    .object({ games: z.array(VIDEOGAME_SCHEMA) })
    .safeParse(gameListResponse);

  if (integrityCheck.success) {
    root.innerHTML += `<pre>${JSON.stringify(integrityCheck.data, null, 2)}</pre>`;
  }
})();
