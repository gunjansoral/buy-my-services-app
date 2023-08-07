export const serviceResponse = (services) => {
  let serviceResponse = [];

  services.forEach(service => {
    const { title, description, price, availability } = service;
    serviceResponse.push({
      title, description, price, availability
    })
  });

  return serviceResponse;
}