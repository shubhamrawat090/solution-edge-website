export const handleNavigation = (
  navigate: (arg0: string) => void,
  id: string,
  route: string = "home"
) => {
  // Check if home component exists in the DOM
  const homeComponent = document.getElementById(route);
  if (!homeComponent) {
    // If home component doesn't exist, redirect to home first
    if (!route.trim() || route === "home") {
      navigate("/");
    } else {
      navigate(`/${route}`);
    }
  }
  // Delay navigation to ensure the home component is rendered before navigating to the child div
  setTimeout(() => {
    const childElement = document.getElementById(id);
    if (childElement) {
      childElement.scrollIntoView({ behavior: "smooth" });
    }
  }, 100); // Adjust the delay time as needed
};
