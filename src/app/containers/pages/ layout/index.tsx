import React, { memo, useState } from 'react';

import styled from '@emotion/styled';

import { Button, IconButton } from 'common/components/button';
import { CheckBox } from 'common/components/checkbox/checkbox';
import { Input } from 'common/components/input';
import { Refferal } from 'common/components/refferal';
import { Status } from 'common/components/status';

const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 2em;
  align-items: center;
  background-color: #242424;
  height: 100%;
  padding: 1em;
`;

const Ico = () => (
  <svg
    width={15}
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    fill="#ff0000"
    version="1.1"
    id="Capa_1"
    x="0px"
    y="0px"
    viewBox="0 0 363.579 363.579"
    xmlSpace="preserve">
    <g>
      <path d="M360.082,175.411l-82.42-57.744c-1.413-0.99-2.725-1.514-4.249-1.514c-3.307,0-6.413,2.512-6.413,7.313v34.323H161.436   c-4.963,0-9.436,4.167-9.436,9.13v29.75c0,4.963,4.474,9.12,9.436,9.12H267v34.341c0,4.801,3.108,7.659,6.415,7.659   c0.001,0-0.119,0-0.119,0c1.524,0,3.018-0.696,4.43-1.687l82.384-57.826c2.213-1.55,3.467-3.922,3.468-6.432   C363.579,179.335,362.296,176.962,360.082,175.411z" />
      <path d="M297.943,261.789c-1.384,0-2.678,1.072-2.698,1.092l-20.005,14.014c-0.173,0.114-4.24,2.852-4.24,7.896   c0,1.403,0,5.185,0,7H29v-219h242c0,0,0,4.938,0,6.75c0,4.085,3.98,6.981,4.154,7.105l21.664,15.178   c0.032,0.021,0.795,0.521,1.674,0.521c1.145,0,2.508-0.769,2.508-4.429V65.841c0-12.926-10.126-23.052-23.052-23.052H24.052   C10.79,42.79,0,53.131,0,65.841v230.896l0,0c0,13.036,11.012,24.049,24.048,24.052c0.001,0,0.002,0,0.004,0h0h253.896h0   c0.002,0,0.003,0,0.005,0C290.662,320.787,301,309.998,301,296.738V267.79C301,262.83,299.338,261.789,297.943,261.789z    M299.97,98.723c0.016-0.254,0.03-0.514,0.03-0.809C300,98.179,299.988,98.452,299.97,98.723z M299.92,99.24   c0.008-0.066,0.018-0.125,0.025-0.194C299.938,99.112,299.928,99.175,299.92,99.24z M300,296.738   C300,296.738,300,296.738,300,296.738L300,296.738L300,296.738z M299.989,267.147c0.007,0.216,0.011,0.432,0.011,0.643   C300,267.565,299.995,267.355,299.989,267.147z M299.975,266.811c0.002,0.039,0.005,0.079,0.007,0.119   C299.98,266.888,299.977,266.851,299.975,266.811z" />
    </g>
  </svg>
);

export const Layout = memo(() => {
  const [val, setVal] = useState('');
  const [checked, setChecked] = useState(false);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { target } = event;
    return setVal(target.value);
  };
  const handleCheck = (event: React.ChangeEvent<HTMLInputElement>) => setChecked(event.target.checked);
  return (
    <Container>
      <Button>Contained</Button>
      <Button variant="outlined">Outlined</Button>
      <Button disabled>Disabled</Button>
      <Button variant="text">Text</Button>
      <IconButton>
        <Ico />
      </IconButton>
      <IconButton variant="outlined">
        <Ico />
      </IconButton>
      <IconButton variant="text">
        <Ico />
      </IconButton>
      <Input value={val} onChange={handleChange} placeholder="Placeholder" label="Label" />
      <Input value={val} onChange={handleChange} placeholder="Disabled" label="Disabled" disabled />
      <Input
        value={val}
        onChange={handleChange}
        placeholder="With icon"
        label="With icon"
        InputProps={{
          endAdornment: <Ico />,
        }}
      />
      <Status text="Some text" />
      <Status text="Some text" variant="outlined" />
      <Status text="Some text" variant="text" />
      <Status text="Some text" size="l" />
      <Status text="Some text" variant="outlined" size="l" />
      <Status text="Some text" variant="text" size="l" />
      <Refferal percent={50} text="Test" />
      <Refferal percent={55} text="Test1" />
      <Refferal percent={10} text="Test2" />
      <Refferal percent={100} text="Test3" />
      <CheckBox onChange={handleCheck} checked={checked} label="Hello it's me" />
      <CheckBox onChange={handleCheck} checked={checked} label="disabled" disabled />
    </Container>
  );
});
