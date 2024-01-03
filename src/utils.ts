export const getNews = (type: string, categories: string) => {
  const params: Params = {
    api_token: "akN2tXzLDH04GCMhETGeDz7GICQIQKU8Gm8JWUfA",
    categories,
    search: "",
    limit: "3",
    language: "en",
  };

  const query = Object.keys(params)
    .map(function (k) {
      return esc(k) + "=" + esc(params[k]);
    })
    .join("&");

  return fetch(url + type + "?" + query, requestOptions)
    .then((response) => response.json())
    .then((result) => result)
    .catch((error) => {
      console.log("error", error);
      throw error;
    });
};

const requestOptions = {
  method: "GET",
};

const url = "https://api.thenewsapi.com/v1/news/";
interface Params {
  api_token: string;
  categories: string;
  search: string;
  limit: string;
  [key: string]: string;
}

const params: Params = {
  api_token: "akN2tXzLDH04GCMhETGeDz7GICQIQKU8Gm8JWUfA",
  categories: "business, tech, sport, food, entertaiment, science",
  search: "",
  limit: "3",
  language: "en",
};

const esc = encodeURIComponent;

export const beautifyDate = (date: string): string => {
  return new Date(date).toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
  });
};
