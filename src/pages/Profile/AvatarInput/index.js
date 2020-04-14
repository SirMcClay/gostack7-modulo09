import React from 'react';
import { useField } from '@rocketseat/unform';

import { Container } from './styles';

export default function AvatarInput() {
  function handleChange(e) {}

  return (
    <Container>
      <label htmlFor="avatar">
        <img src="" alt="" />

        <input
          type="file"
          id="avatar"
          accept="image/*"
          onChange={handleChange}
        />
      </label>
    </Container>
  );
}
