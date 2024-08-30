// Utility function to create and append elements
function createElement(tag, className, textContent = '', parent) {
    const element = document.createElement(tag);
    if (className) element.className = className;
    if (textContent) element.textContent = textContent;
    if (parent) parent.appendChild(element);
    return element;
}

// Function to clear content from an element
function clearContent(element) {
    element.innerHTML = '';
}

// Function to load Start page content
function loadStartPage(contentContainer) {
    clearContent(contentContainer);
    createElement('h2', '', 'Witamy na stronie głównej!', contentContainer);
    createElement('p', '', 'Tutaj znajdziesz wszystkie informacje wprowadzające.', contentContainer);
}

// Function to load Training Dashboard content
function loadTrainingDashboard(contentContainer) {
    clearContent(contentContainer);
    
    // Training Phases section
    const trainingPhases = createElement('div', 'training-phases', '', contentContainer);
    createElement('h2', '', 'Szkolenia w fazach', trainingPhases);
    
    const phases = [
        { class: 'open', text: 'Szkolenia otwarte', count: 7 },
        { class: 'closed', text: 'Szkolenia zamknięte', count: 4 },
        { class: 'uncounted', text: 'Nierozliczone szkolenia', count: 4 },
        { class: 'all', text: 'Wszystkie szkolenia', count: 11 }
    ];

    phases.forEach(({ class: cls, text, count }) => {
        const phaseCard = createElement('div', `phase-card ${cls}`, `${text} `, trainingPhases);
        createElement('span', '', count, phaseCard);
    });

    // Upcoming Trainings section
    const upcomingTrainings = createElement('div', 'upcoming-trainings', '', contentContainer);
    createElement('h2', '', 'Nadchodzące szkolenia', upcomingTrainings);
    createElement('p', '', 'Brak danych do wyświetlenia', upcomingTrainings);
}

// Function to show the login page
function showLoginPage() {
    const app = document.getElementById('app');
    clearContent(app);

    const loginContainer = createElement('div', 'login-container', '', app);
    createElement('h2', '', 'Zaloguj się', loginContainer);

    const form = createElement('form', '', '', loginContainer);

    createElement('label', '', 'Login:', form);
    const loginInput = createElement('input', '', '', form);
    loginInput.type = 'text';
    loginInput.placeholder = 'Login';

    createElement('label', '', 'Hasło:', form);
    const passwordInput = createElement('input', '', '', form);
    passwordInput.type = 'password';
    passwordInput.placeholder = 'Hasło';

    const loginButton = createElement('button', '', 'Zaloguj się', form);
    loginButton.type = 'button';

    loginButton.addEventListener('click', () => {
        const username = loginInput.value;
        const password = passwordInput.value;

        if (username === 'admin' && password === 'admin') {
            initDashboard();
        } else {
            alert('Nieprawidłowy login lub hasło');
        }
    });
}

// Initialize the dashboard after login
function initDashboard() {
    const app = document.getElementById('app');
    clearContent(app);

    // Container
    const container = createElement('div', 'container', '', app);

    // Sidebar
    const sidebar = createElement('nav', 'sidebar', '', container);
    createElement('div', 'logo', 'LOGO', sidebar);
    const navList = createElement('ul', '', '', sidebar);

    const navItems = [
        { name: 'Start', action: loadStartPage },
        { name: 'Pulpit szkoleń', action: loadTrainingDashboard },
        // Additional nav items can be added here
    ];

    const mainContent = createElement('main', 'main-content', '', container);

    navItems.forEach(item => {
        const li = createElement('li', '', '', navList);
        const link = createElement('a', '', item.name, li);
        link.href = '#';
        link.addEventListener('click', (e) => {
            e.preventDefault();
            item.action(mainContent);
        });
    });

    // Load the default page (Start) on initial load
    loadStartPage(mainContent);
}

// Run the app initialization - starts with login page
showLoginPage();
