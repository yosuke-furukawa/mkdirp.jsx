mkdirp for JSX
===============

mkdirp can make directories full path.

as a shell command,

```shell
$ mkdir -p
```

is the same meaning.


Getting Started
===============

```
$ npm install mkdirp.jsx
```

```javascript
import "mkdirp.jsx/mkdirp.jsx";

class Hoge {
    function fuga() :void {
        var file = "/tmp/hoge/fuga";
        mkdirp.sync(file);
    }
}
```
