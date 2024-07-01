// Define the currentUser variable
const currentUser = "Alice";

// Define the welcomeMessage variable
const welcomeMessage = `Welcome to Flatbook, ${currentUser}!`;

// Define the excitedWelcomeMessage variable
const excitedWelcomeMessage = welcomeMessage.toUpperCase();

// Define the shortGreeting variable
const shortGreeting = `Welcome, ${currentUser.charAt(0)}!`;

// Export the variables if needed (depending on your test setup)
module.exports = {
  currentUser,
  welcomeMessage,
  excitedWelcomeMessage,
  shortGreeting
};
