import React, { useEffect, useCallback, useState } from "react";
import styled from "styled-components";

const Button = styled.div`
  cursor: pointer;

  position: absolute;
  top: 50%;

  width: 3em;
  height: 3em;
  padding: 1em;
  border-radius: 100%;
  box-shadow: ${props => props.theme.boxShadow.small};

  text-align: center;
  line-height: 1;

  background: #fff;

  opacity: 0.5;

  transition: opacity 0.2s ease-out;

  transform: translate(0, -50%);

  &:hover {
    opacity: 1;
  }
`;

const PrevButton = styled(Button)`
  left: 1em;
`;

const NextButton = styled(Button)`
  right: 1em;
`;

const CurrentSlide = styled.div`
  position: relative;
  height: 15em;

  background: url(${props => props.image}) no-repeat center / cover;
`;

const Slider = ({ images = [] }) => {
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => setCurrentImage(0), [images]);

  const next = useCallback(
    () =>
      setCurrentImage(currentImage =>
        Math.min(currentImage + 1, images.length - 1)
      ),
    [images]
  );
  const prev = useCallback(
    () => setCurrentImage(currentImage => Math.max(0, currentImage - 1)),
    []
  );

  return images.length > 0 ? (
    <CurrentSlide image={images[currentImage % images.length]}>
      {currentImage > 0 && <PrevButton onClick={prev}>&larr;</PrevButton>}
      {currentImage < images.length - 1 && (
        <NextButton onClick={next}>&rarr;</NextButton>
      )}
    </CurrentSlide>
  ) : null;
};

export default Slider;
