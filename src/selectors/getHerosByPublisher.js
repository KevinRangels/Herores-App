import { heroes } from '../data/heroes';

export const getHerosByPublisher = (publisher) => {
  const validPublisher = ['DC Comics', 'Marvel Comics'];

  if (!validPublisher.includes(publisher)) {
    throw new Error('Publisher not valid');
  }
  return heroes.filter((hero) => hero.publisher === publisher);
};
