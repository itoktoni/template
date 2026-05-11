/* Cold Storage WMS - Layout Injection */

const ERP_SIDEBAR_HTML = `
<nav class="erp-sidebar" id="erp-sidebar">
  <div class="erp-sidebar-header">
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none"><rect width="32" height="32" rx="8" fill="#2563eb"/><text x="16" y="22" text-anchor="middle" fill="#fff" font-size="14" font-weight="700" font-family="Inter,sans-serif">CS</text></svg>
    <div>
      <div style="font-size:.875rem;font-weight:700;">Cold Storage</div>
      <div style="font-size:.625rem;color:var(--muted-foreground);">WMS System</div>
    </div>
  </div>
  <div class="erp-sidebar-scroll">
    <div class="erp-nav-group">
      <div class="erp-nav-label">Main</div>
      <a href="index.html" class="erp-nav-item">
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="7" height="9" x="3" y="3" rx="1"/><rect width="7" height="5" x="14" y="3" rx="1"/><rect width="7" height="9" x="14" y="12" rx="1"/><rect width="7" height="5" x="3" y="16" rx="1"/></svg>
        Dashboard
      </a>
    </div>

    <div class="erp-nav-group">
      <div class="erp-nav-label">Inbound</div>
      <a href="grn.html" class="erp-nav-item">
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z"/><path d="m3.3 7 8.7 5 8.7-5"/><path d="M12 22V12"/></svg>
        Penerimaan Barang
      </a>
      <a href="barcode.html" class="erp-nav-item">
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="20" height="5" x="2" y="4" rx="1"/><rect width="2" height="14" x="4" y="9" rx=".5"/><rect width="2" height="14" x="8" y="9" rx=".5"/><rect width="2" height="14" x="12" y="9" rx=".5"/><rect width="2" height="14" x="16" y="9" rx=".5"/><rect width="4" height="5" x="18" y="4" rx="1"/></svg>
        Generate Barcode
      </a>
      <div class="erp-nav-parent">
        <a href="#" class="erp-nav-item erp-nav-toggle">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M15 6v12a3 3 0 1 0 3-3H6a3 3 0 1 0 3 3V6a3 3 0 1 0-3 3h12a3 3 0 1 0-3-3"/></svg>
          Forklift Tasks
        </a>
        <ul class="erp-nav-sub">
          <li><a href="forklift-putaway.html" class="erp-nav-item">Putaway Task</a></li>
          <li><a href="forklift-picking.html" class="erp-nav-item">Picking Task</a></li>
        </ul>
      </div>
      <a href="putaway.html" class="erp-nav-item">
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/><polyline points="3.27 6.96 12 12.01 20.73 6.96"/><line x1="12" y1="22.08" x2="12" y2="12"/></svg>
        Putaway Management
      </a>
    </div>

    <div class="erp-nav-group">
      <div class="erp-nav-label">Outbound</div>
      <a href="goods-issue.html" class="erp-nav-item">
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><line x1="19" y1="8" x2="19" y2="14"/><line x1="22" y1="11" x2="16" y2="11"/></svg>
        Goods Issue (FEFO)
      </a>
      <a href="sales-order.html" class="erp-nav-item">
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/><polyline points="10 9 9 9 8 9"/></svg>
        Sales Order
      </a>
      <a href="work-order.html" class="erp-nav-item">
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
        Work Order
      </a>
      <a href="split-karton.html" class="erp-nav-item">
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="7" height="7"/><rect x="14" y="3" width="7" height="7"/><rect x="3" y="14" width="7" height="7"/><rect x="14" y="14" width="7" height="7"/></svg>
        Split Karton
      </a>
    </div>

    <div class="erp-nav-group">
      <div class="erp-nav-label">Operations</div>
      <a href="retail-potato.html" class="erp-nav-item">
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M7 20h10"/><path d="M10 20c5.5-2.5.8-6.4 3-10"/><path d="M9.5 9.4c1.1.8 1.8 2.2 2.3 3.7-2 .4-3.5.4-4.8-.3-1.2-.6-2.3-1.9-3-4.2 2.8-.5 4.4 0 5.5.8z"/><path d="M14.1 6a7 7 0 0 0-1.1 4c1.9-.1 3.3-.6 4.3-1.4 1-1 1.6-2.3 1.7-4.6-2.7.1-4 1-4.9 2z"/></svg>
        Retail Potato
      </a>
      <a href="cutting.html" class="erp-nav-item">
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="6" cy="6" r="3"/><path d="M8.12 8.12 12 12"/><path d="M20 4 8.12 15.88"/><circle cx="6" cy="18" r="3"/><path d="M14.8 14.8 20 20"/></svg>
        Cutting Service
      </a>
      <a href="movement.html" class="erp-nav-item">
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
        Movement
      </a>
      <a href="pallet.html" class="erp-nav-item">
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="6" width="20" height="12" rx="2"/><path d="M12 12h.01"/><path d="M17 12h.01"/><path d="M7 12h.01"/></svg>
        Pallet Management
      </a>
      <a href="rack.html" class="erp-nav-item">
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="18" height="18" rx="2"/><path d="M3 9h18"/><path d="M3 15h18"/><path d="M9 3v18"/><path d="M15 3v18"/></svg>
        Rack Management
      </a>
    </div>

    <div class="erp-nav-group">
      <div class="erp-nav-label">Inventory</div>
      <a href="stock.html" class="erp-nav-item">
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 12h-4l-3 9L9 3l-3 9H2"/></svg>
        Stock Management
      </a>
      <a href="opname.html" class="erp-nav-item">
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 20h9"/><path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"/></svg>
        Opname Stok
      </a>
      <a href="edit-stok.html" class="erp-nav-item">
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><path d="M14 2v6h6"/><path d="M16 13H8"/><path d="M16 17H8"/><path d="M10 9H8"/></svg>
        Edit Stok
      </a>
    </div>
  </div>
</nav>`;

const ERP_TOPBAR_HTML = `
<div class="erp-topbar">
  <button id="erp-menu-toggle" class="uk-btn uk-btn-ghost uk-btn-icon erp-menu-btn" style="margin-left:-.25rem">
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="18" x2="21" y2="18"/></svg>
  </button>
  <span class="erp-topbar-title" id="page-title">Cold Storage WMS</span>
  <div style="display:flex;align-items:center;gap:.5rem;">
    <span class="uk-badge uk-badge-secondary" style="font-size:.625rem;">Supervisor</span>
    <div class="uk-avatar" style="width:1.75rem;height:1.75rem;font-size:.625rem;background:var(--primary);color:var(--primary-foreground);">AD</div>
  </div>
</div>`;

function initERPlayout(title) {
  // Inject sidebar
  const sidebarSlot = document.getElementById('erp-sidebar-slot');
  if (sidebarSlot) sidebarSlot.innerHTML = ERP_SIDEBAR_HTML;

  // Inject topbar
  const topbarSlot = document.getElementById('erp-topbar-slot');
  if (topbarSlot) {
    topbarSlot.innerHTML = ERP_TOPBAR_HTML;
    if (title) {
      const t = document.getElementById('page-title');
      if (t) t.textContent = title;
    }
  }

  // Bind menu toggle button (now that it exists in DOM)
  const menuBtn = document.getElementById('erp-menu-toggle');
  if (menuBtn) {
    menuBtn.addEventListener('click', function() {
      const sidebar = document.getElementById('erp-sidebar');
      const overlay = document.getElementById('erp-overlay');
      if (sidebar) sidebar.classList.toggle('open');
      if (overlay) overlay.classList.toggle('active');
    });
  }

  // Init nav
  initNavAccordion();
  highlightActiveNav();
}
