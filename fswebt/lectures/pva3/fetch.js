const fetch = (url) => 
    new Promise((resolve, reject) => {
        const request = new XMLHttpRequest();  
        request.onload = resolve
        request.onerror = reject;
        request.open('GET', url, true);  
        request.send();
    }
);
