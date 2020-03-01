/*
 * @Author: kuangxj
 * @Email: frankxjkuang@gmail.com
 * @Date: 2018-08-22 11:20:39
 * @Last Modified by:   kaungxj
 * @Last Modified time: 2018-08-22 11:20:39
 * @Description: formatDate
 */

export function formatDate(date){
    console.log(date);
    let y = date.getFullYear();
    let m = date.getMonth() + 1;
    m = m < 10 ? "0" + m : m;
    let d = date.getDate();
    d = d < 10 ? "0" + d : d;
    let h = date.getHours();
    h = h < 10 ? "0" + h : h;
    let minute = date.getMinutes();
    minute = minute < 10 ? "0" + minute : minute;
    let second = date.getSeconds();
    second = second < 10 ? "0" + second : second;
    return y + "年" + m + "月" + d + "日";
}
