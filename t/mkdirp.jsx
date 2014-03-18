import "test-case.jsx";
import "../lib/mkdirp.jsx";
import "nodejs.jsx/fs.jsx";

class _Test extends TestCase {

    function testSync() :void {
        var x = Math.floor(Math.random() * Math.pow(16,4)).toString(16);
        var y = Math.floor(Math.random() * Math.pow(16,4)).toString(16);
        var z = Math.floor(Math.random() * Math.pow(16,4)).toString(16);

        var file = '/tmp/' + [x,y,z].join('/');

        try {
            mkdirp.sync(file);
        } catch (err : Error) {
            this.fail(err.message);
        }

        var exists = fs.existsSync(file);
        this.expect(exists).toBe(true);
    }
}
