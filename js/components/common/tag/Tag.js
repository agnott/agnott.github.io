import React, { useState } from 'react';

import '../../../../css/tag.css';

function getColor(name) {
  return name;
}

export default function Tag({ name }) {
  const [color] = useState(getColor(name));

  console.log(color);

  return (
    <div className="tag__container">
      {name}
    </div>
  );
}