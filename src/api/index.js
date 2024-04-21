const APIBASE = "http://localhost:8080";

export const ApiSetPoint = async (phoneNumber) => {
  const resp = await fetch(
    `${APIBASE}/api/hansei/member/${phoneNumber}/point`,
    {
      method: "POST",
      body: JSON.stringify({
        point: 100,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    }
  );
  return await resp.json();
};

export const ApiLogin = async (phoneNumber, password) => {
  const resp = await fetch(`${APIBASE}/api/hansei/login`, {
    method: "POST",
    body: JSON.stringify({
      phoneNumber,
      password,
    }),
    headers: {
      "Content-Type": "application/json",
    },
  });
  return await resp.json();
};

export const ApiJoin = async (obj) => {
  const resp = await fetch(`${APIBASE}/api/hansei/member`, {
    method: "POST",
    body: JSON.stringify(obj),
    headers: {
      "Content-Type": "application/json",
    },
  });
  return await resp.json();
};

export const ApiProducts = async () => {
  const resp = await fetch(`${APIBASE}/api/hansei/products`, {
    method: "GET",
  });
  return await resp.json();
};

export const ApiCurrentPoint = async (memberId) => {
  const resp = await fetch(`${APIBASE}/api/hansei/member/${memberId}/point`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });
  return await resp.json();
};

export const ApiOrder = async (memberId, product_id) => {
  const resp = await fetch(`${APIBASE}/api/hansei/member/${memberId}/order`, {
    method: "POST",
    body: JSON.stringify({
      productId: product_id,
    }),
    headers: {
      "Content-Type": "application/json",
    },
  });
  return await resp.json();
};

export const ApiBuyProducts = async (memberId) => {
  const resp = await fetch(`${APIBASE}/api/hansei/member/${memberId}/orders`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });
  return await resp.json();
};

export const ApiDeleteOrder = async (memberId, orderId) => {
  const resp = await fetch(
    `${APIBASE}/api/hansei/user/${memberId}/order/${orderId}`,
    {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    }
  );
  return await resp.json();
};
