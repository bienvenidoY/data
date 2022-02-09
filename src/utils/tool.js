
export const getQueryString = name => {
  if(window.location.search){
    let reg = '(^|&)' + name + '=([^&]*)(&|$)';
    let r = window.location.search.substr(1).match(reg);
    if (r != null) return unescape(r[2]);
    return null;
  }else {
    var vars = {};
    window.location.href.replace(/[?&]+([^=&]+)=([^&#]*)/gi,
      function(m,key,value) {
        vars[key] = value;
      }
    );
    return vars[name];
  }
}
