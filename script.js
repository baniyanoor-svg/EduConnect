// ===== Dark Mode Toggle =====
const darkToggleBtn = document.createElement('button');
darkToggleBtn.innerText = '🌙 Dark Mode';
darkToggleBtn.style.position = 'fixed';
darkToggleBtn.style.bottom = '20px';
darkToggleBtn.style.right = '20px';
darkToggleBtn.style.padding = '10px 15px';
darkToggleBtn.style.background = '#1e3a8a';
darkToggleBtn.style.color = 'white';
darkToggleBtn.style.border = 'none';
darkToggleBtn.style.borderRadius = '8px';
darkToggleBtn.style.cursor = 'pointer';
darkToggleBtn.style.zIndex = '1000';
document.body.appendChild(darkToggleBtn);

darkToggleBtn.addEventListener('click', () => {
  document.body.classList.toggle('dark-mode');
  if (document.body.classList.contains('dark-mode')) {
    darkToggleBtn.innerText = '☀️ Light Mode';
  } else {
    darkToggleBtn.innerText = '🌙 Dark Mode';
  }
});

// ===== Sidebar Active Link Highlight =====
const sidebarLinks = document.querySelectorAll('.sidebar ul li a');
sidebarLinks.forEach(link => {
  link.addEventListener('click', () => {
    sidebarLinks.forEach(l => l.classList.remove('active'));
    link.classList.add('active');
  });
});

// ===== Dark Mode Styles =====
const darkModeStyle = document.createElement('style');
darkModeStyle.innerHTML = `
  body.dark-mode {
    background: #1f2937;
    color: white;
  }
  body.dark-mode .sidebar {
    background: #111827;
  }
  body.dark-mode .sidebar ul li a,
  body.dark-mode .sidebar h2 {
    color: white;
  }
  body.dark-mode .sidebar ul li a:hover,
  body.dark-mode .sidebar ul li a.active {
    background: #2563eb;
  }
  body.dark-mode .main-content {
    background: #1f2937;
    color: white;
  }
  body.dark-mode table,
  body.dark-mode .profile,
  body.dark-mode .notice,
  body.dark-mode .card {
    background: #374151;
    color: white;
    border-color: #555;
  }
`;
document.head.appendChild(darkModeStyle);

// ===== Optional: Welcome Alert =====
window.addEventListener('load', () => {
  setTimeout(() => {
    if (window.location.pathname.includes('dashboard.html')) {
      alert('👋 Welcome to EduConnect Student Portal!');
    }
  }, 500);
});