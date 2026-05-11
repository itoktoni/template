/* Cold Storage WMS - ERP Shared JS */
/* ── Tom Select init ─────────────────────────────────────────── */
function initTomSelect(selector, options = {}) {
  if (typeof TomSelect === 'undefined') return;
  const el = document.querySelector(selector);
  if (!el || el.tomselect) return;
  new TomSelect(el, {
    create: false,
    sortField: { field: 'text', direction: 'asc' },
    plugins: ['clear_button'],
    ...options
  });
}

function initAllTomSelect(selectors) {
  selectors.forEach(s => initTomSelect(s));
}

/* ── Autocomplete Input ─────────────────────────────────────── */
function initAutocomplete(inputSelector, data, onSelect) {
  const input = document.querySelector(inputSelector);
  if (!input) return;

  const wrapper = input.closest('.erp-autocomplete') || input.parentElement;
  let resultsEl = wrapper?.querySelector('.erp-autocomplete-results');
  if (!resultsEl) {
    resultsEl = document.createElement('div');
    resultsEl.className = 'erp-autocomplete-results';
    wrapper.appendChild(resultsEl);
  }

  let activeIdx = -1;
  let selectedData = null;

  input.addEventListener('input', () => {
    const q = input.value.toLowerCase().trim();
    if (!q) {
      resultsEl.classList.remove('show');
      return;
    }

    const matches = data.filter(d => {
      const label = typeof d === 'string' ? d : d.label || d.name || d.text || '';
      return label.toLowerCase().includes(q);
    }).slice(0, 8);

    if (!matches.length) {
      resultsEl.innerHTML = '<div class="result-item" style="color:var(--muted-foreground);cursor:default;">Tidak ada hasil</div>';
      resultsEl.classList.add('show');
      return;
    }

    activeIdx = -1;
    resultsEl.innerHTML = matches.map((m, i) => {
      const label = typeof m === 'string' ? m : m.label || m.name || m.text || '';
      const desc = m.desc || m.description || m.code || '';
      return `<div class="result-item" data-idx="${i}" data-value='${JSON.stringify(m).replace(/'/g, "'")}'>
        <span>${label}</span>
        ${desc ? `<span class="result-desc">${desc}</span>` : ''}
      </div>`;
    }).join('');

    resultsEl.classList.add('show');
  });

  resultsEl.addEventListener('click', (e) => {
    const item = e.target.closest('.result-item');
    if (!item || item.style.cursor === 'default') return;
    const val = JSON.parse(item.dataset.value);
    input.value = typeof val === 'string' ? val : (val.label || val.name || val.text || '');
    selectedData = val;
    if (onSelect) onSelect(val);
    resultsEl.classList.remove('show');
  });

  input.addEventListener('keydown', (e) => {
    const items = resultsEl.querySelectorAll('.result-item[data-idx]');
    if (!resultsEl.classList.contains('show') || !items.length) return;

    if (e.key === 'ArrowDown') {
      e.preventDefault();
      activeIdx = Math.min(activeIdx + 1, items.length - 1);
      items.forEach((it, i) => it.classList.toggle('active', i === activeIdx));
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      activeIdx = Math.max(activeIdx - 1, 0);
      items.forEach((it, i) => it.classList.toggle('active', i === activeIdx));
    } else if (e.key === 'Enter' && activeIdx >= 0) {
      e.preventDefault();
      items[activeIdx].click();
    } else if (e.key === 'Escape') {
      resultsEl.classList.remove('show');
    }
  });

  document.addEventListener('click', (e) => {
    if (!wrapper.contains(e.target)) {
      resultsEl.classList.remove('show');
    }
  });

  return { getSelected: () => selectedData };
}

/* ── Checkbox Group Toggle ─────────────────────────────────── */
function initCheckboxGroup(groupSelector) {
  const group = document.querySelector(groupSelector);
  if (!group) return;

  group.querySelectorAll('.erp-checkbox-item').forEach(item => {
    const cb = item.querySelector('input[type="checkbox"]');
    if (!cb) return;

    const sync = () => {
      item.classList.toggle('checked', cb.checked);
    };
    cb.addEventListener('change', sync);
    sync();
  });
}

/* ── Filter Chips (tags with remove) ──────────────────────── */
function addFilterChip(containerSelector, label, value, onRemove) {
  const container = document.querySelector(containerSelector);
  if (!container) return;

  const chip = document.createElement('span');
  chip.className = 'erp-filter-chip active';
  chip.innerHTML = `${label}<span class="chip-remove" title="Hapus">&times;</span>`;
  chip.querySelector('.chip-remove').addEventListener('click', () => {
    chip.remove();
    if (onRemove) onRemove(value);
  });
  container.appendChild(chip);
  return chip;
}

function clearFilterChips(containerSelector) {
  const container = document.querySelector(containerSelector);
  if (container) container.innerHTML = '';
}

/* ── Range Slider with Value Display ───────────────────────── */
function initRangeSlider(sliderSelector, displaySelector) {
  const slider = document.querySelector(sliderSelector);
  const display = document.querySelector(displaySelector);
  if (!slider) return;

  const sync = () => {
    if (display) display.textContent = slider.value;
  };
  slider.addEventListener('input', sync);
  sync();
}

/* ── Date range helpers ────────────────────────────────────── */
function getDateRange(daysBack = 30) {
  const end = new Date();
  const start = new Date();
  start.setDate(start.getDate() - daysBack);
  return {
    start: start.toISOString().split('T')[0],
    end: end.toISOString().split('T')[0]
  };
}

function formatDate(dateStr) {
  if (!dateStr) return '—';
  const d = new Date(dateStr);
  return d.toLocaleDateString('id-ID', { day: '2-digit', month: 'short', year: 'numeric' });
}

/* ── Debounce utility ──────────────────────────────────────── */
function debounce(fn, delay = 300) {
  let timer;
  return (...args) => {
    clearTimeout(timer);
    timer = setTimeout(() => fn(...args), delay);
  };
}

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
