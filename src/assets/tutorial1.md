# Depth in a 2D tile-map
In a world built of only 2 dimensions, how can we calculate depth?

## Intro
After playing the game Divinity Original Sin, I was highly inspired to re-create some of the mechanics myself. I'm also a big fan of 2D games made with tilemaps, so I decided to mash the two concepts together while tinkering with some mechanics. After a little dinking around, I was faced with the issue of calculating depth. In Divinity, if an archer is on higher grounds than the enemy, then the enemy recieves bonus damage based on the elevation advantage... 

On a 2 dimensional tilemap, this would be impossible, unless you hard-wired some 'zones' in the tilemap with some pre-determined elevation values. This is how most tilemap games would simulate elevation, and determine whether a tile is rendered above/behind a character... It seemed tedius (as expected for most game design), however, since the tedius nature already seemed unavoidable, I was still trying to think of a way to streamline the process, or atleast make it more 'real'.

Finally I had an epiphany... all tiles are already squares, same size in both directions, and the illusion of depth in a game like A Link to the Past gives you the impression that an increase in elevation is a single tile up... then a tile could essentially just be a cube. We could could build the level in a tile-editor, and each layer could be assigned a different elevation. 

In a level designed with this in mind, we could parse the data and build a 3-dimensional world under the hood, it could act as both a 3D collision layer and a means to grab elevation differences between two entities. It would enable 'real' 3 dimensional jumping within a 2 dimensional tilemap. When a player walks under a bridge or jumps off a ledges, or runs into a wall, it the collisions (or lack of) will all be processed in 3D, while the rendering will remain in 2D.

## Let's get started

### - Preparing the tile map
I'll use [Tiled](https://www.mapeditor.org/) to create the tilemap. A very robust tile editor, which has layers built in. To stream-line the process I'm just going to set each layer's name to an index relative to it's elevation (0 being the main elevation).

### - Parsing the tilemap
To begin building our 3D world, we will parse the tilemap... We're not going to worry about chunking, efficiency, etc... We're just worrying about building the world at this point. 

For the sake of the tutorial, let's just store all of our cubes in an array/list.

For each layer in our tilemap, we will have a 2 dimensional array of tile info, let's assume that if a tile exists at place [x,y] then it is a solid object, otherwise there's nothing there... let's also assume that the base elevation is 0.

We can iterrate through each tile in the starting layer and create a 3D cube, we can default it's width/height/depth to the same dimensions as the tile (i'm working with 16x16 pixel tiles, so I'm going with 16).
```
var cubes = new List();

var size = 16;

for (int i = 0; i < layers.length; i++)

    var depth = layers[i].name;

    for (int x = 0; x < tiles.width x++){
        for (int y = 0; y < tiles.height; y++){

            var cube = new Cube();
            cube.size = new Vector3(size,size,size);
            cube.x = x * size;
            cube.y = y * size;
            cube.z = depth * size;

            cubes.Add(cube);
        }
    }
}
```

That's it! Atleast in the most simplest form of purely cubes. 

### - Next Step
You'll need special care for bridges/slopes, these tiles will need to be flagged with extra data in the tile editor.

- For bridges you can modify the size of the cube to be only 1 in the axis you pick for depth (I used the z-axis), aswell as adjust it's position to be `(size * depth) + (size - 1)` to raise it up flush with the rest of layer.

- For slopes/stairs you'll have to flag the tile with the direction of the slope, and mutate the cube accordingly to actually be a triangle rather than a cube.

## Conclusion
You can see that, we were able to create a collection of 3D objects based off very little data we passed into the tile map. The next step would be to create a 3D collider for your character (half the size of the tile dimensions would probably work well), and let it traverse your 3d world. When rendering the 2D world, you simply mimic the x/y coordinates of the 3d space, and offset the sprite in the y-axis for whatever value your 3D colliders z-axis is.