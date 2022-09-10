let j = document.getElementsByClassName('container')[0].lastElementChild


jokes= [`What did the snail who was riding on the turtle's back say?<br> 

Wheeeee!
I was going to tell a time traveling joke, but you guys didn't like it.`,


`What do you call a lazy kangaroo?<br> 
    
    A pouch potato.
I used to run a dating service for chickens, but I was struggling to make hens meet.`,


`Why do we tell actors to "break a leg?<br> 
    
    " Because every play has a cast.`,


`What does a pig put on dry skin?<br> 

Oinkment.`,


`What do you call it when a snowman throws a tantrum?<br> 
    
    A meltdown.`,



`Did you hear about the guy whose left side was cut off?<br> 

He's all right now.`,


`How do you open a banana?<br> 
    
    With a mon-key.
senior woman and adult daughter laughing on porch`,


`Which is faster, hot or cold?<br> 

Hot, because you can catch cold,.`,


`What did one plate say to the other plate?<br> 

Dinner's on me.`,


`Why do oranges wear sunscreen?<br> 
    
    So they don't peel.
My wife told me to stop acting like a flamingo, so I had to put my foot down.`,


`What do you call a pig that does karate?<br> 
    
    A pork chop.`,


`Where does Batman go to the bathroom?<br> 

The batroom.`,


`What do you call a pony with a sore throat?<br> 
    
    A little horse.`,


`What did the left eye say to the right eye?<br> 

Between you and me, something smells.`,


`What did the mama tomato say to the baby tomato?<br> 

Catch up!`,


`Why didn't the melons get married?<br> 

Because they cantaloupe.`,


`What do you call a fake noodle?<br> 
    
    An impasta.`,


`How did the pig get to the hogspital?<br> 

In a hambulance.`,



`Why does Humpty Dumpty love autumn?<br> 

Because he had a great fall.`,


`What happens when a strawberry gets run over crossing the street?<br> 

Traffic jam.`,


`Why did the cow jump over the moon?<br> 

The farmer had cold hands.`,


`A termite walks into a bar and says, "So, is the bar tender here?<br> 

"`,


`How does an octopus go into battle?<br> 

Well-armed.`,


`What do you call a pudgy psychic?<br> 
    

    
    A cocker-poodle boo.`,


`How do celebrities stay cool?<br> 
    
    They have many fans.`,


`What does a pickle say when he wants to play cards?<br> 

"Dill me in!"`,


`How much money does a pirate pay for corn?<br> 

A buccaneer.`,


`Where do young trees go to learn?<br> 
    
    Elementree school.`,


`Why do bees have sticky hair?<br> 
    
    Because they use a honeycom,`,


`How did the student feel when he learned about electricity?<br> 

Totally shocked.`,


`What do you call a bee that can't make up its mind?<br> 
    
    A Maybe.`,


`Why was six afraid of seven?<br> 

Because 7-8-9.`,


`If April showers bring May flowers, what do May flowers bring?<br> 
    
    Pilgrims.
I tried to catch fog yesterday. Mist.`,


`What do you call a hippie's wife?<br> 
    
    Mississippi.
Two peanuts were walking down the street. One was a-salted.`,


`How can you tell it’s a dogwood tree?<br> 

By the bark.`,


`What did the buffalo say when his kid went to college?<br> 

Bison.`,


`What did the mayonnaise say when the refrigerator door was opened?<br> 

Close the door, I'm dressing.`,


`What's the stinkiest planet?<br> 

Poopiter.
two best friends telling secrets lying in the grass
WESTEND61`,


`What did one wall say to the other?<br> 

I'll meet you at the corner.`,


`Why don't sharks eat clowns?<br> 

Because they taste funny.`,


`A horse walks into a bar. The bartender says, "Why the long face?<br> 

"`,


`What did the pirate say when he turned 80?<br> 

Aye matey.`,


`What's black and white and goes round and round?<br> 

A penguin in the washing machine.`,


`How do you organize a space party?<br> 
    
    You planet.`,


`Why couldn't the bicycle stand up by itself?<br> 

It was two tired.`,


`Did you hear the rumor about butter?<br> 

Well, I'm not going to spread it.`,


`Why did the student eat his homework?<br> 

Because his teacher told him it was a piece of cake.`,


`What did one hat say to the other?<br> 

You wait here, I'll go on ahead.`,


`What do you call a dinosaur that crashes his car?<br> 
    
    Tyrannosaurus Wrecks.
I couldn't figure out why the baseball kept getting larger. Then it hit me.`,


`What do you call a boomerang that won’t come back?<br> 
    
    A stick.`,


`What did the full glass say to the empty glass?<br> 

You look drunk.`,


`How do you stop a bull from charging?<br> 
    
    Cancel its credit card.`,


`Why don’t we see elephants hiding in trees?<br> 

Because they’re really good at it.`,




`Did you hear the one about the roof?<br> 

Never mind, it's over your head.
I used to hate facial hair...but then it grew on me.
A cheese factory exploded in France. Da brie was everywhere.`,


`What's a ninja's favorite type of shoes?<br> 

Sneakers.`,


`What's the best smelling insect?<br> 

A deodor-ant.`,


`What do you call a bear without any teeth?<br> 
    
    A gummy bear.`,

    
`Why was the coach yelling at the vending machine?<br> 

He wanted his quarter back.`]
cpu = Math.floor(Math.random()*jokes.length)
random = jokes[cpu]

function joke(random){
    j.innerHTML = random
}
joke(random);