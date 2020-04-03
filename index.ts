export default {
    //字符串转数组
   stringToArray(string:any){
        if(!( typeof(string) =='string')){
           return string
       }
       if(string==''){
           return []
       }
       return string.split(',')
   },
   //数组转字符串
   arrayToString(array:any){
       if(!(array instanceof Array)){
           return array
       }
       if(array==undefined){
           return ''
       }
    if(array ==''||array.length==0){
        return ''
    }
    return array.join(',')
   },
   //校验汇率
   checkExchRate(string:any){
    var strReg = new RegExp(/^(\d|[1-9][0-9]|100|\d\.\d{0,6}|[1-9][0-9]\.\d{0,6})$/)
    if(string != ''){
        if(strReg.test(string.toString())){
            return string
        } else {
            return ""
        }
    }
   },

    //日期大小比较
    compareDate(date:any,date2:any){
        date = date.replace(/-/g, '/')
        date2 = date2.replace(/-/g, '/')
       if(new Date(date) > new Date(date2)){
           return true
       }else{
           return false
       }
    },
    //json转post请求
    encodeSearchParams(obj:any) {
        const params = []
      
        Object.keys(obj).forEach((key) => {
          let value = obj[key]
          // 如果值为undefined我们将其置空
          if (typeof value === 'undefined') {
            value = ''
          }
          // 对于需要编码的文本（比如说中文）我们要进行编码
          params.push([key, encodeURIComponent(value)].join('='))
        })
      
        return params.join('&')
      },
    /**
     * 
     * @param s 传入的数据
     * @param n 小数点后保留数字个数
     */
    formatMoney(s:any,n:number){
        if(s == '' || !s){
            return '0.00'
        }
        if(typeof(s) == 'number'){
            s = s.toString()
        }
        n = n > 0 && n < 10 ? n : 2
        var j = ''
        if(s.substr(0,1) != '-'){
            j = ''
        }else{
            j = '-'
            s = s.substr(1,s.length-1)
        }
        s = parseFloat((s + "").replace(/[^\d\.-]/g, "")).toFixed(n) + "";
        var l = s.split(".")[0].split("").reverse(), r = s.split(".")[1];
        var t = "";
        for (var i = 0; i < l.length; i++) {
            t += l[i] + ((i + 1) % 3 == 0 && (i + 1) != l.length ? "," : "");
        }
        return j + t.split("").reverse().join("") + "." + r;
    },
    //url 传参加密 shiqian
    addPass(d:any){
       return window.btoa(window.encodeURIComponent(JSON.stringify(d)))
    },
    //接受url 传参解密 shiqian
    getPass(d:any){
        return JSON.parse(window.decodeURIComponent(window.atob(d)))

    }
}