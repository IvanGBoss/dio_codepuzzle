local successCb
local failCb
local resultReceived = false

RegisterNUICallback('dioResult', function(data, cb)
    SetNuiFocus(false, false)
    resultReceived = true
    if data.success then
        successCb()
    else
        failCb()
    end
    cb('ok')
end)

if Config.TestCommand then
    TriggerEvent('chat:addSuggestion', '/diopuzzle', 'Start the puzzle game', {
        { name = "Guesses", help = "Number Of Guesses" },
        { name = "Code", help = "Length of the Code" }
    })
    
    RegisterCommand('diopuzzle', function(source, args, raw)
        NumberofGuesses = args[1]
        LengthOfCode = args[2]
        print(NumberofGuesses)
        print(LengthOfCode)
        exports["dio_codepuzzle"]:guessCode(NumberofGuesses, LengthOfCode,
        function() -- success
            print("success")
        end,
        function() -- failure
            print("failure")
        end)
    end)
end



exports('guessCode', function(numberOfGuesses, codeLen, success, fail)
    -- numberOfGuesses = Number of guesses the player will have to figure out the code. 
    -- codeLen = Length of the code.
    resultReceived = false
    successCb = success
    failCb = fail
    SetNuiFocus(true, true)
    SendNUIMessage({
        type = "Start",
        guesses = numberOfGuesses,
        codeLen = codeLen, 
    })
end)