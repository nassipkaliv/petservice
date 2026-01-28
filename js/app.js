document.addEventListener('DOMContentLoaded', function() {
  const filterTagsContainer = document.getElementById('filterTags');
  const clearAllBtn = document.getElementById('clearAllFilters');
  const filterDropdowns = document.querySelectorAll('.filter-dropdown');

  filterDropdowns.forEach(function(dropdown) {
    const btn = dropdown.querySelector('.filter-dropdown-btn');
    const items = dropdown.querySelectorAll('.filter-dropdown-item');
    const textEl = dropdown.querySelector('.filter-dropdown-text');

    btn.addEventListener('click', function(e) {
      e.stopPropagation();
      filterDropdowns.forEach(function(d) {
        if (d !== dropdown) d.classList.remove('open');
      });
      dropdown.classList.toggle('open');
    });

    items.forEach(function(item) {
      item.addEventListener('click', function() {
        const text = this.textContent;
        if (textEl) textEl.textContent = text;
        dropdown.classList.remove('open');
      });
    });
  });

  document.addEventListener('click', function(e) {
    filterDropdowns.forEach(function(dropdown) {
      if (!dropdown.contains(e.target)) {
        dropdown.classList.remove('open');
      }
    });
  });

  clearAllBtn.addEventListener('click', function() {
    const tags = filterTagsContainer.querySelectorAll('.filter-tag');
    tags.forEach(function(tag) {
      tag.remove();
    });
    updateClearButtonVisibility();
  });

  function initRemoveButtons() {
    document.querySelectorAll('.filter-tag-remove').forEach(function(btn) {
      btn.addEventListener('click', function() {
        this.closest('.filter-tag').remove();
        updateClearButtonVisibility();
      });
    });
  }

  function updateClearButtonVisibility() {
    const tags = filterTagsContainer.querySelectorAll('.filter-tag');
    clearAllBtn.style.display = tags.length > 0 ? 'block' : 'none';
  }

  function initFavoriteButtons() {
    document.querySelectorAll('.catalog-starred').forEach(function(btn) {
      btn.addEventListener('click', function() {
        this.classList.toggle('active');
      });
    });
  }

  initRemoveButtons();
  updateClearButtonVisibility();
  initFavoriteButtons();

  const catalogDropdownWrapper = document.querySelector('.catalog-dropdown-wrapper');
  const headCatalogBtn = document.querySelector('.head-catalog-btn');
  const catalogOverlay = document.querySelector('.catalog-mega-overlay');

  if (headCatalogBtn && catalogDropdownWrapper) {
    headCatalogBtn.addEventListener('click', function(e) {
      e.stopPropagation();
      catalogDropdownWrapper.classList.toggle('open');
      if (catalogOverlay) {
        catalogOverlay.classList.toggle('active');
      }
    });

    if (catalogOverlay) {
      catalogOverlay.addEventListener('click', function() {
        catalogDropdownWrapper.classList.remove('open');
        catalogOverlay.classList.remove('active');
      });
    }

    document.addEventListener('click', function(e) {
      if (!catalogDropdownWrapper.contains(e.target)) {
        catalogDropdownWrapper.classList.remove('open');
        if (catalogOverlay) {
          catalogOverlay.classList.remove('active');
        }
      }
    });
  }

  // Address Modal
  const addressModal = document.getElementById('addressModal');
  const addressModalClose = document.getElementById('addressModalClose');
  const headerAddress = document.querySelector('.header-address');

  if (headerAddress && addressModal) {
    headerAddress.addEventListener('click', function() {
      addressModal.classList.add('active');
      document.body.classList.add('modal-open');
    });
  }

  if (addressModalClose && addressModal) {
    addressModalClose.addEventListener('click', function() {
      addressModal.classList.remove('active');
      document.body.classList.remove('modal-open');
    });
  }

  if (addressModal) {
    addressModal.addEventListener('click', function(e) {
      if (e.target === addressModal) {
        addressModal.classList.remove('active');
        document.body.classList.remove('modal-open');
      }
    });

    const contractOptions = addressModal.querySelectorAll('.contract-option');
    contractOptions.forEach(function(option) {
      option.addEventListener('click', function() {
        contractOptions.forEach(function(opt) {
          opt.classList.remove('active');
        });
        this.classList.add('active');
      });
    });
  }

  // Mobile Filters Popup
  const mobileFiltersPopup = document.getElementById('mobileFiltersPopup');
  const mobileFiltersBody = document.getElementById('mobileFiltersBody');
  const mobileFiltersBtn = document.getElementById('mobileFiltersBtn');
  const mobileFiltersClose = document.getElementById('mobileFiltersClose');
  const mobileFiltersApply = document.getElementById('mobileFiltersApply');
  const mobileFiltersOverlay = document.querySelector('.mobile-filters-popup-overlay');
  const mainContainerCategory = document.querySelector('.main-container-category');

  if (mainContainerCategory && mobileFiltersBody) {
    mobileFiltersBody.insertAdjacentHTML('afterbegin', mainContainerCategory.innerHTML);
  }

  function openMobileFilters() {
    if (mobileFiltersPopup) {
      mobileFiltersPopup.classList.add('active');
      document.body.style.overflow = 'hidden';
    }
  }

  function closeMobileFilters() {
    if (mobileFiltersPopup) {
      mobileFiltersPopup.classList.remove('active');
      document.body.style.overflow = '';
    }
  }

  if (mobileFiltersBtn) {
    mobileFiltersBtn.addEventListener('click', function(e) {
      e.stopPropagation();
      openMobileFilters();
    });
  }

  if (mobileFiltersClose) {
    mobileFiltersClose.addEventListener('click', closeMobileFilters);
  }

  if (mobileFiltersOverlay) {
    mobileFiltersOverlay.addEventListener('click', closeMobileFilters);
  }

  if (mobileFiltersApply) {
    mobileFiltersApply.addEventListener('click', closeMobileFilters);
  }
});
