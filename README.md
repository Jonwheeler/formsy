# Formsy
----

Simple client and server that uses a token supplied via query string to find and 
account, return a form and then post data back to the server.

This is simply a prototype and a change to experiment with some technologies 
I had not used before. I am aware that the client is very much over engineered 
for what it does.

Client is only tested in chrome.

## Installation

`git clone https://github.com/Jonwheeler/fromsy.git`

### To set up the server

`cd formsy/server`
`npm install`
`npm run server`

Server should now be running on port 8081.

### To set up the client

`cd formsy/client`
`npm install`
`webpack-dev-server`

Client should be running on port 8080. 

## Usage

Open the browser at localhost:8080, if the app is running successfully you 
should see.

![Alt text](https://dl.dropboxusercontent.com/s/l894p9w5mutq1cw/invalid_token.png)

The app expects a token to passed in the query string for example:

`localhost:8080?token=some_token`

Valid tokens for this prototype are:

```
1234foo
5678bar
1234done
```

If the token is accepted by the server you will see some account information 
sent from the server, and a form:

![Alt text](https://dl.dropboxusercontent.com/s/kv6l4rjrf03n6wf/form.png)

If the token has already completed the form then a simple thank you message is 
displayed instead:

![Alt text](https://dl.dropboxusercontent.com/s/smelb75jsqrw6uz/prev_done.png)

Fill out the form and hit submit, the form data is sent to the server. For demo
purposed the server simply marks the form as completed and displays the thank 
you message a long with the data that was submitted in the form.

![Alt text](https://dl.dropboxusercontent.com/s/c69u0qmmvaypehl/done.png)

These form submissions are not persisted so next time you refresh the page it 
will no longer be marked complete.

## Note

As I mentioned the client is way over engineered for what it does. We could have
defined a single component that called the api on load, displayed to form, posted
the form back to the server and dealt with the response. In a larger application
this gets complex, confusing and messy quickly (I know form experience).

That said we could do a lot to improve this example as well. For example 
seperating various chunks of the html into seperate components that simply 
respond to props passed from their parent. That way it doesn't feel like JS and 
html mushed together quite some much. I didn't wnat to spend too much time 
messing with this but perhaps I will in the future.

Let me know if you have any questons.
