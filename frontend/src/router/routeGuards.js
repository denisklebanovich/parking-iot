import store from '../stores/UserStore'; 

export const isAdmin = (to, from, next) => {
  try {
    const userRole = store.getters['user/userRole'];

    if (userRole === 'ADMIN') {
      next();
    } else if (userRole === 'USER') {
      next('/user/parking');
    } else {
      next('/');
    }
  } catch (error) {
    console.error('Error in isAdmin guard:', error);
    next('/');
  }
};

export const isUser = (to, from, next) => {
  try{
    const userRole = store.getters['user/userRole'];

    if (userRole === 'USER') {
      next();
    } else if (userRole === 'ADMIN') {
      next('/admin/parking');
    } else {
      next('/');
    } 
  } catch (error) {
    console.error('Error in isUser guard:', error);
    next('/');
  }
};
