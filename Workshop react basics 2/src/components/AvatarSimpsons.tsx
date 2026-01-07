import DonutCounter from "./DonutCount";

interface AvatarSimpsonsProps {
  firstName: string;
  lastName: string;
  city: string;
  image: string;
  age: number;
}

function AvatarSimpsons({ firstName, lastName, city, image, age}: AvatarSimpsonsProps) {
  return (
    <>
      <img src={image} alt={`${firstName}, ${lastName}`} />

      <p>
        {`This is ${firstName} ${lastName}, he is ${age} and he lives in ${city}.`}
      </p>

      <p>
        {`Donuts eaten:`} <DonutCounter /> {`by ${firstName} ${lastName}.`}
      </p>
    </>
  );
}

export default AvatarSimpsons;
