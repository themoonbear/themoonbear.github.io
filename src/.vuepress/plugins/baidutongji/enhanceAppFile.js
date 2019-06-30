/* global BA_ID */
export default ({ router }) => {
    // Baidu analytics integration
    if (process.env.NODE_ENV === 'production' && BA_ID && typeof window !== 'undefined') {
        var _hmt = _hmt || [];
        (function() {
            var hm = document.createElement("script");
            hm.src = "https://hm.baidu.com/hm.js?" + BA_ID;
            var s = document.getElementsByTagName("script")[0]; 
            s.parentNode.insertBefore(hm, s);
        })();
        router.afterEach(function (to) {
            _hmt.push(['_trackPageview', to.fullPath]);
        });                
    }
}
    
    