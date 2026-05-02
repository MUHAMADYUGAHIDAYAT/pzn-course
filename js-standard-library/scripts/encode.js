{
    //encode uri dam decode uri

    const url = "http://contoh.com/?name=M Yuga Hidayat";
    console.log(url);
    
    const encoded = encodeURI(url);
    console.info(encoded)
    
    const decoded = decodeURI(encoded);
    console.info(decoded)
}
{
    //encode uriComponent dam decode uriCOmponent
    const value = "M&Yuga=Hidayat";
    const url = "http://contoh.com/?name=";
    console.log(url + value);
    
    const encoded = encodeURIComponent(value);
    console.info(url + encoded)
    
    const decoded = decodeURIComponent(encoded);
    console.info(url + decoded)
}