const axios = require('axios');

// Read secrets from environment variables
const authUser = process.env.AUTH_USER;
const authPass = process.env.AUTH_PASS;

if (!authUser || !authPass) {
  console.error('Missing AUTH_USER or AUTH_PASS environment variables!');
  process.exit(1);
}

console.log('Attempting authentication...');

axios.get(`https://httpbin.org/basic-auth/${authUser}/${authPass}`, {
  auth: {
    username: authUser,
    password: authPass
  }
})
.then(response => {
  console.log('✅ Authentication successful!');
  console.log('Response status:', response.status);
  console.log('Authenticated user:', response.data.authenticated);
})
.catch(error => {
  console.error('❌ Authentication failed!');
  console.error('Error:', error.response?.status || error.message);
  process.exit(1);
});