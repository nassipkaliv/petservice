document.addEventListener('DOMContentLoaded', function() {
  const filterTagsContainer = document.getElementById('filterTags');
  const clearAllBtn = document.getElementById('clearAllFilters');
  const filterDropdown = document.querySelector('.filter-dropdown');
  const filterDropdownBtn = document.querySelector('.filter-dropdown-btn');
  const filterDropdownItems = document.querySelectorAll('.filter-dropdown-item');

  filterDropdownBtn.addEventListener('click', function(e) {
    e.stopPropagation();
    filterDropdown.classList.toggle('open');
  });

  document.addEventListener('click', function(e) {
    if (!filterDropdown.contains(e.target)) {
      filterDropdown.classList.remove('open');
    }
  });
  
  filterDropdownItems.forEach(function(item) {
    item.addEventListener('click', function() {
      const value = this.getAttribute('data-value');
      const text = this.textContent;

      // Update dropdown button text
      document.querySelector('.filter-dropdown-text').textContent = text;

      // Close dropdown
      filterDropdown.classList.remove('open');
    });
  });

  // Clear all filters
  clearAllBtn.addEventListener('click', function() {
    const tags = filterTagsContainer.querySelectorAll('.filter-tag');
    tags.forEach(function(tag) {
      tag.remove();
    });
    updateClearButtonVisibility();
  });

  // Remove single filter tag
  function initRemoveButtons() {
    document.querySelectorAll('.filter-tag-remove').forEach(function(btn) {
      btn.addEventListener('click', function() {
        this.closest('.filter-tag').remove();
        updateClearButtonVisibility();
      });
    });
  }

  // Update clear button visibility
  function updateClearButtonVisibility() {
    const tags = filterTagsContainer.querySelectorAll('.filter-tag');
    clearAllBtn.style.display = tags.length > 0 ? 'block' : 'none';
  }

  // Toggle favorite (starred) button
  function initFavoriteButtons() {
    document.querySelectorAll('.catalog-starred').forEach(function(btn) {
      btn.addEventListener('click', function() {
        this.classList.toggle('active');
      });
    });
  }

  // Initialize
  initRemoveButtons();
  updateClearButtonVisibility();
  initFavoriteButtons();
});
