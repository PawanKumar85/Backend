import { URL } from "url";
const myURL = new URL(
  "https://www.youtube.com/watch?v=OPrP_ge9xpE&list=PLbGui_ZYuhijy1SpwtIS9IwL6OJdbr4kE&index=14"
);

console.log("host", myURL.hash);
console.log(myURL.host);
console.log(myURL.hostname);
console.log(myURL.href);
console.log(myURL.pathname);
console.log(myURL.port);
console.log(myURL.protocol);
console.log(myURL.search);
console.log(myURL.searchParams);
console.log(myURL.toString());
console.log(myURL.toJSON());



/*
    ⁡⁣⁢⁢𝗵𝗮𝘀𝗵⁡ - Gets and sets the fragment portion of the URL
    ⁡⁣⁢⁢𝗵𝗼𝘀𝘁⁡ - Gets and sets the host portion of the URL.
    ⁡⁣⁢⁢𝗵𝗼𝘀𝘁𝗻𝗮𝗺𝗲⁡ - Gets and set the hostname portion of the URL.The key difference between url.host and ⁡⁢⁢⁢𝘂𝗿𝗹.𝗵𝗼𝘀𝘁𝗻𝗮𝗺𝗲⁡ does not includes the port.
    ⁡⁣⁢⁢𝗵𝗿𝗲𝗳⁡ - Gets and sets the serialized URL.
    ⁡⁣⁢⁢𝗽𝗮𝘁𝗵𝗻𝗮𝗺𝗲⁡ - Gets and sets the path portion of the URL.
    ⁡⁣⁢⁢𝗽𝗿𝗼𝘁𝗼𝗰𝗼𝗹⁡ - Gets and sets the protocol portion of the URL.
    ⁡⁣⁢⁢𝘀𝗲𝗮𝗿𝗰𝗵⁡ - Gets and sets the serialized query portion of the URL.
    ⁡⁣⁢⁢𝘁𝗼𝗦𝘁𝗿𝗶𝗻𝗴()⁡ - The toString() method on the URL object returns the serialized URL.The value returned is equirvalent to that of url.href and url.toJSON().
   ⁡⁣⁢⁢ 𝘁𝗼𝗝𝗦𝗢𝗡()⁡ - The toJSON() method on the URL object returns the serialized URL.The value returned is equivalent to tht of url.href and url.toString().
*/
