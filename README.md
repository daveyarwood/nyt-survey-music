# nyt-survey-music

This is a rough demo of using the Web Audio API to play synchronized music tracks at the same time.

## Development

`audio/` (the directory containing the track mp3s) is gitignored to save space. You need this directory in order for the demo to work.

```
$ tree audio/
audio/
└── buzz
    ├── 01.mp3
    ├── 02.mp3
    ├── 03.mp3
    ├── 04.mp3
    ├── 05.mp3
    ├── 06.mp3
    ├── 07.mp3
    ├── 08.mp3
    ├── 09.mp3
    ├── 10.mp3
    └── 11.mp3

1 directory, 11 files
```

To run locally, install [http-server](https://github.com/indexzero/http-server):

```
npm install -g http-server
```

Then run:

```
http-server .
```

This will serve everything on localhost:8080, which you can go to in your browser.

