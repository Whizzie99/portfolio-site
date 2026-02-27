# Lessons Learned

- **Coordinate theme changes with interactive elements**: When changing the global theme background (e.g., removing a large gradient in favor of a flat solid color), always audit interactive components (like `SpotlightItem` or hover effects) that may have been styled to match or contrast with the previous theme. Neon gradients will clash strongly with a flat, dark neutral background if left untouched.
