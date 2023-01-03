import React from 'react'
import { useState, useRef, useEffect } from 'react'
import Markdowner from '../Markdowner'
import md from '../../utils/github-markdown-dark.css'
import tut1 from '../../assets/tut1.png'
import tut2 from '../../assets/tut2.png'
import tut3 from '../../assets/tut3.png'

let test = `# Depth/Elevation in a 2D tile-map
In a tile-based game confined to 2 dimensions, how can we create a usable 3rd dimension? This would be useful for both collisions and elevation calculations under the hood, and even some crazy game mechanics where you're able to switch between a 2d and 3d view.


A [Video](https://photos.app.goo.gl/bznoxCHyaP3uDwds9) is worth a thousand words, and in this case would better describe what I'm trying to achieve.

- ![image](${tut3})
- This first image examples a slightly more robust use-case for how we could extend our 3d data to be skinned according to the tilemap.
- ![image](${tut1})
- The second image examples the most basic 3d object layer that we could extract from the tilemap to use for calculations/elevations which probably wouldn't be rendered to the player. 

There is one issue I've still yet to work out, which you may see from the images/video, where transitions between elevations (staircases) are proving difficult to visuallize between the two views.. if you look at the top of the stair case in both 2d/3d in the first image, it looks correctly positioned, but when you stretch it one tile down it leaves a gap at the bottom in the 2d view... it's due to the optical illusion of our 2d view, so I still need to work out some sort of fix in the design process for that, for now I've decided that the best solution would be two stretch staircases one extra tile-length towards the camera.
## Intro
After playing the game Divinity Original Sin, I was highly inspired to re-create some of the mechanics myself. I'm also a big fan of 2D games made with tilemaps, so I decided to mash the two concepts together while tinkering with some mechanics. After a little dinking around, I was faced with the issue of calculating depth. In Divinity, if an archer is on higher grounds than the enemy, then the enemy recieves bonus damage based on the elevation advantage... 

On a 2 dimensional tilemap, this would be impossible, unless you hard-wired some 'zones' in the tilemap with some pre-determined elevation values. This is how most tilemap games would simulate elevation, and determine whether a tile is rendered above/behind a character... It seemed tedius (as expected for most game design), however, since the tedius nature already seemed unavoidable, I was still trying to think of a way to streamline the process, or atleast make it more 'real'.

Finally I had an epiphany... all tiles are already squares, same size in both directions, and the illusion of depth in a game like A Link to the Past gives you the impression that an increase in elevation is a single tile up... then a tile could essentially just be a cube. We could could build the level in a tile-editor, and each layer could be assigned a different elevation. 

In a level designed with this in mind, we could parse the data and build a 3-dimensional world under the hood, it could act as both a 3D collision layer and a means to grab elevation differences between two entities. It would enable 'real' 3 dimensional jumping within a 2 dimensional tilemap. When a player walks under a bridge or jumps off a ledges, or runs into a wall, it the collisions (or lack of) will all be processed in 3D, while the rendering will remain in 2D.

## Let's get started

### Preparing the tile map
I'll use [Tiled](https://www.mapeditor.org/) to create the tilemap. A very robust tile editor, which has layers built in. To stream-line the process I'm just going to set each layer's name to an index relative to it's elevation (0 being the main elevation).

### Parsing the tilemap
To begin building our 3D world, we will parse the tilemap... We're not going to worry about chunking, efficiency, etc... We're just worrying about building the world at this point. 

For the sake of the tutorial, let's just store all of our cubes in an array/list.

For each layer in our tilemap, we will have a 2 dimensional array of tile info, let's assume that if a tile exists at place [x,y] then it is a solid object, otherwise there's nothing there... let's also assume that the base elevation is 0.

We can iterrate through each tile in the starting layer and create a 3D cube, we can default it's width/height/depth to the same dimensions as the tile (i'm working with 16x16 pixel tiles, so I'm going with 16).
~~~cs
var cubes = new List();

var size = 16;

for (int i = 0; i < layers.length; i++)

    var depth = layers[i].name;
	var tiles = layers[i].tiles;

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
~~~

That's it! Atleast in the most simplest form of purely cubes. 

### Next Step
You'll need special care for bridges/slopes, these tiles will need to be flagged with extra data in the tile editor:

- For bridges you can modify the size of the cube to be only 1 in the axis you pick for depth (I used the z-axis), aswell as adjust it's position to be *(size * depth) + (size - 1)*  to raise it up flush with the rest of layer.

- For slopes/stairs you'll have to flag the tile with the direction of the slope, and mutate the cube accordingly to actually be a triangle rather than a cube.

## Conclusion
You can see that, we were able to create a collection of 3D objects based off very little data we passed into the tile map. The next step would be to create a 3D collider for your character (half the size of the tile dimensions would probably work well), and let it traverse your 3d world. When rendering the 2D world, you simply mimic the x/y coordinates of the 3d space, and offset the sprite in the y-axis for whatever value your 3D colliders z-axis is.`;


export default function Tutorial() {


  return (


        <div className='markdown-body w-full h-full p-2'>
        <Markdowner markdown={test} />
        </div>
        
  )
}
