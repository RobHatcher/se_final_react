const mockAuthService = {
  // Simulate network delay
  delay: (ms) => new Promise((resolve) => setTimeout(resolve, ms)),

  // Mock user storage
  users: [],

  setToken: (token) => {
    localStorage.setItem("auth-token", token);
  },

  getToken: () => {
    return localStorage.getItem("auth-token");
  },

  // Mock user registration
  register: async (email, password, name) => {
    await mockAuthService.delay(800);

    // Check if user already exists
    if (mockAuthService.users.find((user) => user.email === email)) {
      throw new Error("User already exists");
    }

    const newUser = {
      _id: Date.now().toString(),
      email,
      password,
      name,
    };

    mockAuthService.users.push(newUser);

     // Generate and store token (similar to login)
     const token = `mock-token-${newUser._id}`;
     mockAuthService.setToken(token);
 
     // Return both user and token (similar to login)
     return {
         token: token,
         user: {
             _id: newUser._id,
             email: newUser.email,
             name: newUser.name
         }
     };
 },
  

  // Mock login
  login: async (email, password) => {
    await mockAuthService.delay(800);

    const user = mockAuthService.users.find((u) => u.email === email);
    if (!user) {
      throw new Error("User not found");
    }

    // Generate the token
    const token = `mock-token-${user._id}`;

    // Store the token using setToken
    mockAuthService.setToken(token);

    return {
      token: token,
      user: user,
    };
  },

  // Mock logout
  logout: async () => {
    await mockAuthService.delay(300);
    mockAuthService.setToken(null);
    return true;
},
};

export default mockAuthService;
