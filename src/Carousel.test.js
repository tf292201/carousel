import { render, fireEvent } from "@testing-library/react";
import Carousel from "./Carousel";
import TEST_IMAGES from "./_testCommon.js";

////////////////////////////////////////////////////////////////
//smoke test. renders Carousel component without crashing

it("renders Carousel component without crashing", function() {
  const photo = [
    { src: "image1.jpg", caption: "testing image 1" },
    { src: "image2.jpg", caption: "testing image 2" },
  ];
  const title = "images for testing";

  render(<Carousel photos={photo} title={title} />);
});

////////////////////////////////////////////////////////////////
//snapshot test. matches the snapshot of the Carousel component
it("matches snapshot", function() {
  const photos = [
    { src: "image1.jpg", caption: "testing image 1" },
    { src: "image2.jpg", caption: "testing image 2" },
  ];
  const title = "images for testing";

  const { container } = render(<Carousel photos={photos} title={title} />);
  expect(container.firstChild).toMatchSnapshot();
})
////////////////////////////////////////////////////////////
// Checks that left arrow is missing from the first image
// and right arrow is missing from the last image

it('hides the left arrow on the first image and the right arrow on the last image', function() {
  const { container } = render(
    <Carousel
      photos={TEST_IMAGES}
      title="images for testing"
    />
  );

  //expect the left arrow to be hidden
  const leftArrow = container.querySelector(".bi-arrow-left-circle");
  expect(leftArrow).not.toBeInTheDocument();

  //move to the last image
  const rightArrow = container.querySelector(".bi-arrow-right-circle");
  fireEvent.click(rightArrow);
  fireEvent.click(rightArrow);

  expect(rightArrow).not.toBeInTheDocument();

});



//////////////////////////////////////////////////////////
// clicks right arrow to move to second image, then clicks left arrow to move back to first image,
// asserts that the first image is displayed again

it('moves to the previous image when you click on the left arrow', function() {
  const { container } = render(
    <Carousel
      photos={TEST_IMAGES}
      title="images for testing"
    />
  );
  // expect the first image to show, but not the second
  expect(
    container.querySelector('img[alt="testing image 1"]')
  ).toBeInTheDocument();
  expect(
    container.querySelector('img[alt="testing image 2"]')
  ).not.toBeInTheDocument();

  // move forward in the carousel
  const rightArrow = container.querySelector(".bi-arrow-right-circle");
  fireEvent.click(rightArrow);

  // expect the second image to show, but not the first
  expect(
    container.querySelector('img[alt="testing image 1"]')
  ).not.toBeInTheDocument();
  expect(
    container.querySelector('img[alt="testing image 2"]')
  ).toBeInTheDocument();

  // move back in the carousel
  const leftArrow = container.querySelector(".bi-arrow-left-circle");
  fireEvent.click(leftArrow);

  // expect the first image to show again
  expect(
    container.querySelector('img[alt="testing image 1"]')
  ).toBeInTheDocument();
  expect(
    container.querySelector('img[alt="testing image 2"]')
  ).not.toBeInTheDocument();
});



it("works when you click on the right arrow", function() {
  const { container } = render(
    <Carousel
      photos={TEST_IMAGES}
      title="images for testing"
    />
  );
  // expect the first image to show, but not the second
  expect(
    container.querySelector('img[alt="testing image 1"]')
  ).toBeInTheDocument();
  expect(
    container.querySelector('img[alt="testing image 2"]')
  ).not.toBeInTheDocument();

  // move forward in the carousel
  const rightArrow = container.querySelector(".bi-arrow-right-circle");
  fireEvent.click(rightArrow);

  // expect the second image to show, but not the first
  expect(
    container.querySelector('img[alt="testing image 1"]')
  ).not.toBeInTheDocument();
  expect(
    container.querySelector('img[alt="testing image 2"]')
  ).toBeInTheDocument();
});
