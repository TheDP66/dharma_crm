export const EditData = (data, id, prod) => {
  const newData = data.map((item) => (item.id === id ? prod : item));
  return newData;
};

export const DeleteData = (data, id) => {
  const newData = data.filter((item) => item.id !== id);
  return newData;
};
