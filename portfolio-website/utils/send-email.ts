import toast from 'react-hot-toast';

export async function sendEmail(data, setIsloading) {
  const apiEndpoint = '/api/send';
  setIsloading(true);
  try {
    const response = await fetch(apiEndpoint, {
      method: 'POST',
      body: JSON.stringify(data),
    });
    return response;
  } catch (error) {
    toast.error(error);
  } finally {
    setIsloading(false);
  }
}
