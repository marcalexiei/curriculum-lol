import { z } from 'zod';

export const VIDEOGAME_SCHEMA = z.object({
  name: z.string(),
});

export type Videogame = z.infer<typeof VIDEOGAME_SCHEMA>;
