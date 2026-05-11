/* Cold Storage WMS - ERP Shared JS */

/* ── Sidebar toggle (mobile) ─────────────────────────────────── */
function toggleSidebar() {
  const sidebar = document.getElementById('erp-sidebar');
  const overlay = document.getElementById('erp-overlay');
  if (!sidebar || !overlay) return;
  sidebar.classList.toggle('open');
  overlay.classList.toggle('active');
}

function closeSidebar() {
  const sidebar = document.getElementById('erp-sidebar');
  const overlay = document.getElementById('erp-overlay');
  if (!sidebar || !overlay) return;
  sidebar.classList.remove('open');
  overlay.classList.remove('active');
}

/* ── Accordion nav ───────────────────────────────────────────── */
function initNavAccordion() {
  document.querySelectorAll('.erp-nav-parent > .erp-nav-toggle').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const parent = btn.closest('.erp-nav-parent');
      if (!parent) return;
      const group = parent.closest('.erp-nav-group');
      if (group) {
        group.querySelectorAll('.erp-nav-parent.open').forEach(p => {
          if (p !== parent) p.classList.remove('open');
        });
      }
      parent.classList.toggle('open');
    });
  });
}

/* ── Highlight active nav ────────────────────────────────────── */
function highlightActiveNav() {
  const path = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.erp-nav-item').forEach(item => {
    const href = item.getAttribute('href');
    if (href === path || (path === '' && href === 'index.html')) {
      item.classList.add('active');
      const parent = item.closest('.erp-nav-parent');
      if (parent) parent.classList.add('open');
    }
  });
}
