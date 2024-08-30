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

// Function to load Participants Management page content
function loadParticipantsManagement(contentContainer) {
    clearContent(contentContainer);

    createElement('h2', '', 'Zarządzanie uczestnikami', contentContainer);

    const participantsList = createElement('div', 'table-container', '', contentContainer);
    const table = createElement('table', '', '', participantsList);
    const thead = createElement('thead', '', '', table);
    const tbody = createElement('tbody', '', '', table);

    // Table header
    const headerRow = createElement('tr', '', '', thead);
    ['Imię', 'Nazwisko', 'Email', 'Status'].forEach(text => {
        createElement('th', '', text, headerRow);
    });

    // Table data (example)
    const participants = [
        { firstName: 'Jan', lastName: 'Kowalski', email: 'jan.kowalski@example.com', status: 'Aktywny' },
        { firstName: 'Anna', lastName: 'Nowak', email: 'anna.nowak@example.com', status: 'Nieaktywny' },
    ];

    participants.forEach(participant => {
        const row = createElement('tr', '', '', tbody);
        createElement('td', '', participant.firstName, row);
        createElement('td', '', participant.lastName, row);
        createElement('td', '', participant.email, row);
        createElement('td', '', participant.status, row);
    });
}

// Function to load Reports page content
function loadReports(contentContainer) {
    clearContent(contentContainer);
    createElement('h2', '', 'Raporty', contentContainer);
    createElement('p', '', 'Generowanie i przeglądanie raportów z systemu.', contentContainer);
}

// Function to load Settings page content
function loadSettings(contentContainer) {
    clearContent(contentContainer);
    createElement('h2', '', 'Ustawienia', contentContainer);
    createElement('p', '', 'Konfiguracja ustawień systemowych.', contentContainer);
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

    const container = createElement('div', 'container', '', app);

    // Sidebar
    const sidebar = createElement('div', 'sidebar', '', container);
    createElement('div', 'logo', 'System Zarządzania', sidebar);

    const menuList = createElement('ul', '', '', sidebar);
    
    const menuItems = [
        { name: 'Start', action: loadStartPage },
        { name: 'Panel Szkoleniowy', action: loadTrainingDashboard },
        { name: 'Zarządzanie Uczestnikami', action: loadParticipantsManagement },
        { name: 'Raporty', action: loadReports },
        { name: 'Ustawienia', action: loadSettings },
    ];

    const mainContent = createElement('div', 'main-content', '', container);

    menuItems.forEach(({ name, action }) => {
        const menuItem = createElement('li', '', '', menuList);
        const link = createElement('a', '', name, menuItem);
        link.href = '#';
        link.addEventListener('click', (event) => {
            event.preventDefault();
            action(mainContent);
        });
    });

    loadStartPage(mainContent);
}

// Start by showing the login page
showLoginPage();
