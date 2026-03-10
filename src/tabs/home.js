const HomePage = () => {
    const pageContainer = document.querySelector('#content');
    const pageElements = {
        container: document.createElement('div'),
        heading: document.createElement('h2'),
        subHeading: document.createElement('p'),
        btn: document.createElement('button'),
    }

    pageElements.container.classList.add('home-container');
    pageElements.heading.classList.add('home-heading');
    pageElements.subHeading.classList.add('home-subheading');
    pageElements.btn.classList.add('home-button');

    pageElements.heading.textContent = 'Welcome to HassaanN08 Steakhouse, the finest Steakhouse on Mars';
    pageElements.subHeading.textContent = 'We are glad to have you here. Explore our services and offerings';
    pageElements.btn.textContent = 'View Menu';
    pageElements.btn.dataset.item = 'menu';

    pageContainer.append(pageElements.container);
    pageElements.container.append(pageElements.heading, pageElements.subHeading, pageElements.btn);
}

export default HomePage;