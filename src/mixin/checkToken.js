let check= {
    async beforeCreate(){
        let token = localStorage.getItem('token')
        if(token){
         const res = await this.$http.get(`auth/check/token/${token}`);
         
         if(!res.data.result_state){  //这里不能用code!=200判断，过期的token，也是200
           
             localStorage.setItem('url',location.href)
             var ua = navigator.userAgent.toLowerCase();
             if(ua.match(/MicroMessenger/i)=="micromessenger") {
               this.$router.push('/wlogin')
             } else {
               this.$router.push('/login')
             }
         }
        }else{
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