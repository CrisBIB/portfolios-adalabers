const getCard = () => {
  return fetch(`http://localhost:3001/card/:id:/`)
    .then((response) => response.json())
    .then((data) => {
      return data;
    });
};

const sendCard = (data) => {
  return fetch(`http://localhost:3001/card`, {
    method: "POST",
    body: JSON.stringify(data),
    headers: { "Content-Type": "application/json" },
  })
    .then((response) => response.json())
    .then((data) => {
      return data;
    });
};
