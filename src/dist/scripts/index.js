const sidebar = {
  open: () => {
    document.getElementById('sidebar').style.display = 'block';
  },
  close: () => {
    document.getElementById('sidebar').style.display = 'none';
  },
};

// Add event listeners when the document is ready
document.addEventListener('DOMContentLoaded', () => {
  document.getElementById('menubars').addEventListener('click', sidebar.open);
  document.getElementById('closeSidebarBtn').addEventListener('click', sidebar.close);
});