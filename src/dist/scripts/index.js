const sidebar = {
  open: () => {
    document.getElementById('sidebar').style.display = 'block';
  },
  close: () => {
    document.getElementById('sidebar').style.display = 'none';
  },
};

document.addEventListener('DOMContentLoaded', () => {
  document.getElementById('menubars').addEventListener('click', sidebar.open);
  document.querySelectorAll('.closeSidebarBtn').forEach(htmlElt => {
    htmlElt.addEventListener('click', sidebar.close);
  });
});