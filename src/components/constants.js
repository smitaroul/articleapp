var API_KEY    = 'cd0729599c734127b1c2a8c7cf7d0b6f',
    COUNTRY    = 'us',
    API_HOST   = 'https://newsapi.org/v2/',
    NEW_APILIST = {
        'default'    : `${API_HOST}top-headlines?country=${COUNTRY}&apiKey=${API_KEY}`,
        'bbc-news'   : `${API_HOST}top-headlines?sources=bbc-news&apiKey=${API_KEY}`,
        'business'   : `${API_HOST}top-headlines?country=${COUNTRY}&category=business&apiKey=${API_KEY}`,
        'techcrunch' : `${API_HOST}everything?domains=techcrunch.com,thenextweb.com&apiKey=${API_KEY}`
    };
    


module.exports = {
    NEW_APILIST     : NEW_APILIST
};
