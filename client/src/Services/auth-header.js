export default function authHeader() {
    const user = JSON.parse(localStorage.getItem('user'));
  
    if (user && user.accessToken) {
<<<<<<< HEAD
=======
    
>>>>>>> e68475fbae58e011403ca92b65593908f26fc284
      return { 'x-access-token': user.accessToken };
    } else {
      return {};
    }
<<<<<<< HEAD
  }
=======
  } 
>>>>>>> e68475fbae58e011403ca92b65593908f26fc284
