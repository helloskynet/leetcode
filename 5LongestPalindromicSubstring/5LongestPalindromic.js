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
var longestPalindrome = function (s) {
    console.time("liu");
    var ti = s.length;
    for (var i = ti; i > 0; i--) {
        for (var j = 0; j <= ti - i; j++) {
            var m = s.substr(j, i);
            console.log(m);
            var len = m.split("").reverse().join("");
            if (len === m) {
                console.timeEnd("liu");
                return m;
            }
        }
    }

};
var longestPalindrome2 = function (s) {
    console.time("liu2");
    for (var i = 0; i < s.length; i++) {
        for (var j = 0; j <= s.length - i; j++) {
            var m = s.substr(j, i);
            console.log(m);
            var len = m.split("").reverse().join("");
            if (len === m) {
                console.timeEnd("liu2");
                return m;
            }
        }
    }

};
var longestPalindrome3 = function (s) {
    var len = s.length;
    if (len < 2) {
        return s;
    }
    var max = 0;
    var flag = 0;//如果连着两个长度都没又找到  说明没有更长的了
    var r = 0;
    for (var i = 1; i <= len; i++) {
        flag2 = 0;
        for (var j = r; j <= len - i; j++) {
            var m = s.substr(j, i);
            if (test(m)) {
                max = m;
                flag = 0;
                flag2 = 1;
                if (j >= 1) {
                    j--;
                }
                i++;
                r = j;
                break;
            }
        }
        if (!flag2) {
            flag++;
        }
        if (flag > 3) {
            break;
        }
    }
    var i = max.length + 1;
    for (var j = 0; j <= len - i; j++) {
        var m = s.substr(j, i);
        if (test(m)) {
            max = m;
            break;
        }
    }

    return max.length;
};
var test = function (s) {
    var len = s.split("").reverse().join("");
    return len === s;
};
console.time("liu");
//console.log(longestPalindrome3("civilwartestingwhetherthatnaptionoranynartionsoconceivedandsodedicatedcanlongendureWeareqmetonagreatbattlefiemldoftzhatwarWehavecometodedicpateaportionofthatfieldasafinalrestingplaceforthosewhoheregavetheirlivesthatthatnationmightliveItisaltogetherfangandproperthatweshoulddothisButinalargersensewecannotdedicatewecannotconsecratewecannothallowthisgroundThebravelmenlivinganddeadwhostruggledherehaveconsecrateditfaraboveourpoorponwertoaddordetractTgheworldadswfilllittlenotlenorlongrememberwhatwesayherebutitcanneverforgetwhattheydidhereItisforusthelivingrathertobededicatedheretotheulnfinishedworkwhichtheywhofoughtherehavethusfarsonoblyadvancedItisratherforustobeherededicatedtothegreattdafskremainingbeforeusthatfromthesehonoreddeadwetakeincreaseddevotiontothatcauseforwhichtheygavethelastpfullmeasureofdevotionthatweherehighlyresolvethatthesedeadshallnothavediedinvainthatthisnationunsderGodshallhaveanewbirthoffreedomandthatgovernmentofthepeoplebythepeopleforthepeopleshallnotperishfromtheearth"));
console.log(longestPalindrome4("civilwartestingwhetherthatnaptionoranynartionsoconceivedandsodedicatedcanlongendureWeareqmetonagreatbattlefiemldoftzhatwarWehavecometodedicpateaportionofthatfieldasafinalrestingplaceforthosewhoheregavetheirlivesthatthatnationmightliveItisaltogetherfangandproperthatweshoulddothisButinalargersensewecannotdedicatewecannotconsecratewecannothallowthisgroundThebravelmenlivinganddeadwhostruggledherehaveconsecrateditfaraboveourpoorponwertoaddordetractTgheworldadswfilllittlenotlenorlongrememberwhatwesayherebutitcanneverforgetwhattheydidhereItisforusthelivingrathertobededicatedheretotheulnfinishedworkwhichtheywhofoughtherehavethusfarsonoblyadvancedItisratherforustobeherededicatedtothegreattdafskremainingbeforeusthatfromthesehonoreddeadwetakeincreaseddevotiontothatcauseforwhichtheygavethelastpfullmeasureofdevotionthatweherehighlyresolvethatthesedeadshallnothavediedinvainthatthisnationunsderGodshallhaveanewbirthoffreedomandthatgovernmentofthepeoplebythepeopleforthepeopleshallnotperishfromtheearthhtraeehtmorfhsireptonllahselpoepehtrofelpoepehtybelpoepehtfotnemnrevogtahtdnamodeerffohtribwenaevahllahsdoGredsnunoitansihttahtniavnideidevahtonllahsdaedesehttahtevloserylhgiherehewtahtnoitovedfoerusaemllufptsalehtevagyehthcihwrofesuactahtotnoitoveddesaercniekatewdaedderonohesehtmorftahtsuerofebgniniamerksfadttaergehtotdetacidederehebotsurofrehtarsitIdecnavdaylbonosrafsuhtevaherehthguofohwyehthcihwkrowdehsinifnluehtoterehdetacidedebotrehtargnivilehtsurofsitIerehdidyehttahwtegrofrevennactituberehyasewtahwrebmemergnolroneltonelttilllifwsdadlrowehgTtcartedroddaotrewnoproopruoevobaraftidetarcesnocevaherehdelggurtsohwdaeddnagnivilnemlevarbehTdnuorgsihtwollahtonnacewetarcesnoctonnacewetacidedtonnacewesnesregralanituBsihtoddluohsewtahtreporpdnagnafrehtegotlasitIevilthgimnoitantahttahtsevilriehtevagerehohwesohtrofecalpgnitserlanifasadleiftahtfonoitropaetapcidedotemocevaheWrawtahztfodlmeifelttabtaerganotemqeraeWerudnegnolnacdetacidedosdnadeviecnocosnoitranynaronoitpantahtrehtehwgnitsetrawlivic"));
//console.log(longestPalindrome4("babaddtattarrattatddetartrateedredividerb"));
//console.log(longestPalindrome4("cbbd"));
//console.log(longestPalindrome3("fdgdfg"));
console.timeEnd("liu");


function longestPalindrome4(s) {
    var len = s.length;
    if (len < 2) {
        return s;
    }
    var max = 0;
    var flag = 0;//如果连着两个长度都没又找到  说明没有更长的了
    var r = 0;
    for (var i = 1; i <= len; i = i + 2) {
        flag2 = 0;
        for (var j = r; j <= len - i; j++) {
            var m = s.substr(j, i);
            if (test(m)) {
                max = m;
                flag = 0;
                flag2 = 1;
                if (j >= 1) {
                    j--;
                }
                r = j;
                break;
            }
        }
        if (!flag2) {
            flag++;
        }
        if (flag > 3) {
            break;
        }
    }
    r = 0;
    for (var i = max.length+1; i <= len; i = i + 2) {
        flag2 = 0;
        for (var j = r; j <= len - i; j++) {
            var m = s.substr(j, i);
            if (test(m)) {
                max = m;
                flag = 0;
                flag2 = 1;
                if (j >= 1) {
                    j--;
                }
                r = j;
                break;
            }
        }
        if (!flag2) {
            flag++;
        }
        if (flag > 3) {
            break;
        }
    }
    return max.length;
}