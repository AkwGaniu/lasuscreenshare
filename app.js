let express = require( 'express' );
let app = express();
let server = require( 'http' ).Server( app );
let io = require( 'socket.io' )( server );
let stream = require( './src/ws/stream' );
let path = require( 'path' );
let favicon = require( 'serve-favicon' );

app.use( favicon( path.join( __dirname, '/src/favicon.ico' ) ) );
app.use( '/assets', express.static( path.join( __dirname, '/src/assets' ) ) );

app.get( '/', ( req, res ) => {
    res.sendFile( __dirname + '/src/index.html' );
} );


io.of( '/stream' ).on( 'connection', stream );

const PORT = process.env.PORT || 3000
server.listen( 3000, () => {
    console.log(`Server up on port ${PORT}`)
})
