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
    scrollToElement(id);
  }, 100); // Adjust the delay time as needed
};

const scrollToElement = (id: string) => {
  const childElement = document.getElementById(id);
  if (childElement) {
    /*
      NOTE: 
      Normally this function would auto-scroll a little below the target element.
      So, this is some calculation to set the y-coordinate of scroll to be a little above the target element.
    */
    const rect = childElement.getBoundingClientRect();
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    const targetY =
      rect.top +
      scrollTop -
      8 * parseFloat(getComputedStyle(document.documentElement).fontSize);
    window.scrollTo({ top: targetY, behavior: "smooth" });
  }
};
