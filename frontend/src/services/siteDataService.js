const defaultSiteData = {
  contacts: {
    phone: '+7 (777) 777-77-77',
    email: 'info@example.com',
    address: 'г. Алматы, ул. Примерная, 123',
  },
  services: [
    {
      id: 1,
      title: 'Эвакуация легковых автомобилей',
      price: '5000',
      description: 'Быстрая и безопасная эвакуация легковых автомобилей любой марки',
    },
    {
      id: 2,
      title: 'Эвакуация внедорожников',
      price: '7000',
      description: 'Эвакуация внедорожников и кроссоверов с любой местности',
    },
    {
      id: 3,
      title: 'Эвакуация спецтехники',
      price: '10000',
      description: 'Эвакуация тяжелой техники и грузовых автомобилей',
    },
  ],
};

// Инициализация данных при первом запуске
if (!localStorage.getItem('siteData')) {
  localStorage.setItem('siteData', JSON.stringify(defaultSiteData));
}

// Получение всех данных сайта
export const getSiteData = () => {
  return JSON.parse(localStorage.getItem('siteData'));
};

// Обновление контактных данных
export const updateContacts = (contacts) => {
  const siteData = getSiteData();
  siteData.contacts = contacts;
  localStorage.setItem('siteData', JSON.stringify(siteData));
  return siteData;
};

// Получение списка услуг
export const getServices = () => {
  return getSiteData().services;
};

// Добавление новой услуги
export const addService = (service) => {
  const siteData = getSiteData();
  const newService = {
    ...service,
    id: Date.now(),
  };
  siteData.services.push(newService);
  localStorage.setItem('siteData', JSON.stringify(siteData));
  return newService;
};

// Обновление существующей услуги
export const updateService = (serviceId, updatedService) => {
  const siteData = getSiteData();
  siteData.services = siteData.services.map(service =>
    service.id === serviceId ? { ...service, ...updatedService } : service
  );
  localStorage.setItem('siteData', JSON.stringify(siteData));
  return siteData.services;
};

// Удаление услуги
export const deleteService = (serviceId) => {
  const siteData = getSiteData();
  siteData.services = siteData.services.filter(service => service.id !== serviceId);
  localStorage.setItem('siteData', JSON.stringify(siteData));
  return siteData.services;
}; 