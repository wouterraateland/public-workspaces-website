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

  text-align: center;
  line-height: 1;

  background: #fff9;

  opacity: 0;

  transition: opacity 0.2s ease-out;

  transform: translate(0, -50%);
`;

const PrevButton = styled(Button)`
  left: 2em;
`;

const NextButton = styled(Button)`
  right: 2em;
`;

const CurrentSlide = styled.div`
  position: relative;
  height: 15em;

  background: url(${props => props.image}) no-repeat center / cover;

  &:hover ${Button} {
    opacity: 1;
  }
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
