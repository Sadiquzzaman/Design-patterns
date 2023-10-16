/*
The Prototype pattern is like making photocopies of an original document. 
Instead of creating new objects from scratch, you "clone" an existing object to make new ones. 

*/

class Configuration {
  constructor(
    public username: string,
    public apiKey: string,
    public server: string
  ) {}

  clone(): this {
    const clone = Object.create(this);
    return clone;
  }
}

const defaultConfig = new Configuration(
  "guest",
  "defaultKey",
  "api.example.com"
);

const userConfig = defaultConfig.clone();
userConfig.username = "user123";
userConfig.apiKey = "userKey123";

const adminConfig = defaultConfig.clone();
adminConfig.username = "admin";
adminConfig.apiKey = "adminKey456";
adminConfig.server = "admin.example.com";

console.log("Default Config :", defaultConfig);
console.log("User Config :", userConfig);
console.log("Admin Config :", adminConfig);
