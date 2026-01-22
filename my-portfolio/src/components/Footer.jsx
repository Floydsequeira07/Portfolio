export default function Footer() {
  return (
    <footer
      className="
        text-center py-8
        bg-background
        text-muted-foreground
        text-sm sm:text-base
        border-t border-border/60
      "
    >
      <p>
        © {new Date().getFullYear()} FloydJostinSequeira. All Rights Reserved.
      </p>
    </footer>
  );
}
