import { useEffect, useState } from 'react';
import { calculateEffectiveness } from '../utils/typeCalculations';
import { TYPE_COLORS } from '../utils/constants';

type DefenseEffect = {
  type: string;
  effectiveness: number;
};
export default function Weaknesses({ types }: { types: string[] }) {
  const [weaknesses, setWeaknesses] = useState<DefenseEffect[]>([]);
  const [resistances, setResistances] = useState<DefenseEffect[]>([]);

  useEffect(() => {
    const effectiveness = calculateEffectiveness(types);

    const weak: DefenseEffect[] = [];
    const resistant: DefenseEffect[] = [];

    Object.entries(effectiveness).forEach(([type, multiplier]) => {
      if (multiplier > 1) {
        weak.push({ type, effectiveness: multiplier });
      } else if (multiplier < 1) {
        resistant.push({ type, effectiveness: multiplier });
      }
    });

    setWeaknesses(weak);
    setResistances(resistant);
  }, [types]);

  console.log(weaknesses, resistances);
  return (
    <div className="info-pokemon-data">
      <p>Weak to:</p>
      <ul className="weakness-list">
        {weaknesses.map(type => (
          <li
            key={type.type}
            className="info-type-badge"
            style={{
              backgroundColor: `${TYPE_COLORS[type.type]}`,
              // capitalize
              textTransform: 'capitalize',
              // text color white
              color: 'white',
            }}
          >
            {type.type} {type.effectiveness}x
          </li>
        ))}
      </ul>
      <p>Resistant to:</p>
      <ul className="resistant-list">
        {resistances.map(type => (
          <li
            key={type.type}
            className="info-type-badge"
            style={{
              backgroundColor: `${TYPE_COLORS[type.type]}`,
              // capitalize
              textTransform: 'capitalize',
              // text color white
              color: 'white',
            }}
          >
            {type.type} {type.effectiveness}x
          </li>
        ))}
      </ul>
    </div>
  );
}
