import image1 from '../assets/about-banner.webp';
import image2 from '../assets/about-abs-image.webp';

const AboutPage = () => {
    const pageContainer = document.querySelector('#content');
    const pageElements = {
        container: document.createElement('div'),
        heading: document.createElement('h2'),
        subHeading: document.createElement('h4'),
        paraText: document.createElement('div'),
        imgContainer: document.createElement('div'),
        img1: document.createElement('img'),
        img2: document.createElement('img'),
    }

    pageElements.container.classList.add('about-container');
    pageElements.heading.classList.add('about-heading');
    pageElements.subHeading.classList.add('about-subheading');
    pageElements.paraText.classList.add('about-paragraph');
    pageElements.imgContainer.classList.add('about-image-wrap');
    pageElements.img1.classList.add('about-image-1');
    pageElements.img2.classList.add('about-image-2');

    pageElements.img1.src = image1;
    pageElements.img2.src = image2;

    pageElements.heading.innerHTML = 'Every Flavor Tells a <span>Story<span/>';
    pageElements.subHeading.textContent = 'Our Story';
    pageElements.paraText.innerHTML = '<p>At our best steak house in Islamabad every dish is crafted with care, and every flavor tells a story. From the rich, smoky taste of our expertly grilled steaks to the vibrant, fresh ingredients in our salads, each bite is a journey through culinary excellence.</p><p>Our chefs take pride in their craftsmanship ensuring that each dish not only tastes incredible but is also presented beautifully. Whether you are enjoying a meal with family or friends, our attention to detail and commitment to quality make every dining experience memorable.</p><p>Located at 24 King Street, Charleston, South Carolina, we invite you to experience the best steaks and wine in a setting where every dish is a celebration of flavor and artistry. Discover why we are the premier destination for those seeking exceptional cuisine and a delightful atmosphere.</p>';

    pageContainer.append(pageElements.container, pageElements.imgContainer);
    pageElements.container.append(pageElements.subHeading, pageElements.heading, pageElements.paraText);
    pageElements.imgContainer.append(pageElements.img1, pageElements.img2);
}

export default AboutPage;