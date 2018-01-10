/*
*  Created by lcn on 2017/12/21
*/
/**
 * @param {string} s
 * @param {string} p
 * @return {boolean}
 */

/*
*
* var s = "asdf";
* 读取字符串中指定下标的 字符是，， 可以用
* s[0]也可以用 s.charAt(0)
* 两者区别是
* 如果读取的下标不在 [0,s.length-1] 范围内的时候
* s[0] 这种方式返回的是 undefined
* s.charAt(0)  返回的是 ""  即空字符串
* */
var isMatch = function (s, p) {

    if (p === ".*") {
        return true;
    }
    if (p[0]) {

    }
    var flag_s = 0;
    var flag_p = 0;
    while (1) {
        if(p[flag_p + 1]){
            if (p[flag_p + 1] === "*") {
                if(p[flag_p] === "."){
                    if(p[flag_p+2]){
                        while (1){

                        }
                    } else {
                        return true;
                    }
                }else {
                    if(s[flag_s] === p[flag_p]){
                        flag_p++;
                        flag_s++;
                    }else {
                        return false;
                    }
                }
            }else {
                if(p[flag_p] === "."){
                    flag_p++;
                    flag_s++;
                }else {
                    if(s[flag_s] === p[flag_p]){
                        flag_p++;
                        flag_s++;
                    }else {
                        return false;
                    }
                }

            }

        }
    }
    /*
    *
    * p
    *
    * c *
    * . *
    *
    * */
    /* for(var i =0; i < s.length;i++){
         var temp = p[flag2];
         if(temp === "."){
             if(p[flag2+1] === "*"){

             }
         }else if(temp === "*"){

         }else{
             if(p[flag2+1] === "*"){

             }
         }
     }*/
};


console.log(isMatch("asd", " *sd"));

//偷懒了
/*
function is(s, p) {
    var reg = new RegExp("^" + p + "$");
    return reg.test(s)
}*/
