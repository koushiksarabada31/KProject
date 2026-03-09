// ===== SHARED APP LOGIC =====

// --- SVG Icon definitions (inline SVGs matching lucide-react) ---
const icons = {
  layoutDashboard: '<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="7" height="9" x="3" y="3" rx="1"/><rect width="7" height="5" x="14" y="3" rx="1"/><rect width="7" height="9" x="14" y="12" rx="1"/><rect width="7" height="5" x="3" y="16" rx="1"/></svg>',
  bookOpen: '<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/></svg>',
  clipboardList: '<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="8" height="4" x="8" y="2" rx="1" ry="1"/><path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"/><path d="M12 11h4"/><path d="M12 16h4"/><path d="M8 11h.01"/><path d="M8 16h.01"/></svg>',
  fileText: '<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"/><path d="M14 2v4a2 2 0 0 0 2 2h4"/><path d="M10 9H8"/><path d="M16 13H8"/><path d="M16 17H8"/></svg>',
  newspaper: '<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 22h16a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H8a2 2 0 0 0-2 2v16a2 2 0 0 1-2 2Zm0 0a2 2 0 0 1-2-2v-9c0-1.1.9-2 2-2h2"/><path d="M18 14h-8"/><path d="M15 18h-5"/><path d="M10 6h8v4h-8V6Z"/></svg>',
  calendarDays: '<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M8 2v4"/><path d="M16 2v4"/><rect width="18" height="18" x="3" y="4" rx="2"/><path d="M3 10h18"/><path d="M8 14h.01"/><path d="M12 14h.01"/><path d="M16 14h.01"/><path d="M8 18h.01"/><path d="M12 18h.01"/><path d="M16 18h.01"/></svg>',
  brain: '<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 5a3 3 0 1 0-5.997.125 4 4 0 0 0-2.526 5.77 4 4 0 0 0 .556 6.588A4 4 0 1 0 12 18Z"/><path d="M12 5a3 3 0 1 1 5.997.125 4 4 0 0 1 2.526 5.77 4 4 0 0 1-.556 6.588A4 4 0 1 1 12 18Z"/><path d="M15 13a4.5 4.5 0 0 1-3-4 4.5 4.5 0 0 1-3 4"/><path d="M17.599 6.5a3 3 0 0 0 .399-1.375"/><path d="M6.003 5.125A3 3 0 0 0 6.401 6.5"/><path d="M3.477 10.896a4 4 0 0 1 .585-.396"/><path d="M19.938 10.5a4 4 0 0 1 .585.396"/><path d="M6 18a4 4 0 0 1-1.967-.516"/><path d="M19.967 17.484A4 4 0 0 1 18 18"/></svg>',
  layers: '<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83Z"/><path d="m22 17.65-9.17 4.16a2 2 0 0 1-1.66 0L2 17.65"/><path d="m22 12.65-9.17 4.16a2 2 0 0 1-1.66 0L2 12.65"/></svg>',
  target: '<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="6"/><circle cx="12" cy="12" r="2"/></svg>',
  messageCircle: '<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z"/></svg>',
  settings: '<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z"/><circle cx="12" cy="12" r="3"/></svg>',
  logOut: '<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"/><polyline points="16 17 21 12 16 7"/><line x1="21" x2="9" y1="12" y2="12"/></svg>',
  menu: '<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="4" x2="20" y1="12" y2="12"/><line x1="4" x2="20" y1="6" y2="6"/><line x1="4" x2="20" y1="18" y2="18"/></svg>',
  bell: '<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9"/><path d="M10.3 21a1.94 1.94 0 0 0 3.4 0"/></svg>',
  award: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="8" r="6"/><path d="M15.477 12.89 17 22l-5-3-5 3 1.523-9.11"/></svg>',
  graduationCap: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 10v6M2 10l10-5 10 5-10 5z"/><path d="M6 12v5c0 2 2 3 6 3s6-1 6-3v-5"/></svg>',
  trendingUp: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="22 7 13.5 15.5 8.5 10.5 2 17"/><polyline points="16 7 22 7 22 13"/></svg>',
  clock: '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>',
  checkCircle: '<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><path d="m9 11 3 3L22 4"/></svg>',
  xCircle: '<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><path d="m15 9-6 6"/><path d="m9 9 6 6"/></svg>',
  barChart: '<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="12" x2="12" y1="20" y2="10"/><line x1="18" x2="18" y1="20" y2="4"/><line x1="6" x2="6" y1="20" y2="16"/></svg>',
};

// --- Menu items matching AppSidebar ---
const menuItems = [
  { title: "Dashboard", url: "dashboard.html", icon: "layoutDashboard" },
  { title: "Marks & Results", url: "marks.html", icon: "bookOpen" },
  { title: "Assignments", url: "assignments.html", icon: "clipboardList" },
  { title: "Notes & Materials", url: "notes.html", icon: "fileText" },
  { title: "Previous Papers", url: "papers.html", icon: "newspaper" },
  { title: "Exam Schedule", url: "exams.html", icon: "calendarDays" },
  { title: "Practice Exams", url: "practice.html", icon: "brain" },
  { title: "Curriculum", url: "curriculum.html", icon: "layers" },
  { title: "Course Outcomes", url: "course-outcomes.html", icon: "target" },
  { title: "Ask Doubts", url: "doubts.html", icon: "messageCircle" },
  { title: "Analytics", url: "analytics.html", icon: "barChart" },
  { title: "Settings", url: "settings.html", icon: "settings" },
];

// --- Auth ---
function isAuthenticated() {
  return localStorage.getItem('kl_auth') === 'true';
}

function getProfile() {
  const stored = localStorage.getItem('kl_profile');
  if (stored) return JSON.parse(stored);
  return studentProfile;
}

function saveProfile(profile) {
  localStorage.setItem('kl_profile', JSON.stringify(profile));
}

function loginUser(email, password) {
  // Accept any email/password for demo
  if (!email || !password) return { error: "Please fill in all fields" };
  localStorage.setItem('kl_auth', 'true');
  if (!localStorage.getItem('kl_profile')) {
    saveProfile(studentProfile);
  }
  return { error: null };
}

function signupUser(email, password, fullName, rollNumber) {
  if (!email || !password || !fullName || !rollNumber) return { error: "Please fill in all fields" };
  const profile = { ...studentProfile, name: fullName, rollNumber: rollNumber, email: email };
  localStorage.setItem('kl_auth', 'true');
  saveProfile(profile);
  return { error: null };
}

function logoutUser() {
  localStorage.removeItem('kl_auth');
  window.location.href = 'login.html';
}

function requireAuth() {
  if (!isAuthenticated()) {
    window.location.href = 'login.html';
    return false;
  }
  return true;
}

// --- Toast system ---
function showToast(title, description, variant) {
  let container = document.getElementById('toast-container');
  if (!container) {
    container = document.createElement('div');
    container.id = 'toast-container';
    container.className = 'toast-container';
    document.body.appendChild(container);
  }
  const toast = document.createElement('div');
  toast.className = 'toast' + (variant === 'destructive' ? ' toast-destructive' : '');
  toast.innerHTML = `<div class="toast-title">${title}</div>${description ? `<div class="toast-desc">${description}</div>` : ''}`;
  container.appendChild(toast);
  setTimeout(() => { toast.style.opacity = '0'; toast.style.transition = 'opacity 0.3s'; setTimeout(() => toast.remove(), 300); }, 3000);
}

// --- Sidebar ---
function initSidebar() {
  const sidebar = document.getElementById('sidebar');
  const overlay = document.getElementById('sidebar-overlay');
  const toggle = document.getElementById('sidebar-toggle');
  if (!sidebar || !toggle) return;

  // Set active link
  const currentPage = window.location.pathname.split('/').pop() || 'dashboard.html';
  document.querySelectorAll('.sidebar-link[data-page]').forEach(link => {
    if (link.dataset.page === currentPage) link.classList.add('active');
  });

  // Toggle sidebar
  toggle.addEventListener('click', () => {
    if (window.innerWidth < 768) {
      sidebar.classList.toggle('mobile-open');
      overlay?.classList.toggle('active');
    } else {
      sidebar.classList.toggle('collapsed');
    }
  });

  overlay?.addEventListener('click', () => {
    sidebar.classList.remove('mobile-open');
    overlay.classList.remove('active');
  });

  // Set user info in header
  const profile = getProfile();
  const welcomeEl = document.getElementById('welcome-name');
  if (welcomeEl) welcomeEl.textContent = `Welcome back, ${profile.name.split(' ')[0]}`;
  const userNameEl = document.getElementById('user-name');
  if (userNameEl) userNameEl.textContent = profile.name;
  const userRollEl = document.getElementById('user-roll');
  if (userRollEl) userRollEl.textContent = profile.rollNumber;
  const userInitial = document.getElementById('user-initial');
  if (userInitial) userInitial.textContent = profile.name.charAt(0);

  // Logout button
  document.getElementById('logout-btn')?.addEventListener('click', logoutUser);
}

// --- Build sidebar HTML ---
function buildSidebarHTML() {
  const currentPage = window.location.pathname.split('/').pop() || 'dashboard.html';
  let navLinks = menuItems.map(item => {
    const active = item.url === currentPage ? ' active' : '';
    return `<a href="${item.url}" class="sidebar-link${active}" data-page="${item.url}">${icons[item.icon] || ''}<span>${item.title}</span></a>`;
  }).join('');

  return `
    <div class="sidebar-brand">
      <img src="assets/kl-logo.png" alt="KL">
      <div class="sidebar-brand-text">
        <h2>KL University</h2>
        <p>Academic Portal</p>
      </div>
    </div>
    <div class="sidebar-label">Navigation</div>
    <nav class="sidebar-nav">${navLinks}</nav>
    <div class="sidebar-footer">
      <button class="sidebar-link" id="logout-btn">${icons.logOut}<span>Logout</span></button>
    </div>
  `;
}

// --- Build header HTML ---
function buildHeaderHTML() {
  const profile = getProfile();
  return `
    <div class="top-header-left">
      <button class="sidebar-toggle" id="sidebar-toggle">${icons.menu}</button>
      <div class="top-header-welcome" id="welcome-name">Welcome back, ${profile.name.split(' ')[0]}</div>
    </div>
    <div class="top-header-right">
      <button class="notif-btn">${icons.bell}<span class="notif-dot"></span></button>
      <div class="user-info">
        <div class="user-avatar-placeholder" id="user-initial">${profile.name.charAt(0)}</div>
        <div class="user-details">
          <p id="user-name">${profile.name}</p>
          <p id="user-roll">${profile.rollNumber}</p>
        </div>
      </div>
    </div>
  `;
}

// --- Init dashboard layout ---
function initDashboardPage() {
  if (!requireAuth()) return;

  const sidebar = document.getElementById('sidebar');
  const header = document.getElementById('top-header');

  if (sidebar) sidebar.innerHTML = buildSidebarHTML();
  if (header) header.innerHTML = buildHeaderHTML();

  initSidebar();
}

// --- Helper: format date ---
function formatDate(dateStr) {
  const d = new Date(dateStr);
  return d.toLocaleDateString('en-IN', { day: 'numeric', month: 'short' });
}
