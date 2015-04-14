# Historia [![Build Status](https://travis-ci.org/morishitter/historia.svg)](https://travis-ci.org/morishitter/historia)

Build shellscript from bash_hisotry to setup server

## Install

```shell
$ npm install historia -g
```

## How to use

1. Install `historia`.
2. Run `historia start` command when you install server software.
3. Install packages.
4. Run `historia end` command when you will finished install packages.
5. Run `fc -ln c > historyFile` command to build command history file.
6. Run `historia setup historyFile`
7. You will get `setup.sh`

## License

The MIT License (MIT)

Copyright (c) 2015 Masaaki Morishita
