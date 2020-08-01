// Uncomment the line when you are using local and comment it when you are pushing to git

//const base_Url = 'http://localhost:8080/';

const base_Url = "https://sellmobiles-api-javaoct18.azurewebsites.net/dev/";


export const API_URL = {

    home : base_Url,
    cart: base_Url + 'cart',
    feedback: base_Url + 'feedback',
    order: base_Url + 'order',
    product: base_Url + 'product',
    review: base_Url + 'review',
    user: base_Url + 'user',
    role: base_Url + 'role',
    wishlist: base_Url + 'wishlist',
    stats:base_Url+'stats'
    
};
