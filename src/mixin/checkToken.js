let check= {
    async beforeCreate(){
        let token = localStorage.getItem('token')
         const res = await this.$http.get(`auth/check/token/${token}`);
         if(res.code!=200){
          
             localStorage.setItem('url',location.href)
             var ua = navigator.userAgent.toLowerCase();
             if(ua.match(/MicroMessenger/i)=="micromessenger") {
               this.$router.push('/wlogin')
             } else {
               this.$router.push('/login')
             }
         }
     }
}
export default check