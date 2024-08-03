import dns from "dns";

dns.lookup("bing.com", (error, address,family) => {
  if (error) throw error;
  console.log(address);
  console.log(family);
});


dns.resolve("aktu.com",'NS', (error,records) => {
  if (error) throw error;
  console.log(records);
});
