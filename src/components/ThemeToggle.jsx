function ThemeToggle({ isLight, onToggle }) {
  return (
    <button
      type="button"
      onClick={onToggle}
      aria-label={isLight ? "Switch to dark mode" : "Switch to light mode"}
      className="flex items-center justify-center p-2 rounded-full cursor-pointer transition-colors duration-200 hover:bg-accent hover:text-background"
    >
      <span className="material-symbols-outlined text-xl">
        {isLight ? "dark_mode" : "light_mode"}
      </span>
    </button>
  );
}

export default ThemeToggle;
