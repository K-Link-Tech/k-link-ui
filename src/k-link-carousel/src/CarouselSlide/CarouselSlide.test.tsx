import React from 'react';
import {
  itSupportsSystemProps,
  createContextContainer,
  itThrowsContextError,
  itRendersChildren,
} from '@k-link/tests';
import { CAROUSEL_ERRORS } from '../Carousel.errors';
import { CarouselSlide, CarouselSlideProps } from './CarouselSlide';
import { CarouselProvider } from '../Carousel.context';

const defaultProps: CarouselSlideProps = {};

const TestContainer = createContextContainer(CarouselSlide, ({ children }) => (
  <CarouselProvider
    value={{
      embla: undefined,
      slideSize: '100%',
      slideGap: 0,
      orientation: 'horizontal',
      includeGapInSize: true,
      breakpoints: undefined,
      classNames: undefined,
      styles: undefined,
      unstyled: false,
      variant: undefined,
    }}
  >
    {children}
  </CarouselProvider>
));

describe('@k-link/carousel/CarouselSlide', () => {
  itRendersChildren(TestContainer, defaultProps);
  itThrowsContextError(CarouselSlide, defaultProps, CAROUSEL_ERRORS.context);
  itSupportsSystemProps({
    component: TestContainer,
    props: defaultProps,
    refType: HTMLDivElement,
    displayName: '@k-link/carousel/CarouselSlide',
  });
});
