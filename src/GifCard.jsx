import React from 'react';

import styled from 'styled-components';
// import { Link } from 'react-router-dom';

const Wrapper = styled.div`
  width: 32%;
  color: black;
  text-decoration: none;
  border: 2px solid black;
  border-radius: 4px;
  margin-bottom: 25px;
  padding-right: 10px;
  overflow: hidden;
`;

const GifCard = props => {
  console.log(`props ${props}`);
  let source;
  if (props.image_url) {
    source = props.image_url;
  } else {
  }
  return (
    <Wrapper>
      <div>
        <img src={source} alt={source} />
      </div>
    </Wrapper>
  );
};
// ShowCard.propTypes = {
//   poster: string.isRequired,
//   title: string.isRequired,
//   year: string.isRequired,
//   description: string.isRequired
// };

export default GifCard;
