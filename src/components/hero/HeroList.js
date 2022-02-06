import { getHerosByPublisher } from '../../selectors/getHerosByPublisher';

export const HeroList = ({ publisher }) => {
  const heroes = getHerosByPublisher(publisher);
  return (
    <>
      <ul>
        {heroes.map((hero) => (
          <li key={hero.id}>{hero.superhero}</li>
        ))}
      </ul>
    </>
  );
};
