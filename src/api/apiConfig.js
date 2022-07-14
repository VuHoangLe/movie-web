const apiConfig = {
    baseUrl: 'https://api.themoviedb.org/3/',
    apiKey: 'd589ff6d294bdde5ecbab88ca9956285',
    originalImage: (imgPath) => `https://image.tmdb.org/t/p/original/${imgPath}`,
    w500lImage: (imgPath) => `https://image.tmdb.org/t/p/w500/${imgPath}`,
};

export default apiConfig;
