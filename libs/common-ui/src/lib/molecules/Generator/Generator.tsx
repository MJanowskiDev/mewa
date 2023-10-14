import { MouseEventHandler, useState } from 'react';

import { Button } from '../../atoms/Button';

export const Generator = () => {
  const [id, setId] = useState(crypto.randomUUID());

  const handleClick: MouseEventHandler<HTMLButtonElement> = () => {
    setId(crypto.randomUUID());
  };

  return (
    <>
      <p>{id}</p>
      <Button label="Regenerate" onClick={handleClick} />
    </>
  );
};
