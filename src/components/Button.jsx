function Button({ children, className = "", size = "md" }) {
  const sizes = {
    sm: "px-3 py-1 text-sm",
    md: "px-5 py-2",
    lg: "px-7 py-3 text-lg",
  };

  return (
    <button
      className={`rounded-full bg-accent text-background font-medium transition-colors hover:bg-accent-light ${sizes[size]} ${className}`}
    >
      <span>{children}</span>
    </button>
  );
}

export default Button;
