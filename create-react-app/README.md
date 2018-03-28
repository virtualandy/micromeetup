## What is it?

A toy create-react-app (using Material UI) used in presentation at
the Denver Microservices meetup.

Related slides: https://slides.com/virtualandy/upnow/

## How to use it?

`yarn start` and all the usual create-react-app steps work here.

## No, really

If you want to use with with zeit.co/now you'll want to run
`yarn build`. Because I'm on the free plan, you can only
upload files <1MB in size. So after running `yarn build` go
into the `build/static/js/` folder and remove the `.map`
file that exceeds the limit(s).


