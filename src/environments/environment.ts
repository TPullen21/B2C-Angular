// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  tenant: 'b2ctom.onmicrosoft.com',
  clientID: '95dac272-e9d8-44f1-9cd7-9914a1c65691',
  signUpSignInPolicy: 'B2C_1_SiUpIn',
  b2cScopes: ['https://b2ctom.onmicrosoft.com/HelloCoreAPI/demo.read'],
  webApi: 'http://localhost:5000/api/user'
};



        // var applicationConfig = {
        //     clientID: '984a3e81-5455-440f-9a89-8fc614afdc7a',
        //     authority: "https://b2ctom.b2clogin.com/tfp/b2ctom.onmicrosoft.com/B2C_1_SiUpIn",
        //     b2cScopes: ["https://b2ctom.onmicrosoft.com/HelloCoreAPI/demo.read"],
        //     webApi: 'http://localhost:5000/api/values',
        // };