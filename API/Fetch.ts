export const GET = async (api_url: string) => {
  const response = await $fetch(api_url);
  return response;
};
