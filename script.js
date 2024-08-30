// Function to create and append an element with given properties
function createElement(tag, className, textContent = '', parent) {
    const element = document.createElement(tag);
    if (className) element.className = className;
    if (textContent) element.textContent = textContent;
    if (parent) parent.appendChild(element);
    return element;
}

// Initialize the app
function initApp() {
    const app = document.getElementById('app');

    // Container
    const container = createElement('div', 'container', '', app);

    // Sidebar
    const sidebar = createElement('nav', 'sidebar', '', container);
    createElement('div', 'logo', 'LOGO', sidebar);
    const navList = createElement('ul', '', '', sidebar);

    const navItems = [
        'Start', 'Pulpit szkoleń', 'Klienci', 'Szkolenia otwarte', 
        'Szkolenia zamknięte', 'Sale szkoleniowe', 'Usługi', 
        'Trenerzy', 'Grupy tematyczne', 'Statusy szkoleń', 
        'Szkolenia - fazy', 'Szablony'
    ];

    navItems.forEach(item => {
        const li = createElement('li', '', '', navList);
        createElement('a', '', item, li).href = '#';
    });

    // Main Content
    const mainContent = createElement('main', 'main-content', '', container);

    // Header with notifications and user info
    const mainHeader = createElement('header', 'main-header', '', mainContent);
    const headerNotifications = createElement('div', 'header-notifications', '', mainHeader);

    const notifications = [
        { icon: '🔔', badge: 2 },
        { icon: '💬' },
        { icon: '📊' }
    ];

    notifications.forEach(({ icon, badge }) => {
        const span = createElement('span', 'icon', icon, headerNotifications);
        if (badge) {
            createElement('span', 'badge', badge, span);
        }
    });

    const userInfo = createElement('div', 'user-info', '', mainHeader);
    createElement('span', 'user-icon', 'VY', userInfo);
    createElement('button', 'dropdown', '▼', userInfo);

    // Dashboard Content
    const dashboard = createElement('section', 'dashboard', '', mainContent);

    // Training Phases
    const trainingPhases = createElement('div', 'training-phases', '', dashboard);
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

    // Upcoming Trainings
    const upcomingTrainings = createElement('div', 'upcoming-trainings', '', dashboard);
    createElement('h2', '', 'Nadchodzące szkolenia', upcomingTrainings);
    createElement('p', '', 'Brak danych do wyświetlenia', upcomingTrainings);

    // Training Statuses
    const trainingStatuses = createElement('div', 'training-statuses', '', dashboard);
    createElement('h2', '', 'Statusy szkoleń', trainingStatuses);
    // Here you would add more content or graphics, such as a chart

    // Add further modular sections as required
}

// Run the app initialization
initApp();
