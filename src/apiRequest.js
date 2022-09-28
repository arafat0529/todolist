const apiRequest = async (
  url = 'https://react-getting-started-f489f-default-rtdb.firebaseio.com/todo.json',
  optionsObj = null,
  errMsg = null
) => {
  try {
    const response = await fetch(url, optionsObj);
    if (!response.ok) throw Error('Please reload the app');
  } catch (error) {
    errMsg = error.message;
  } finally {
    return errMsg;
  }
};

export default apiRequest;
