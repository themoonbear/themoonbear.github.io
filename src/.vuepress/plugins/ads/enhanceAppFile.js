/* global AD_ID */
export default ({ router }) => {
    //ads google
    if (process.env.NODE_ENV === 'production' && AD_ID && typeof window !== 'undefined') {
        (function(){
            var ads = document.createElement("script");
            ads.src = "https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js";
            ads.async = true;
            ads.setAttribute("data-ad-client", AD_ID);
            var head = document.getElementsByTagName("head")[0]; 
            head.appendChild(ads);
        })();               
    }
}