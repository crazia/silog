function showPageLink(sUrl,iPage,iCount,sAnchor){
    var i;
    i=Math.max(1,iPage-1);
    if(iPage==1){
        document.write("<span style='color:#7D7D7D'>Home</span> ");
        document.write("<span style='color:#7D7D7D'>Previous</span> ");
    }
    else{
        document.write("<a href=\"" + sUrl + sAnchor + "1\" title='第 1 页'>Home</a> ");
        document.write("<a href=\"" + sUrl + i + sAnchor + "\" title='上一页(第 " + i + " 页)'>Previous</a> ");
    }
    if(iPage>6) document.write("<span>...</span> ");
    for(i=Math.max(1,iPage-5);i<iPage;i++){
        document.write("<a href=\""+sUrl + i + sAnchor + "\" title='第 " + i + " 页'><b>" + i + "</b></a> ");
    }
    document.write("<font color='#18AEF5'><b>" + iPage + "</b></font> ");
    for(i=iPage+1;i<=Math.min(iCount,iPage+5);i++){
        document.write("<a href=\""+sUrl + i + sAnchor + "\" title='第 " + i + " 页'><b>" + i + "</b></a> ");
    }
    i=Math.min(iCount,iPage+1);
    if(iCount>iPage+5) document.write("<span>...</span> ");
    if(iPage==iCount){
        document.write("<span style='color:#7D7D7D'>Next</span> ");
        document.write("<span style='color:#7D7D7D'>Last</span> ");
    }
    else{
        document.write("<a href=\"" + sUrl + i + sAnchor + "\" title='下一页(第 " + i + " 页)'>Next</a> ");
        document.write("<a href=\"" + sUrl + iCount + sAnchor + "\" title='最后一页(第 " + iCount + " 页)'>Last</a> ");
    }
}

