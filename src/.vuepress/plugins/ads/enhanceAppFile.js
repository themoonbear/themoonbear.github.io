/* global AD_ID */
export default ({ router }) => {
    //ads google
    if (process.env.NODE_ENV === 'production' && AD_ID && typeof window !== 'undefined') {
        (function(){
            var ads = document.createElement("script");
            ads.setAttribute("data-ad-client", AD_ID);
            ads.async = true;
            ads.src = "https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js";
            var s = document.getElementsByTagName("script")[0]; 
            s.parentNode.insertBefore(ads, s);            
        })();               
    }
}