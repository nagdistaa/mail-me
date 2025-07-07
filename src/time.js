const getTimeNow = () => {
  const now = new Date();

  const hour = now.getHours() % 12 || 12; 
  const minute = now.getMinutes();
  const second = now.getSeconds();
  const today = now.getDate();
  const month = now.getMonth() + 1; 
  const year = now.getFullYear();

  const date = { hour, minute, second, today, month, year };

  return date;
};

export default getTimeNow;
