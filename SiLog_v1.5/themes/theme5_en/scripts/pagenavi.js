function showPageLink(sUrl,iPage,iCount,sAnchor){
    var i;
    i=Math.max(1,iPage-1);
    if(iPage==1){
        document.write("<span style='color:#7D7D7D'>First page</span> ");
        document.write("<span style='color:#7D7D7D'>Prev page</span> ");
    }
    else{
        document.write("<a href=\"" + sUrl + sAnchor + "1\" title='The 1 page'>First page</a> ");
        document.write("<a href=\"" + sUrl + i + sAnchor + "\" title='Prev page(The " + i + " page)'>Prev page</a> ");
    }
    if(iPage>6) document.write("<span>...</span> ");
    for(i=Math.max(1,iPage-5);i<iPage;i++){
        document.write("<a href=\""+sUrl + i + sAnchor + "\" title='The " + i + " page'>" + i + "</a> ");
    }
    document.write("<font color='red'>" + iPage + "</font> ");
    for(i=iPage+1;i<=Math.min(iCount,iPage+5);i++){
        document.write("<a href=\""+sUrl + i + sAnchor + "\" title='The " + i + " page'>" + i + "</a> ");
    }
    i=Math.min(iCount,iPage+1);
    if(iCount>iPage+5) document.write("<span>...</span> ");
    if(iPage==iCount){
        document.write("<span style='color:#7D7D7D'>Next page</span> ");
        document.write("<span style='color:#7D7D7D'>Last page</span> ");
    }
    else{
        document.write("<a href=\"" + sUrl + i + sAnchor + "\" title='Next page(The " + i + " page)'>Next page</a> ");
        document.write("<a href=\"" + sUrl + iCount + sAnchor + "\" title='Last page(The " + iCount + " page)'>Last page</a> ");
    }
}

