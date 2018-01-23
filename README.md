# BannerViewer

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.6.5.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

## Banner Loading

To load banners into the app, they must be in a JSON file and the sub-headers should be "banner-links" for one set, or "banner-links-multi" for multiple sets of banners.  Each set should have a "title" value.

###Example
```
{
    "banner-links-multi":{
        "GrowthSpurt":{
            "id": "1",
            "title": "Growth Spurt",
            "160x600": "dev.chemistry.digital/choa/banners/3880-digital-pre-launch/GrowthSpurt/160x600/index.html",
            "300x250": "dev.chemistry.digital/choa/banners/3880-digital-pre-launch/GrowthSpurt/300x250/index.html",
            "300x600": "dev.chemistry.digital/choa/banners/3880-digital-pre-launch/GrowthSpurt/300x600/index.html",
            "320x50": "dev.chemistry.digital/choa/banners/3880-digital-pre-launch/GrowthSpurt/320x50/index.html",
            "728x90": "dev.chemistry.digital/choa/banners/3880-digital-pre-launch/GrowthSpurt/728x90/index.html"
        },
        "IfYouDontSee":{
            "id" : "2",
            "title": "If You Don't See",
            "160x600": "dev.chemistry.digital/choa/banners/3880-digital-pre-launch/IfYouDontSee/160x600/index.html",
            "300x250": "dev.chemistry.digital/choa/banners/3880-digital-pre-launch/IfYouDontSee/300x250/index.html",
            "300x600": "dev.chemistry.digital/choa/banners/3880-digital-pre-launch/IfYouDontSee/300x600/index.html",
            "320x50": "dev.chemistry.digital/choa/banners/3880-digital-pre-launch/IfYouDontSee/320x50/index.html",
            "728x90": "dev.chemistry.digital/choa/banners/3880-digital-pre-launch/IfYouDontSee/728x90/index.html"
        }
    }
}
```
