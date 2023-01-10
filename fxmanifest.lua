fx_version 'cerulean'
game 'gta5'

author 'Dioxazine'
version '1.0.0'


client_script 'client.lua'
server_script 'server.lua'
shared_script 'config.lua'


ui_page 'html/index.html'

files {
    'html/index.html',
    'html/index.js',
    'html/index.css',
    'html/images/*',
}

--[[
    First Argument is the number of guesses a player has to guess. Recommended 5 for easier and 4 for hard.
    Second Argument is the length of the code. Recommended 4. 
    exports["dio_puzzle"]:guessCode(5, 4,
    function() -- success
        print("success")
    end,
    function() -- failure
        print("failure")
    end)
]]