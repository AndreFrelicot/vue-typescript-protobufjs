var pbjs = require("protobufjs/cli/pbjs"); // or require("protobufjs/cli").pbjs / .pbts
var pbts = require("protobufjs/cli/pbts"); // or require("protobufjs/cli").pbjs / .pbts


pbjs.main([ "--target", "static-module", "--out", "awesome.js",  "./awesome.proto" ], function(err, output) {
    if (err)
        throw err;
    // do something with output

    //console.log(output)
});


pbts.main([ "--out", "awesome.d.ts",  "./awesome.js" ], function(err, output) {
    if (err)
        throw err;
    // do something with output

    //console.log(output)
});