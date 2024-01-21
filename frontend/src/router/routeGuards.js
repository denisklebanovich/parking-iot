import useUserStore from '../stores/UserStore';

export const isAdmin = async (to, from, next) => {
  const user = await useUserStore().getUser();
  console.log("From isAdmin guard: ", user);
  try {

    if (user.role === 'ADMIN') {
      next();
    } else if (user.role === 'USER') {
      next('/user/parking');
    } else {
      next('/');
    }
  } catch (error) {
    console.error('Error in isAdmin guard:', error);
    next('/');
  }
};

export const isUser = async (to, from, next) => {
  try{
    const user = await useUserStore().getUser();
    console.log("From isUser guard: ", user.role);

    if (user.role === 'USER') {
      next();
    } else if (user.role === 'ADMIN') {
      next('/admin/parking');
    } else {
      next('/');
    } 
  } catch (error) {
    console.error('Error in isUser guard:', error);
    next('/');
  }
};
