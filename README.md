# dio_codepuzzle
## Code Puzzle Made for Fivem

A puzzle where you have to guess a code using the hints you get from your previous guess. This can be used for hacks in robberies and such. 

This was my attempt at learning html and javascript within fivem. I am sure there are better ways to make the result that I made. Feel free to leave suggestions and tips.

## How to use: 

Embed this export into where you want to use the hack. You can customize how many chances you want to give the player to make it harder or easier. You can also customize the amount of numbers in the code. I set no limit so I am sure you can break it but adding too many number so have fun with it. 

You can test the hack using /diopuzzle in game to play around with before putting it into your scripts as long as it is set to true in the config. 
```lua
--First Argument is the number of guesses a player has to guess. Recommended 5 for easier and 4 for hard.
--Second Argument is the length of the code. Recommended 4. 
exports["dio_puzzle"]:guessCode(5, 4,
function() -- success
    print("success")
end,
function() -- failure
    print("failure")
end)
```

## Preview:

![image](https://user-images.githubusercontent.com/21018537/211671364-b1621804-bf56-4065-a259-8df6b58cd39b.png)

https://user-images.githubusercontent.com/21018537/211672704-fdc7837a-46fa-4508-8dd2-fdd34388f40f.mp4

  
