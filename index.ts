import {type Serve} from 'bun'

const server = Bun.serve({
    // In development mode, Bun will surface errors in-browser with a built-in error page
    // By default, development mode is enabled unless NODE_ENV is production
    fetch(req: Request): Response | Promise<Response> {
        const url = new URL(req.url);
        if (url.pathname === "/") return new Response("Home page!");
        if (url.pathname === "/blog") return new Response("Blog!");
        
        // return new Response("Hello World!");
        throw new Error("woops!");
      },
    // Optional port number - the default value is 3000
    port: process.env.PORT || 3000,
    // Enable TLS by passing in a value for key and cert; both are required to enable TLS
    // tls: {
    //     key: Bun.file("./key.pem"),
    //     cert: Bun.file("./cert.pem"),
    // }
    // hostname: "mydomain.com"
}) satisfies Serve

console.log(`Listening to PORT: ${server.port}`);
