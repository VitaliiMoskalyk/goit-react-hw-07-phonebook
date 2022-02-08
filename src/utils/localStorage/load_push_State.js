export const loadState = () => {
  try {
    const serializedState = localStorage.getItem('contacts');
    if (serializedState === null) {
      return [];
    }
    return JSON.parse(serializedState);
  } catch (err) {
    return [];
  }
}; 
export const saveState = ({contacts}) => {
  try {
    const serializedState = JSON.stringify(contacts);
    localStorage.setItem('contacts', serializedState);
  } catch {
    // ignore write errors
  }
};