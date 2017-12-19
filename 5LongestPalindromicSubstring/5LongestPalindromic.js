/*
*  Created by lcn on 2017/12/8
*/
/*
* 第一次提交 当字符串长 而回文字符串短的时候耗时太长  提交失败
*
* */
/**
 * @param {string} s
 * @return {string}
 */
function longestPalindrome(s) {
    var len = s.length;
    if (len < 2) {
        return s;
    }
    var max = 0;  //保存最长的回文字符串
    var flag = 0; //如果某个长度都没又找到  说明没有更长的了
    var r = 0;    //用于记录字符串开始位置
    //第一次搜索长度为奇数的最长的的回文字符串
    for (var i = 1; i <= len; i = i + 2) {
        flag = 0;
        for (var j = r; j <= len - i; j++) {
            var m = s.substr(j, i);
            console.log(m.length);
            if (test(m)) {

                max = m;
                flag = 1;
                if (j >= 1) {
                    j--;
                }
                r = j;
                break;
            }
        }
        if (!flag) {
            //有一个奇数长度没搜到，，说明没有更长的 长度为 奇数的回文字符串了
            break;
        }
    }
    //最长的奇数长度的回文字符串 加 1 开始查找 偶数长度的回文字符串
    r = 0;
    for (var i = max.length + 1; i <= len; i = i + 2) {
        flag = 0;
        for (var j = r; j <= len - i; j++) {
            var m = s.substr(j, i);
            if (test(m)) {
                max = m;
                flag = 1;
                if (j >= 1) {
                    j--;
                }
                r = j;
                break;
            }
        }
        if (!flag) {
            break;
        }
    }
    return max;
}
var test = function (s) {
    var len = s.split("").reverse().join("");
    return len === s;
};

console.time("liu");
//console.log(longestPalindrome3("civilwartestingwhetherthatnaptionoranynartionsoconceivedandsodedicatedcanlongendureWeareqmetonagreatbattlefiemldoftzhatwarWehavecometodedicpateaportionofthatfieldasafinalrestingplaceforthosewhoheregavetheirlivesthatthatnationmightliveItisaltogetherfangandproperthatweshoulddothisButinalargersensewecannotdedicatewecannotconsecratewecannothallowthisgroundThebravelmenlivinganddeadwhostruggledherehaveconsecrateditfaraboveourpoorponwertoaddordetractTgheworldadswfilllittlenotlenorlongrememberwhatwesayherebutitcanneverforgetwhattheydidhereItisforusthelivingrathertobededicatedheretotheulnfinishedworkwhichtheywhofoughtherehavethusfarsonoblyadvancedItisratherforustobeherededicatedtothegreattdafskremainingbeforeusthatfromthesehonoreddeadwetakeincreaseddevotiontothatcauseforwhichtheygavethelastpfullmeasureofdevotionthatweherehighlyresolvethatthesedeadshallnothavediedinvainthatthisnationunsderGodshallhaveanewbirthoffreedomandthatgovernmentofthepeoplebythepeopleforthepeopleshallnotperishfromtheearth"));
  console.log(longestPalindrome2("civilwartestingwhetherthatnaptionoranynartionsoconceivedandsodedicatedcanlongendureWeareqmetonagreatbattlefiemldoftzhatwarWehavecometodedicpateaportionofthatfieldasafinalrestingplaceforthosewhoheregavetheirlivesthatthatnationmightliveItisaltogetherfangandproperthatweshoulddothisButinalargersensewecannotdedicatewecannotconsecratewecannothallowthisgroundThebravelmenlivinganddeadwhostruggledherehaveconsecrateditfaraboveourpoorponwertoaddordetractTgheworldadswfilllittlenotlenorlongrememberwhatwesayherebutitcanneverforgetwhattheydidhereItisforusthelivingrathertobededicatedheretotheulnfinishedworkwhichtheywhofoughtherehavethusfarsonoblyadvancedItisratherforustobeherededicatedtothegreattdafskremainingbeforeusthatfromthesehonoreddeadwetakeincreaseddevotiontothatcauseforwhichtheygavethelastpfullmeasureofdevotionthatweherehighlyresolvethatthesedeadshallnothavediedinvainthatthisnationunsderGodshallhaveanewbirthoffreedomandthatgovernmentofthepeoplebythepeopleforthepeopleshallnotperishfromtheearthhtraeehtmorfhsireptonllahselpoepehtrofelpoepehtybelpoepehtfotnemnrevogtahtdnamodeerffohtribwenaevahllahsdoGredsnunoitansihttahtniavnideidevahtonllahsdaedesehttahtevloserylhgiherehewtahtnoitovedfoerusaemllufptsalehtevagyehthcihwrofesuactahtotnoitoveddesaercniekatewdaedderonohesehtmorftahtsuerofebgniniamerksfadttaergehtotdetacidederehebotsurofrehtarsitIdecnavdaylbonosrafsuhtevaherehthguofohwyehthcihwkrowdehsinifnluehtoterehdetacidedebotrehtargnivilehtsurofsitIerehdidyehttahwtegrofrevennactituberehyasewtahwrebmemergnolroneltonelttilllifwsdadlrowehgTtcartedroddaotrewnoproopruoevobaraftidetarcesnocevaherehdelggurtsohwdaeddnagnivilnemlevarbehTdnuorgsihtwollahtonnacewetarcesnoctonnacewetacidedtonnacewesnesregralanituBsihtoddluohsewtahtreporpdnagnafrehtegotlasitIevilthgimnoitantahttahtsevilriehtevagerehohwesohtrofecalpgnitserlanifasadleiftahtfonoitropaetapcidedotemocevaheWrawtahztfodlmeifelttabtaerganotemqeraeWerudnegnolnacdetacidedosdnadeviecnocosnoitranynaronoitpantahtrehtehwgnitsetrawlivic"));
//console.log(longestPalindrome4("babaddtattarrattatddetartrateedredividerb"));
console.log(longestPalindrome2("ccc"));
console.timeEnd("liu");

//步骤分解
function longestPalindrome2(s) {
    var len = s.length;
    if (len < 2) {
        return s;
    }
    var max = 0;  //保存最长的回文字符串
    var flag = 0; //如果某个长度都没又找到  说明没有更长的了
    var r = 0;    //用于记录字符串开始位置
    //第一次搜索长度为奇数的最长的的回文字符串
    var m1  = huiwen(1,s);
    //最长的 奇数长度的回文字符串 加 1 开始查找 偶数长度的回文字符串
   var m2 = huiwen(m1.length + 1 , s);
   if(m1.length > m2.length){
       return m1.length;
   }else{
       return m2.length;
   }
}
function huiwen(start,s) {
    var len = s.length;
    var r = 0;
    var max = "";
    for (var i = start; i <= len; i = i + 2) {
        flag = 0;
        for (var j = r; j <= len - i; j++) {
            var m = s.substr(j, i);
            if (test(m)) {
                max = m;
                flag = 1;
                if (j >= 1) {
                    j--;
                }
                r = j;
                break;
            }
        }
        if (!flag) {
            break;
        }
    }
    return max;
}
